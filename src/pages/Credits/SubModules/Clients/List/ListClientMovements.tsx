import { useEffect } from "react";

import { useParams } from "react-router-dom";

import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";

import { useListClientMovementsData } from "./api/useListClientMovementsData";
import { LayoutForm } from "@/components/Layouts/LayoutForm";
import { formatKey } from "../../../../../utils/helpers";
import { useSectionProvider } from "../../../../../hooks/useSectionProvider";
import { PaymentStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";

import { ListClientMovementsColumns } from "./Columns/ListClientMovementsColumns";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { Back } from "@/components/UI/GenericComponents/Back/Back";
import { commaSeparator } from "@/utils/commaSeparator";
import { SalesOperationClientCreditMovementStatus } from "@/utils/globalObjs/sideMenuSections/PointOfSale/PointOfSaleObjs";
import { toFixedTwo } from "@/pages/PointOfSale/PDVForm/Add/helpers/functions";

import { IListClientMovementsProps } from "./interfaces/ListClientMovements";
import { GeneralBackFinish } from "@/components/UI/GenericComponents/BackFinish/GeneralBackFinish";
import { PrimaryHeading } from "@/components/UI/GenericComponents/Headings/Primary/PrimaryHeading";
import BoldField from "@/components/UI/GenericComponents/Fields/Bold";
import { MainHeading } from "@/components/UI/GenericComponents/Headings/Main/MainHeading";

export function ListClientMovements({
  isPaying,
  handleClientMovementsData,
  setFieldValue,
  amountToPay,
}: IListClientMovementsProps) {
  const { id } = useParams();

  const { setFilteredCheckedFields, setHasParams, filteredCheckedFields } =
    useSectionProvider();

  const { isLoading, listClientMovementsData, listClientMovementsDataTable } =
    useListClientMovementsData(id!, isPaying && true);

  useEffect(() => {
    setHasParams(true);
  }, []);

  useEffect(() => {
    if (isPaying) {
      handleClientMovementsData!(listClientMovementsDataTable);
    }
  }, [listClientMovementsDataTable]);

  return (
    <>
      {!isPaying ? (
        <LayoutForm>
          <SectionForm
            headingTitle={`${listClientMovementsData[0]?.clientName} -
        ${
          listClientMovementsData[0]?.clientID &&
          formatKey(listClientMovementsData[0]?.clientID)
        } `}
            fullWidthBGSec={true}
          >
            <>
              <div className="flex__spacingWrapMY">
                <div className="flexColumn__MinW300PXWrap">
                  <p className="bold">Crédito disponible</p>
                  <div className="input__WFullTransparentTLRoundedSMB3">
                    $
                    {listClientMovementsData[0]?.credit_available &&
                      commaSeparator(
                        listClientMovementsData[0]?.credit_available
                      )}
                  </div>
                </div>
                <div className="flexColumn__MinW300PXWrap">
                  <p className="bold">Adeudo(s)</p>
                  <div className="input__WFullTransparentTLRoundedSMB3">
                    $
                    {listClientMovementsData[0]?.outstanding_balance &&
                      commaSeparator(
                        toFixedTwo(
                          listClientMovementsData[0]?.outstanding_balance
                        )
                      )}
                  </div>
                </div>
                <div className="flexColumn__MinW300PXWrap">
                  <p className="bold">Crédito desde</p>
                  <div className="input__WFullTransparentTLRoundedSMB3">
                    {listClientMovementsData[0]?.creditSince}
                  </div>
                </div>
              </div>

              <div className="flex__spacingCenter-MY">
                <div className="flex__spacing">
                  <label htmlFor="payments" className="bold">
                    Todos los pagos
                  </label>
                  <input
                    type="radio"
                    name="payments"
                    onChange={() => {
                      setFilteredCheckedFields((prev: string[]) => {
                        return [];
                      });
                    }}
                  />
                </div>

                <div className="flex__spacing">
                  <label htmlFor="payments" className="bold">
                    Pagos vencidos
                  </label>
                  <input
                    type="radio"
                    name="payments"
                    onChange={() => {
                      setFilteredCheckedFields((prev: string[]) => {
                        return [PaymentStatus.EXPIRED];
                      });
                    }}
                  />
                </div>
              </div>

              <ShowTableData
                Data={listClientMovementsDataTable}
                Columns={ListClientMovementsColumns}
                notFoundDataMessage={
                  filteredCheckedFields.includes(
                    SalesOperationClientCreditMovementStatus.EXPIRED
                  )
                    ? "No hay pagos vencidos"
                    : "No hay movimientos registrados"
                }
                hasTBodyBorder={true}
                isLoading={isLoading}
              />
            </>

            <Back />
          </SectionForm>
        </LayoutForm>
      ) : (
        <SectionForm
          headingTitle={`${listClientMovementsData[0]?.clientName} -
    ${
      listClientMovementsData[0]?.clientID &&
      formatKey(listClientMovementsData[0]?.clientID)
    } `}
          fullWidthBGSec={true}
        >
          <>
            <div className="flex__spacingWrapMY">
              <div className="flexColumn__MinW300PXWrap">
                <p className="bold">Crédito disponible</p>
                <div className="input__WFullTransparentTLRoundedSMB3 centerBold">
                  $
                  {listClientMovementsData[0]?.credit_available &&
                    commaSeparator(
                      listClientMovementsData[0]?.credit_available
                    )}
                </div>
              </div>
              <div className="flexColumn__MinW300PXWrap">
                <p className="bold">Total de Adeudo</p>
                <div className="input__WFullTransparentTLRoundedSMB3 centerBold">
                  $
                  {listClientMovementsData[0]?.outstanding_balance &&
                    commaSeparator(
                      toFixedTwo(
                        listClientMovementsData[0]?.outstanding_balance
                      )
                    )}
                </div>
              </div>
              <div className="flexColumn__MinW300PXWrap">
                <p className="bold">Crédito desde</p>
                <div className="input__WFullTransparentTLRoundedSMB3 centerBold">
                  {listClientMovementsData[0]?.creditSince}
                </div>
              </div>

              <div className="flexColumn__MinW300PXWrap">
                <p className="bold">Días entre pagos</p>
                <div className="input__WFullTransparentTLRoundedSMB3 centerBold">
                  {listClientMovementsDataTable[0]?.termDaysToPay}
                </div>
              </div>
            </div>

            {/* <div className="flex__spacingCenter-MY">
              <div className="flex__spacing">
                <label htmlFor="payments" className="bold">
                  Todos los pagos
                </label>
                <input
                  type="radio"
                  name="payments"
                  onChange={() => {
                    setFilteredCheckedFields((prev: string[]) => {
                      return [];
                    });
                  }}
                />
              </div>

              <div className="flex__spacing">
                <label htmlFor="payments" className="bold">
                  Pagos vencidos
                </label>
                <input
                  type="radio"
                  name="payments"
                  onChange={() => {
                    setFilteredCheckedFields((prev: string[]) => {
                      return [PaymentStatus.EXPIRED];
                    });
                  }}
                />
              </div>
            </div> */}

            <PrimaryHeading title="Confirmar Pago" />

            <ShowTableData
              Data={listClientMovementsDataTable}
              Columns={ListClientMovementsColumns}
              notFoundDataMessage={
                filteredCheckedFields.includes(
                  SalesOperationClientCreditMovementStatus.EXPIRED
                )
                  ? "No hay pagos vencidos"
                  : "No hay movimientos registrados"
              }
              hasTBodyBorder={true}
              isLoading={isLoading}
            />

            <div className="flex__spacingWrapMY">
              <MainHeading
                title="Total a Pagar"
                customStyle="heading__primaryPSM"
              />
              <div className="input__min300PrimaryRounded centerBold">
                ${commaSeparator(+listClientMovementsData[0]?.totalToPay!)}
              </div>
            </div>
          </>

          <GeneralBackFinish
            SubmitText="Pagar"
            toBeFinished={true}
            popUpMessage={"¿Estás seguro que deseas realizar el pago?"}
            setFieldValue={setFieldValue}
          />
        </SectionForm>
      )}
    </>
  );
}
