import { useState } from "react";

import { useParams } from "react-router-dom";

//* GENERICS
import Line from "@/components/UI/GenericComponents/General/Line/Line";
import BoldField from "@/components/UI/GenericComponents/Fields/Bold";
import { ResumeDataField } from "@/components/UI/GenericComponents/Fields/ResumeDataField";
import { MainHeading } from "@/components/UI/GenericComponents/Headings/Main/MainHeading";
import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";

//* APIs
import { useListSaleDetailsByID } from "./api/useListSaleDetailsByID";

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";
import { TableTransparentSpinner } from "../../../components/UI/Spinners/TableTransparentSpinner";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { SaleProductDetailsColumns } from "./Columns/SaleProductDetailsColumns";

//* UTILS
import { formatKey } from "@/utils/helpers";
import { SalesOperationStatus } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { formatSpanishDatePassed } from "@/utils/dates";
import { commaSeparator } from "@/utils/commaSeparator";
import { ButtonPrimaryBlueRadius } from "@/components/UI/GenericComponents/Buttons/Primary/ButtonPrimaryBlueRadius";
import { CloseEditFinish } from "@/components/UI/GenericComponents/CloseEditFinish/CloseEditFinish";

import { Formik, Form } from "formik";
import { Helmet } from "react-helmet-async";

export function UpdateSaleForm() {
  const { id } = useParams<{ id: string }>();
  const { listSaleDetailsByID, listSaleProductDetailsByID, isLoading } =
    useListSaleDetailsByID(id!);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  console.log(listSaleDetailsByID);

  return (
    <>
      <Helmet>
        <title>Jael | Actualizar Venta</title>
        <meta name="description" content="Actualizar Venta" />
      </Helmet>
      <Formik
        initialValues={{
          isSecondButton: false,
          isEditing,
        }}
        onSubmit={async (values) => {
          // if (values.isSecondButton) {
          //   try {
          //   } catch (error) {
          //     console.log(error);
          //   }
          // }
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <LayoutForm values={values}>
            <Form onSubmit={handleSubmit} autoComplete={"off"}>
              <SectionForm>
                <div className="flex__spacing-betweenMY">
                  <MainHeading title={`ID de venta: ${formatKey(id!)}`} />
                  <div className="flex__spacing">
                    <button className="button__secondaryFit">
                      Imprimir Ticket
                    </button>
                    <button className="button__secondaryFit">
                      Guardar Ticket
                    </button>
                  </div>
                </div>

                <Line size="large" />

                <MainHeading title="Cliente" />

                {isLoading ? (
                  <TableTransparentSpinner />
                ) : (
                  <>
                    <div className="flex__spacing2-MY">
                      <BoldField text="Nombre Cliente" />
                      <ResumeDataField
                        text={`
               ${listSaleDetailsByID?.clientName!} - ${
                          listSaleDetailsByID?.clientID &&
                          formatKey(listSaleDetailsByID?.clientID!)
                        }
              
               `}
                      />
                    </div>

                    <div className="flex__spacing2-MY">
                      <BoldField text="Fecha de Venta" />
                      <ResumeDataField
                        text={formatSpanishDatePassed(
                          listSaleDetailsByID?.date!
                        )}
                      />
                    </div>
                    <div className="flex__spacing2-MY">
                      <div className="flex__spacing2">
                        <BoldField text="Status" />
                        <ResumeDataField
                          text={
                            listSaleDetailsByID?.status ===
                            SalesOperationStatus.PENDING
                              ? "Saldo Por Pagar"
                              : "Pagado"
                          }
                        />
                      </div>
                      <div className="flex__spacing2">
                        <BoldField text="Crédito" />
                        <ResumeDataField
                          text={
                            +listSaleDetailsByID?.credit_available! > 0
                              ? "$" +
                                commaSeparator(
                                  listSaleDetailsByID?.credit_available!
                                )
                              : "No Disponible"
                          }
                        />
                      </div>
                    </div>
                    <MainHeading title="Productos Vendidos" />

                    <ShowTableData
                      Data={listSaleProductDetailsByID}
                      Columns={SaleProductDetailsColumns}
                      notFoundDataMessage="No se encontraron productos vendidos"
                      hasTBodyBorder={true}
                    />

                    <MainHeading title="Resumen de Pagos" />

                    <div className="flex__spacing2-MY">
                      <BoldField text="Total Pagado" />
                      <ResumeDataField
                        text={
                          "$" +
                          commaSeparator(listSaleDetailsByID?.amountPaid! || 0)
                        }
                      />
                    </div>

                    <MainHeading title="Adeudo de Venta" />
                    <div className="flex__spacing">
                      <ButtonPrimaryBlueRadius text="Adeudo de Venta" />
                      <ResumeDataField
                        text={
                          "$" +
                          commaSeparator(
                            listSaleDetailsByID?.pendingToPay! || 0
                          )
                        }
                      />
                    </div>

                    <CloseEditFinish
                      isEditing={isEditing}
                      setIsEditing={setIsEditing}
                      customFinishText="Cobrar Adeudo"
                      setFieldValue={setFieldValue}
                      
                    />
                  </>
                )}
              </SectionForm>
            </Form>
          </LayoutForm>
        )}
      </Formik>
    </>
  );
}
