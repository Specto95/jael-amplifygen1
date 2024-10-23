import { useEffect, useState } from "react";
import { Field, ErrorMessage } from "formik";

import { commaSeparator } from "@/utils/commaSeparator";

import { IClientCreditDetailsProps } from "./interfaces/IClientCreditDetails";
import { CreditsS3Objs } from "@/utils/S3/SideMenuSections/Credits/CreditsObjs";
import { CreditRequestStatus } from "@/utils/globalObjs/sideMenuSections/Credits/CreditsObjs";
import { CustomGeneralBackFinish } from "@/components/UI/GenericComponents/CustomBackFinish/CustomBackFinish";

import { Switch } from "antd";

import { creditStatusSpanishFC } from "../../../helpers/functions";
import { setNewClientTotalCredit } from "./helpers/functions";

import { useSessionProvider } from "@/hooks/useSessionProvider";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";

import { getUrl, list } from "aws-amplify/storage";

export function ClientCreditDetails({
  handleBackStep,
  clientData,
  newClientCreditAmount,
  setFieldValue,
  setWasRejected,
  isListing,
  newClientTotalCredit,
}: IClientCreditDetailsProps) {
  const { rolID } = useSessionProvider();

  const [clientCreditDocumentsNames, setClientCreditDocumentsNames] = useState<
    string[]
  >([]);

  const [toggle, setToggle] = useState<boolean>(false);
  const [toBeFinished, setToBeFinished] = useState<boolean>(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  const handleToBeFinished = () => {
    setToBeFinished(!clientData?.hasCredit ? true : newClientCreditAmount! > 0);
  };

  const downloadFile = async (key: string) => {
    const clientCreditDocumentFound = clientCreditDocumentsNames.find(
      (fileName) => fileName === key
    );

    if (clientCreditDocumentFound) {
      try {
        const signedURL = await getUrl({
          key: `${CreditsS3Objs.CLIENTCREDITREQUESTDOCUMENTS}/${
            clientData!.id
          }/${key}`,
          options: {
            validateObjectExistence: true,
          },
        });
      
        // const response = await fetch(signedURL);
        // const blob = await response.blob();

        // // Create a blob link for download
        // const url = window.URL.createObjectURL(blob);
        // const link = document.createElement("a");
        // link.href = url;
        // link.setAttribute("download", key);
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        // window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading the file:", error);
      }
    }
  };

  useEffect(() => {
    setFieldValue!(
      "newClientTotalCredit",
      clientData?.totalCredit || clientData?.creditRequestAmount!
    );
  }, []);

  useEffect(() => {
    const fetchClientCreditDocuments = async () => {
      if (!clientData) return;

      setClientCreditDocumentsNames([]);

      try {
        const result = await list({
          prefix: `${CreditsS3Objs.CLIENTCREDITREQUESTDOCUMENTS}/${
            clientData!.id
          }/`,
          options: {
            pageSize: 1000,
          },
        });
        if (result) {
          const newFileNames: string[] = [];

          result.items.map((result) => {
            const fileName = result.key!.split("/")[2];
            newFileNames.push(fileName);
          });

          setClientCreditDocumentsNames(newFileNames);
        }
      } catch (error) {
        console.log("Error retrieving product image:", error);
      }
    };

    fetchClientCreditDocuments();
  }, [clientData?.id]);

  useEffect(() => {
    handleToBeFinished();
  }, [newClientCreditAmount]);

  return (
    <section className="generalForm">
      <h1 className="heading__main">Crédito Cliente</h1>
      <h2 className="heading__primary">Información Cliente</h2>
      <div className="flexColumn__BGSecondary">
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Nombre completo</p>
          <p>{clientData?.name}</p>
        </div>
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Correo electrónico</p>
          <p>{clientData?.email}</p>
        </div>
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Número de contacto</p>
          <p>{clientData?.phone}</p>
        </div>
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Calle y número</p>
          <p>{clientData?.address}</p>
        </div>
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Colonia</p>
          <p>{clientData?.settlement}</p>
        </div>
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Código Postal</p>
          <p>{clientData?.postal_code}</p>
        </div>
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Estado</p>
          <p>{clientData?.state}</p>
        </div>
        <div className="flex__spacingBetween-MYXS">
          <p className="bold">Ciudad</p>
          <p>{clientData?.city}</p>
        </div>
        {clientData?.creditRequestStatus === CreditRequestStatus.APPROVED && (
          <>
            <div className="flex__spacingBetween-MYXS">
              <p className="bold">Crédito Disponible</p>
              <p>{`$ ${commaSeparator(clientData?.credit_available!)}`}</p>
            </div>

            <div className="flex__spacingBetween-MYXS">
              <p className="bold">Saldo Actual</p>
              <p>{`$ ${commaSeparator(clientData?.outstanding_balance!)}`}</p>
            </div>

            <div className="flex__spacingBetween-MYXS">
              <p className="bold">Crédito Desde</p>
              <p>{clientData?.creditSince}</p>
            </div>
          </>
        )}
        {clientData?.creditRequestStatus === CreditRequestStatus.PENDING && (
          <div className="flex__spacingBetween-MYXS">
            <p className="bold">Monto crédito solicitado</p>
            <p>{`$ ${commaSeparator(clientData?.creditRequestAmount!)}`}</p>
          </div>
        )}

        <div className="flex__spacingEvenly-MYSMPX10PC">
          {clientCreditDocumentsNames.map((fileName) => (
            <a
              target="_blank"
              rel="noreferrer"
              className="input__min300RoundedSMB4Pointer"
              key={fileName}
              onClick={() => downloadFile(fileName)}
            >
              {fileName}
            </a>
          ))}
        </div>
      </div>

      {clientData?.creditRequestStatus === CreditRequestStatus.PENDING && (
        <>
          <h3 className="heading__primary">Motivo de solicitud de crédito</h3>

          <div className="flexColumn__BGSecondary">
            <p className="bold">{clientData!.creditRequestReason}</p>
          </div>
        </>
      )}

      <>
        <h3 className="heading__primary">Crédito actual de cliente</h3>
        <div className="flex__spacing2BetweenMYSM">
          <div className="flex__spacing">
            <label htmlFor="clientCredit" className="bold">
              Crédito
            </label>
            {isListing ? (
              <>
                <p className="input__min300RoundedSMB4">
                  {creditStatusSpanishFC(clientData?.creditRequestStatus!)}
                </p>
              </>
            ) : (
              <p className="input__min300RoundedSMB4">
                {creditStatusSpanishFC(clientData?.creditRequestStatus!)}
              </p>
            )}
          </div>
          <div className="flex__spacing2">
            {clientData?.creditRequestStatus !==
            CreditRequestStatus.APPROVED ? (
              <></>
            ) : (
              <>
                <p className="bold">Monto actual de Crédito</p>
                <p className="input__min300RoundedSMB4">
                  {`$ ${commaSeparator(
                    clientData!.totalCredit || clientData!.creditRequestAmount!
                  )}`}
                </p>
              </>
            )}
          </div>
        </div>

        {isListing ||
        clientData?.creditRequestStatus !== CreditRequestStatus.APPROVED ? (
          <></>
        ) : (
          <>
            <div className="flex__spacing2BetweenMYSM">
              <div className="flex__spacing">
                <label htmlFor="clientCredit" className="bold">
                  Aumentar Crédito
                </label>
                <Switch
                  onClick={handleToggleChange}
                  className={toggle ? "toggler__BGPrimary" : ""}
                  checkedChildren="Si"
                  unCheckedChildren="No"
                  checked={toggle}
                />
              </div>
            </div>
            {toggle && (
              <div className="flex__spacing-betweenMY">
                <div className="flex__spacing">
                  <label htmlFor="newClientCreditAmount" className="bold">
                    Total a Aumentar
                  </label>
                  <Field
                    className="input__min300RoundedSMB4"
                    type="number"
                    pattern="[1-9][0-9]*"
                    inputMode="numeric"
                    min="1"
                    name="newClientCreditAmount"
                    id="newClientCreditAmount"
                    placeholder="Monto de crédito a Aumentar:"
                    value={newClientCreditAmount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.preventDefault();
                      setFieldValue!("newClientCreditAmount", +e.target.value);
                      setFieldValue!(
                        "newClientTotalCredit",
                        setNewClientTotalCredit(+e.target.value, clientData!)
                      );
                    }}
                  />
                  <ErrorMessage name="newClientCreditAmount" component="div" />
                </div>
                <div className="flex__spacing">
                  <label htmlFor="newClientTotalCredit" className="bold">
                    Nuevo Crédito Total
                  </label>
                  <p className="input__min300PrimaryRounded">
                    {`$ ${commaSeparator(
                      newClientTotalCredit! ||
                        clientData!.totalCredit ||
                        clientData!.creditRequestAmount!
                    )}`}
                  </p>
                  <ErrorMessage name="newTotalCredit" component="div" />
                </div>
              </div>
            )}
          </>
        )}
      </>

      {/* {isUpdating &&
        clientData?.creditRequestStatus !== CreditRequestStatus.APPROVED && (
          <div className="flexColumn__spacingMY">
            <MainHeading title="Estado del Crédito" />
            <div className="flex__spacing">
              <label htmlFor="clientCredit" className="bold">
                Crédito
              </label>
              <p className="input__min300RoundedSMB4">
                {creditStatusSpanishFC(clientData?.creditRequestStatus!)}
              </p>
            </div>
          </div>
        )} */}

      <CustomGeneralBackFinish
        handleBackStep={handleBackStep}
        setFieldValue={setFieldValue}
        SubmitText={
          newClientCreditAmount! > 0 ? "Aumentar Crédito" : "Generar Crédito"
        }
        CustomSubmitText={
          clientData?.creditRequestStatus === CreditRequestStatus.APPROVED
            ? "Rechazar Aumento"
            : "Rechazar Crédito"
        }
        setCustomValue={setWasRejected}
        showFinish={!clientData?.hasCredit ? true : toggle}
        toBeFinished={toBeFinished}
        showActions={rolID === AccountFormObj.ADMIN ? true : false}
      />
    </section>
  );
}
