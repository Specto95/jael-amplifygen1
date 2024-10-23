import { ChangeEvent, useState, useEffect } from "react";

import { Field } from "formik";

import FrenteINE from "@/assets/img/FrenteINE.png";
import FrenteINESubmit from "@/assets/img/FrenteINESubmit.png";
import Document from "@/assets/img/Document.png";
import TraseroINE from "@/assets/img/TraseroINE.png";
import TraseroINESubmit from "@/assets/img/TraseroINESubmit.png";
import DeleteCircle from "@/assets/img/DeleteCircle.png";
import ProofAddress from "@/assets/img/ProofAddress.png";
import ProofAddressSubmit from "@/assets/img/ProofAddressSubmit.png";
import Approved from "@/assets/img/Approved.png";

import { useSessionProvider } from "@/hooks/useSessionProvider";

//* INTERFACES
import { ICreditRequestDataProps } from "./interfaces/ICreditRequestData";
import { BackFinish } from "@/pages/PointOfSale/PDVForm/Add/GenericComponents/BackFinish/BackFinish";

export function CreditRequestData({
  selectedClient,
  handleBackStep,
  currentStepIndex,
  setFieldValue,
  isCheckedClientDocuments,
  creditRequestAmount,
  fileNameFrenteINE,
  fileNameProofAddress,
  fileNameTraseroINE,
  setFileNameFrenteINE,
  setFileNameProofAddress,
  setFileNameTraseroINE,
}: ICreditRequestDataProps) {
  const { mainBranchInventory } = useSessionProvider();
  const [imageFrenteINE, setImageFrenteINE] = useState("");
  const [imageTraseroINE, setImageTraseroINE] = useState("");
  const [imageProofAddress, setImageProofAddress] = useState("");

  const [toBeFinished, setToBeFinished] = useState(false);

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    setFileName: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelection(file, setImage, setFileName);
    }
  };

  const handleFileSelection = (
    file: File,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    setFileName: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    setImage(URL.createObjectURL(file));
    setFileName(file);
  };

  const handleRemoveFile = (
    setImage: React.Dispatch<React.SetStateAction<string>>,
    setFileName: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    setImage("");
    setFileName(null);
  };

  useEffect(() => {
    if (
      // imageFrenteINE &&
      // imageTraseroINE &&
      // imageProofAddress &&
      creditRequestAmount
    ) {
      setToBeFinished(true);
    } else {
      setToBeFinished(false);
    }
  }, [imageFrenteINE, imageTraseroINE, imageProofAddress, creditRequestAmount]);

  return (
    <section className="generalForm__MW34">
      <h1 className="heading__main">Solicitud de Crédito</h1>

      <h2 className="heading__primary">Datos de contacto</h2>

      <div className="grid42__spacingMYWrap">
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Nombre</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.name || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Segundo Nombre</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.second_name || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Primer Apellido</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.lastname || "-"}
          </span>
        </div>
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Segundo Apellido</p>
          <span className="input__WFullTransparentRoundedSMB3">
            {selectedClient!.second_lastname || "-"}
          </span>
        </div>
      </div>

      <div className="flexColumn__spacingMY">
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Correo Electrónico</p>
          <span className="input__WHalfTransparentRoundedSMB3">
            {selectedClient!.email || "-"}
          </span>
        </div>
      </div>

      <div className="flexColumn__spacingMY">
        <div className="flexColumn__basis">
          <p className="heading__secondary bold">Número de contacto</p>
          <span className="input__WHalfTransparentRoundedSMB3">
            {selectedClient!.phone || "-"}
          </span>
        </div>
      </div>

      <h2 className="heading__primary">Crédito solicitado de Cliente</h2>

      <div className="flex__spacingMY">
        <div className="flexColumn__WFull">
          <label htmlFor="creditRequestAmount" className="label__blockFull">
            Monto de crédito solicitado
          </label>
          <Field
            type="number"
            name="creditRequestAmount"
            id="creditRequestAmount"
            className="input__halfSecondaryRoundedSMB2"
            placeholder="Monto de crédito solicitado"
          />
        </div>
      </div>

      {!mainBranchInventory.id && (
        <>
          <h2 className="heading__primary">Motivo de solicitud de crédito</h2>

          <div className="flex__spacingMY">
            <div className="flexColumn__WFull">
              <label htmlFor="creditRequestReason" className="label__blockFull">
                Plazo de pagos solicitado
              </label>
              <Field
                as="textarea"
                name="creditRequestReason"
                id="creditRequestReason"
                placeholder="Motivo de solicitud de crédito"
                className="input__WFullBGSecondaryTLRoundedSMB4"
              />
            </div>
          </div>

          <h2 className="heading__primary">Documentos del Cliente</h2>

          <div className="flex__spacingMY">
            <Field
              type="checkbox"
              name="isCheckedClientDocuments"
              id="isCheckedClientDocuments"
              className="input__checkbox"
              onClick={() => setFieldValue!("isCheckedClientDocuments", true)}
            />
            <label
              htmlFor="isCheckedClientDocuments"
              className="label__blockFull"
            >
              Agregar documentación del cliente
            </label>
          </div>
        </>
      )}

      {isCheckedClientDocuments && (
        <>
          <div className="flexColumn__spacingCustomPadding">
            <div className="flexColumn__spacingBasisHalf">
              <>
                {imageFrenteINE ? (
                  <div className="flexColumn__spacingCenterCustomSucceedBGPrimary">
                    <img
                      src={FrenteINESubmit}
                      alt="FrenteINESubmit"
                      // className="absolute__img"
                      width={50}
                      height={50}
                    />

                    <p className="bold">Archivo cargado correctamente</p>

                    <div className="flex__customBetweenBorderSecondary">
                      <img
                        src={Document}
                        alt="Document"
                        width={50}
                        height={50}
                      />
                      <p>{fileNameFrenteINE?.name}</p>

                      <img
                        src={DeleteCircle}
                        alt="DeleteCircle"
                        width={50}
                        height={50}
                        onClick={() => {
                          if (setFileNameFrenteINE) {
                            handleRemoveFile(
                              setImageFrenteINE,
                              setFileNameFrenteINE
                            );
                          }
                        }}
                        className="pointer"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flexColumn__spacingCenterDashed2PX">
                    <img
                      src={FrenteINE}
                      alt="FrenteINE"
                      className="img__INE"
                      width={50}
                      height={50}
                    />

                    <p className="heading__secondary">INE Frontal</p>

                    <p className="bold">Arrastrar imagen o PDF aquí</p>

                    <p>
                      Tomar foto de la parte de enfrente del INE del cliente
                      asegurándote que sea legible
                    </p>
                  </div>
                )}
              </>

              <Field
                type="file"
                name="photoFrenteINE"
                accept="image/*"
                id="photoFrenteINE"
                // className={styles.productform__uploadfile}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleFileChange(e, setImageFrenteINE, setFileNameFrenteINE!)
                }
              />
              <label
                htmlFor="photoFrenteINE"
                className={
                  imageFrenteINE
                    ? "button__uploadfile-textWFullBGTransparent"
                    : "button__uploadfile-textWFull"
                }
              >
                {imageFrenteINE ? "Cambiar Archivo" : "Cargar desde equipo"}
              </label>
            </div>

            <div className="flexColumn__spacingBasisHalf">
              <>
                {imageTraseroINE ? (
                  <div className="flexColumn__spacingCenterCustomSucceedBGPrimary">
                    <img
                      src={TraseroINESubmit}
                      alt="TraseroINESubmit"
                      className="img__INE"
                      width={50}
                      height={50}
                    />

                    <p className="bold">Archivo cargado correctamente</p>

                    <div className="flex__customBetweenBorderSecondary">
                      <img
                        src={Document}
                        alt="Document"
                        width={50}
                        height={50}
                      />
                      <p>{fileNameTraseroINE?.name}</p>

                      <img
                        src={DeleteCircle}
                        alt="DeleteCircle"
                        width={50}
                        height={50}
                        onClick={() =>
                          handleRemoveFile(
                            setImageTraseroINE,
                            setFileNameTraseroINE!
                          )
                        }
                        className="pointer"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flexColumn__spacingCenterDashed2PX">
                    <img
                      src={TraseroINE}
                      alt="TraseroINE"
                      className="img__INE"
                      width={50}
                      height={50}
                    />

                    <p className="heading__secondary">INE Trasero</p>

                    <p className="bold">Arrastrar imagen o PDF aquí</p>

                    <p>
                      Tomar foto de la parte trasera del INE del cliente
                      asegurándote que sea legible
                    </p>
                  </div>
                )}
              </>

              <Field
                type="file"
                name="photoTraseroINE"
                accept="image/*"
                id="photoTraseroINE"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleFileChange(
                    e,
                    setImageTraseroINE,
                    setFileNameTraseroINE!
                  )
                }
              />
              <label
                htmlFor="photoTraseroINE"
                className={
                  imageTraseroINE
                    ? "button__uploadfile-textWFullBGTransparent"
                    : "button__uploadfile-textWFull"
                }
              >
                {imageTraseroINE ? "Cambiar Archivo" : "Cargar desde equipo"}
              </label>
            </div>

            <div className="flexColumn__spacingBasisHalf">
              <>
                {imageProofAddress ? (
                  <div className="flexColumn__spacingCenterCustomSucceedBGPrimary">
                    <img
                      src={ProofAddressSubmit}
                      alt="ProofAddressSubmit"
                      className="img__INE"
                      width={50}
                      height={50}
                    />

                    <p className="bold">Archivo cargado correctamente</p>

                    <div className="flex__customBetweenBorderSecondary">
                      <img
                        src={Document}
                        alt="Document"
                        width={50}
                        height={50}
                      />
                      <p>{fileNameProofAddress?.name}</p>

                      <img
                        src={DeleteCircle}
                        alt="DeleteCircle"
                        width={50}
                        height={50}
                        onClick={() =>
                          handleRemoveFile(
                            setImageProofAddress,
                            setFileNameProofAddress!
                          )
                        }
                        className="pointer"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flexColumn__spacingCenterDashed2PX">
                    <img
                      src={ProofAddress}
                      alt="ProofAddress"
                      width={50}
                      height={50}
                    />

                    <p className="heading__secondary">
                      Comprobante de Domicilio
                    </p>

                    <p className="bold">Arrastrar imagen o PDF aquí</p>

                    <p>
                      Comprobante de Domicilio de no más de 3 meses de
                      antigüedad legible.
                    </p>
                  </div>
                )}
              </>

              <Field
                type="file"
                name="photoProofAddress"
                accept="image/*"
                id="photoProofAddress"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleFileChange(
                    e,
                    setImageProofAddress,
                    setFileNameProofAddress!
                  )
                }
              />
              <label
                htmlFor="photoProofAddress"
                className={
                  imageProofAddress
                    ? "button__uploadfile-textWFullBGTransparent"
                    : "button__uploadfile-textWFull"
                }
              >
                {imageProofAddress ? "Cambiar Archivo" : "Cargar desde equipo"}
              </label>
            </div>
          </div>
        </>
      )}

      <BackFinish
        handleBackStep={handleBackStep}
        setFieldValue={setFieldValue}
        toBeFinished={toBeFinished}
      />
    </section>
  );
}
