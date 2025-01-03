import { useState, useEffect, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { PatternFormat } from "react-number-format";
import { Form, Formik, Field, FieldProps, ErrorMessage } from "formik";

import styles from "../ClientForm.module.css";

import { ClientFormData } from "../ClientFormData";

//?SRC IMPORTS

//*COMPONENTS
const ModalProductSuccess = lazy(() =>
  import("@/components/UI/Modals/ModalSuccess/ModalProductSuccess").then(
    (module) => ({
      default: module.ModalProductSuccess,
    })
  )
);

import { LayoutForm } from "@/components/Layouts/LayoutForm";

//*INTERFACES
import { IMexicanCities } from "@/interfaces/utils/mexicanStates";
import { IAddClientInputAPI } from "./AddClientFormData";

//*HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { useListBranchOfficeIDNames } from "../../../generalModels/api/SideMenuSections/BranchOffices/listBranchOfficeIDNames/useListBranchOfficeIDNames";

//*UTILS
import { validateAddClient } from "@/utils/validations";
import { convertDateFormat, toTitleCase } from "@/utils/helpers";
import MexicanStates from "@/utils/mexicanStates.json";
import MexicanCities from "@/utils/mexicanStatesMun.json";
import { getCurrentDate } from "@/utils/dates";

export function AddClient() {
  const { branchOfficeIDNames } = useListBranchOfficeIDNames();
  const { handleBackTo } = useSectionProvider();
  const { branchInventory, mainBranchInventory, rolID } = useSessionProvider();

  const MexicanCitis = MexicanCities as IMexicanCities;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    if (selectedState) {
      setCities(MexicanCitis[selectedState]);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <>
      <Helmet>
        <title>Jael | Agregar Cliente</title>
        <meta name="description" content="Agregar Cliente" />
      </Helmet>
      <style jsx="true">{`
        body {
          background-color: var(--text-secondary);
        }
      `}</style>
      <Formik
        initialValues={ClientFormData}
        validationSchema={validateAddClient}
        onSubmit={async (values) => {
          if (values.isSecondButton) {
            try {
              setIsModalOpen(true);
              //*AMPLIFY IMPORTS
              const { createClientAPI } = await import("@/graphql/mutations");
              const { clientAPI } = await import("@/utils/amplifyAPI/client");
              const clientInput: IAddClientInputAPI = {
                name: values.name,
                second_name: values.second_name,
                lastname: values.lastname,
                second_lastname: values.second_lastname,
                phone: values.phone,
                fixed_phone: values.fixed_phone,
                email: values.email,
                birthday: convertDateFormat(values.birthday),
                RFC: values.RFC,
                address: values.address,
                settlement: values.settlement,
                postal_code: values.postal_code,
                state: values.state,
                city: values.city,
                branchOfficeID: branchInventory?.id
                  ? branchInventory.id
                  : values.branchOfficeID,
                hasCredit: false,
                hasCreditRequest: false,
              };
              await clientAPI(createClientAPI, { input: clientInput });

              const emailjs = await import("@emailjs/browser");

              try {
                const sendEmail = () => {
                  emailjs
                    .send(
                      import.meta.env.VITE_SERVICE_ID,
                      import.meta.env.VITE_NEWCLIENT_TEMPLATE_ID,
                      {
                        name: values.name,
                        fullname:
                          values.name +
                          " " +
                          values.second_name +
                          " " +
                          values.lastname +
                          " " +
                          values.second_lastname,
                        branchOffice:
                          branchInventory.name || mainBranchInventory.name,
                        phone: values.phone,
                        email: values.email || "No proporcionado",
                        birthday: values.birthday || "No proporcionado",
                        RFC: values.RFC || "No proporcionado",
                        address: values.address
                          ? `${values.address}, ${values.settlement}, ${values.postal_code}`
                          : "No Proporcionado",
                        state: values.state,
                        city: values.city || "No Proporcionado",
                        date: getCurrentDate(),
                      },
                      import.meta.env.VITE_API_KEY
                    )
                    .then(
                      (result) => {
                        console.log(result.text);
                      },
                      (error) => {
                        console.log(error.text);
                      }
                    );
                };
                sendEmail();
              } catch (e) {
                console.error(e);
              }

              return;
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <LayoutForm values={values}>
            <Form
              className={styles.clientForm}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <h1 className={styles.clientForm__title}>
                Agregar Nuevo Cliente
              </h1>
              <h2 className={styles.clientForm__subtitle}>Datos de Contacto</h2>

              {mainBranchInventory?.id && (
                <>
                  <div className={styles["clientForm__form-inputs"]}>
                    <label
                      htmlFor="branchOfficeID"
                      className={styles.clientForm__label}
                    >
                      Sucursal
                    </label>
                    <div className={styles.clientForm__divInput}>
                      <Field
                        as="select"
                        name="branchOfficeID"
                        id="branchOfficeID"
                        className={styles["clientForm__input-small"]}
                      >
                        <option value="" disabled>
                          Elige la Sucursal a asignar el cliente:
                        </option>
                        {branchOfficeIDNames.map((branchoffice) => (
                          <option key={branchoffice.id} value={branchoffice.id}>
                            {branchoffice.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="branchOfficeID"
                        component="div"
                        className="error-left"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className={styles["clientForm__form-inputs"]}>
                <div className={styles["clientForm__form-inputsInner"]}>
                  <label htmlFor="name" className={styles.clientForm__label}>
                    Nombre *
                  </label>
                  <div className="flexColumn__WFull">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Nombre:"
                      id="name"
                      className={styles["clientForm__input"]}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-left"
                    />
                  </div>
                </div>

                <div className={styles["clientForm__form-inputsInner"]}>
                  <label
                    htmlFor="secondname"
                    className={styles.clientForm__label}
                  >
                    Segundo Nombre
                  </label>
                  <div className="flexColumn__WFull">
                    <Field
                      type="text"
                      name="second_name"
                      placeholder="Segundo Nombre:"
                      id="second_name"
                      className={styles["clientForm__input"]}
                    />
                    <ErrorMessage
                      name="second_name"
                      component="div"
                      className="error-left"
                    />
                  </div>
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <div className={styles["clientForm__form-inputsInner"]}>
                  <label
                    htmlFor="lastname"
                    className={styles.clientForm__label}
                  >
                    Apellido Paterno *
                  </label>
                  <div className="flexColumn__WFull">
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Apellido Paterno:"
                      id="lastname"
                      className={styles["clientForm__input"]}
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="error-left"
                    />
                  </div>
                </div>

                <div className={styles["clientForm__form-inputsInner"]}>
                  <label
                    htmlFor="second_lastname"
                    className={styles.clientForm__label}
                  >
                    Apellido Materno
                  </label>
                  <div className="flexColumn__WFull">
                    <Field
                      type="text"
                      name="second_lastname"
                      placeholder="Apellido Materno:"
                      id="second_lastname"
                      className={styles["clientForm__input"]}
                    />
                    <ErrorMessage
                      name="second_lastname"
                      component="div"
                      className="error-left"
                    />
                  </div>
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <div className={styles["clientForm__form-inputsInner"]}>
                  <label htmlFor="phone" className={styles.clientForm__label}>
                    Celular *
                  </label>

                  <div className="flexColumn__WFull">
                    <Field name="phone">
                      {({ field }: FieldProps) => (
                        <PatternFormat
                          format="###-###-####"
                          mask="_"
                          placeholder="555-555-5555"
                          id="phone"
                          className={styles["clientForm__input"]}
                          {...field}
                        />
                      )}
                    </Field>

                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error-left"
                    />
                  </div>
                </div>

                <div className={styles["clientForm__form-inputsInner"]}>
                  <label
                    htmlFor="fixed_phone"
                    className={styles.clientForm__label}
                  >
                    Telefono fijo
                  </label>
                  <div className="flexColumn__WFull">
                    <Field name="fixed_phone">
                      {({ field }: FieldProps) => (
                        <PatternFormat
                          format="###-###-####"
                          mask="_"
                          placeholder="555-555-5555"
                          id="fixed_phone"
                          className={styles["clientForm__input"]}
                          {...field}
                        />
                      )}
                    </Field>

                    <ErrorMessage
                      name="fixed_phone"
                      component="div"
                      className="error-left"
                    />
                  </div>
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <label htmlFor="email" className={styles.clientForm__label}>
                  Correo Electronico *
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    id="email"
                    className={styles.clientForm__input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <label htmlFor="birthday" className={styles.clientForm__label}>
                  Fecha de Nacimiento
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field
                    type="date"
                    name="birthday"
                    id="birthday"
                    className={styles.clientForm__input}
                  />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <label htmlFor="RFC" className={styles.clientForm__label}>
                  RFC
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field
                    type="text"
                    name="RFC"
                    placeholder="Ejemplo: AAAA000000A29"
                    id="RFC"
                    className={styles.clientForm__input}
                  />
                  <ErrorMessage
                    name="RFC"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <h2 className={styles.clientForm__subtitle}>
                Domicilio de Cliente
              </h2>

              <div className={styles["clientForm__form-inputs"]}>
                <label htmlFor="address" className={styles.clientForm__label}>
                  Calle y Numero
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Ejemplo: Loma Ancha 20F"
                    id="address"
                    className={styles.clientForm__input}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <label
                  htmlFor="settlement"
                  className={styles.clientForm__label}
                >
                  Colonia
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field
                    type="text"
                    name="settlement"
                    placeholder="Ejemplo: Bosques de Antara"
                    id="settlement"
                    className={styles.clientForm__input}
                  />
                  <ErrorMessage
                    name="settlement"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <label
                  htmlFor="postal_code"
                  className={styles.clientForm__label}
                >
                  Codigo Postal
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field name="postal_code">
                    {({ field }: FieldProps) => (
                      <PatternFormat
                        format="#####"
                        mask=""
                        placeholder="Ejemplo: 63111"
                        id="postal_code"
                        className={styles["clientForm__input"]}
                        {...field}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="postal_code"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <label htmlFor="state" className={styles.clientForm__label}>
                  Estado
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field
                    as="select"
                    name="state"
                    id="state"
                    className={styles["clientForm__input"]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setSelectedState(toTitleCase(e.target.value));
                      setFieldValue("state", e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Elige tu estado:
                    </option>
                    {MexicanStates.map((state) => (
                      <option key={state.clave} value={state.nombre}>
                        {state.nombre}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <div className={styles["clientForm__form-inputs"]}>
                <label htmlFor="city" className={styles.clientForm__label}>
                  Ciudad
                </label>
                <div className={styles.clientForm__divInput}>
                  <Field
                    as="select"
                    name="city"
                    id="city"
                    className={styles["clientForm__input"]}
                  >
                    <option value="" disabled>
                      Elegir Ciudad
                    </option>
                    {cities.map((city) => (
                      <option key={city}>{city.toUpperCase()}</option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="error-left"
                  />
                </div>
              </div>

              <div className={styles["clientForm__form-buttons"]}>
                <button
                  type="button"
                  onClick={() => {
                    handleBackTo("clients");
                  }}
                  className={styles.clientForm__submit}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setFieldValue("isSecondButton", true)}
                  type="submit"
                  className={styles.clientForm__submit}
                >
                  Guardar
                </button>
              </div>
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalProductSuccess
          title={"Cliente Guardado correctamente!"}
          setIsModalOpen={setIsModalOpen}
          backTo="clients"
        />
      )}
    </>
  );
}
