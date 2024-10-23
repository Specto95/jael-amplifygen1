import { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

//* HOOKS
import { ListClientMovements as ListClientMovementsPayment } from "../Clients/List/ListClientMovements";

//* INTERFACES
import { IListClientMovementsDataTableAPI } from "../Clients/List/api/interfaces/IListClientMovementsData";
import {
  IUpdateSalesOperationClientCreditMovementPaymentInput,
  IUpdateSalesOperationPaymentInput,
  IUpdateSalesOperationStatusInput,
} from "./interfaces/inputs/IAccountsReceivable";
import { getCurrentDate } from "@/utils/dates";
import { SalesOperationStatus } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { commaSeparator } from "@/utils/commaSeparator";

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

import { useCheckIsLastPayment } from "./api/useCheckIsLastPayment";

export function AccountsReceivableForm() {
  const { id } = useParams<{ id: string }>();

  const { checkIsLastPayment } = useCheckIsLastPayment(id!);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [
    listClientMovementsDataTableForm,
    setListClientMovementsDataTableForm,
  ] = useState<IListClientMovementsDataTableAPI[]>([]);

  const handleClientMovementsData = (
    tableData: IListClientMovementsDataTableAPI[]
  ) => {
    setListClientMovementsDataTableForm(tableData);
  };

  return (
    <>
      <Helmet>
        <title>Jael | Pagar Cuenta</title>
        <meta name="description" content="Pagar Cuenta" />
      </Helmet>
      <Formik
        initialValues={{
          isSecondButton: false,
          amountToPay: 0,
        }}
        onSubmit={async (values) => {
          if (values.isSecondButton) {
            setIsModalOpen(true);
            try {
              const {
                updateSalesOperationPaymentAPI,
                updateSalesOperationClientCreditMovementPaymentAPI,
              } = await import("@/graphql/mutations");
              const { clientAPI } = await import("@/utils/amplifyAPI/client");

              const updateSalesOperationPaymentInput: IUpdateSalesOperationPaymentInput =
                {
                  id: listClientMovementsDataTableForm[0].id,
                  amountPaid:
                    // +listClientMovementsDataTableForm[0].amountPaid +
                    +listClientMovementsDataTableForm[0].amountToPayMovement!,
                  currentTotalPayments:
                    listClientMovementsDataTableForm[0].currentTotalPayments +
                    1,
                  pendingToPay:
                    listClientMovementsDataTableForm[0].pendingToPay -
                    listClientMovementsDataTableForm[0].pendingToPayMovement!,
                  lastDatePaid: getCurrentDate(),
                };

              await clientAPI(updateSalesOperationPaymentAPI, {
                input: updateSalesOperationPaymentInput,
              });

              const updateSalesOperationClientCreditMovementPaymentInput: IUpdateSalesOperationClientCreditMovementPaymentInput =
                {
                  id: listClientMovementsDataTableForm[0]
                    .salesOperationClientMovementID!,
                  amountPaid:
                    listClientMovementsDataTableForm[0].amountToPayMovement!,
                  pendingToPay: 0,
                  datePaid: getCurrentDate(),
                  status: SalesOperationStatus.PAID,
                };

              await clientAPI(
                updateSalesOperationClientCreditMovementPaymentAPI,
                {
                  input: updateSalesOperationClientCreditMovementPaymentInput,
                }
              );

              if (checkIsLastPayment) {
                const { updateSalesOperationStatusAPI } = await import(
                  "@/graphql/mutations"
                );
                const updateSalesOperationInput: IUpdateSalesOperationStatusInput =
                  {
                    id: id!,
                    status: SalesOperationStatus.PAID,
                  };

                await clientAPI(updateSalesOperationStatusAPI, {
                  input: updateSalesOperationInput,
                });
              }

              console.log("COMPLETED!");
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <LayoutForm values={values}>
            <Form onSubmit={handleSubmit} autoComplete={"off"}>
              {
                <ListClientMovementsPayment
                  isPaying={true}
                  handleClientMovementsData={handleClientMovementsData}
                  setFieldValue={setFieldValue}
                  amountToPay={values.amountToPay}
                />
              }
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalSuccess
          title={`Pago de $${commaSeparator(
            listClientMovementsDataTableForm[0].pendingToPayMovement!
          )} registrado exitosamente`}
          setIsModalOpen={setIsModalOpen}
          sectionName={"creditsAccountsReceivable"}
        />
      )}
    </>
  );
}
