import { Helmet } from "react-helmet-async";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import styles from "../Credentials.module.css";
import userData from "./UserData.json";

//* ASSETS
import Edit from "@/assets/img/Edit.svg";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* PAGES
import { LoginFormData } from "../Login/LoginFormData";

//* UTILS
import { loginSchema } from "@/utils/validations";
import { useEffect, useState } from "react";

export function UserData() {
  const navigate = useNavigate();
  const { setSectionName, handleBack } = useSectionProvider();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    LoginFormData.isSecondButton = false;
  }, []);
  return (
    <>
      <Helmet>
        <title>Jael | Información del Usuario</title>
        <meta name="description" content="Información del Usuario" />
      </Helmet>
      <main className={styles.credentials__main}>
        <Formik
          initialValues={LoginFormData}
          validationSchema={loginSchema}
          onSubmit={async (values) => {}}
        >
          {({ handleSubmit, errors, touched, setFieldValue }) => (
            <Form
              className={styles["credentials__login-container"]}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <div className={styles["userData__container"]}>
                <h2 className="logo-loginXLTitle">MJ</h2>
                <h2>Información de Cuenta</h2>
                <div className={styles["userData__containerFields"]}>
                  <div className={styles.userData__infoContainer}>
                    <p className={styles.userData__infoTitle}>Puesto</p>
                    <p className={styles.userData__info}>{userData.usertype}</p>
                  </div>
                  <div className={styles["userData__infoContainer-edit"]}>
                    <img
                      src={Edit}
                      alt="Editar"
                      onClick={() => setIsEditing(true)}
                      className={styles.userData__edit}
                    />
                  </div>
                </div>
                <div className={styles["userData__containerFields"]}>
                  <div className={styles.userData__infoContainer}>
                    <p className={styles.userData__infoTitle}>Nombre</p>
                    <p className={styles.userData__info}>{userData.name}</p>
                  </div>
                  <div className={styles.userData__infoContainer}>
                    <p className={styles.userData__infoTitle}>Teléfono</p>
                    <p className={styles.userData__info}>{userData.phone}</p>
                  </div>
                </div>
                <div className={styles["userData__containerFields"]}>
                  <div className={styles.userData__infoContainer}>
                    <p className={styles.userData__infoTitle}>RFC</p>
                    <p className={styles.userData__info}>{userData.RFC}</p>
                  </div>
                  <div className={styles.userData__infoContainer}>
                    <p className={styles.userData__infoTitle}>Sexo</p>
                    <p className={styles.userData__info}>{userData.gender}</p>
                  </div>
                </div>
                <div className={styles["userData__containerFields"]}>
                  <div className={styles.userData__infoContainer}>
                    <p className={styles.userData__infoTitle}>Sucursal</p>
                    <p className={styles.userData__info}>
                      {userData.branch_office}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles["userData__container-buttons"]}>
                <button
                  type="button"
                  onClick={() => {
                    handleBack();
                    setSectionName("products");
                  }}
                  className="button__primary-cancel"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="button__primary-blueXS"
                  onClick={() => {
                    setTimeout(() => {
                      setSectionName("products");
                      navigate("/");
                    }, 1000);
                  }}
                >
                  Continuar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
}
