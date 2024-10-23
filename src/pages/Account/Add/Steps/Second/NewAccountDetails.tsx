import { useState, useEffect } from "react";

import { INewAccountDetailsProps } from "@/interfaces/Account/account";
import { Field, ErrorMessage } from "formik";

import { useListBranchOfficeIDNames } from "@/generalModels/api/SideMenuSections/BranchOffices/listBranchOfficeIDNames/useListBranchOfficeIDNames";
import { useListRolesNames } from "./api/useListRolesNames";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";

export function NewAccountDetails({
  setFieldValue,
  handleBackStep,
  autoPassword,
  setRoleData,
  userType,
  touched,
  errors,
  setErrors,
  setTouched,
}: INewAccountDetailsProps) {
  const { branchOfficeIDNames } = useListBranchOfficeIDNames();
  const { rolesNames } = useListRolesNames();

  useEffect(() => {
    setErrors!({});
    setTouched!({});
  }, []);

  useEffect(() => {
    if (autoPassword) {
      setFieldValue!("password", "");
      setFieldValue!("confirmPassword", "");
    }

    if(userType === AccountFormObj.ADMIN){
      setFieldValue!("branchOffice", "");
    }
  }, [autoPassword, userType]);



  useEffect(() => {
    if (userType) {
      const roleData = rolesNames.find(
        (roleName) => roleName.name === userType
      );
      setRoleData!(roleData!);
    }
  }, [userType]);

  const [withAutopassword, setWithAutopassword] = useState(false);
  return (
    <section className="generalForm bold">
      <h1 className="heading__main">Nueva Cuenta</h1>
      <h2 className="heading__primary">Datos de cuenta del usuario</h2>

      <div className="flexColumn__spacingXS">
        <label htmlFor="email" className="label__WLB500FLG">
          Usuario
        </label>
        <Field
          type="text"
          name="email"
          placeholder="Correo del usuario: "
          id="email"
          className={`input__min300TransparentRoundedSMB3 ${
            touched?.email && errors?.email ? "input-error" : ""
          }`}
        />
        <ErrorMessage name="email" component="div" className="error_start" />
      </div>
      <div className="flex__spacingMY">
        <Field
          type="checkbox"
          name="autoPassword"
          id="autoPassword"
          onClick={() => setWithAutopassword(!withAutopassword)}
        />
        <label htmlFor="autoPassword" className="label__WLB500FLG">
          Contraseña generada por sistema
        </label>
      </div>
      {!withAutopassword && (
        <div className="flex__spacing">
          <div className="flexColumn__Basis33spacingXS">
            <label htmlFor="password" className="label__WLB500FLG">
              Contraseña
            </label>
            <Field
              type="text"
              name="password"
              placeholder="Contraseña: "
              id="password"
              className={`input__WFullTransparentTLRoundedSMB3 ${
                touched?.password && errors?.password ? "input-error" : ""
              }`}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error_start"
            />
          </div>
          <div className="flexColumn__Basis33spacingXS">
            <label htmlFor="confirmPassword" className="label__WLB500FLG">
              Confirmar contraseña
            </label>
            <Field
              type="text"
              name="confirmPassword"
              placeholder="Confirmar contraseña: "
              id="confirmPassword"
              className={`input__WFullTransparentTLRoundedSMB3 ${
                touched?.confirmPassword && errors?.confirmPassword
                  ? "input-error"
                  : ""
              }`}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error_start"
            />
          </div>
        </div>
      )}
      <div className="flex__spacingMY">
        <div className="flexColumn__spacingXS">
          <label htmlFor="userType" className="label__WLB500FLG">
            Tipo de empleado
          </label>
          <Field
            as="select"
            name="userType"
            id="userType"
            className={`input__min300TransparentRoundedSMB3 ${
              touched?.userType && errors?.userType ? "input-error" : ""
            }`}
          >
            <option value="" disabled>
              Elige el tipo de empleado
            </option>

            {rolesNames.map((roleName) => (
              <option value={roleName.name} key={roleName.name}>
                {roleName.name === AccountFormObj.BRANCHMANAGER
                  ? "ENCARGADO"
                  : roleName.name}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="userType"
            component="div"
            className="error_start"
          />
        </div>
        {userType === AccountFormObj.BRANCHMANAGER && (
          <div className="flexColumn__spacingXS">
            <label htmlFor="branchOffice" className="label__WLB500FLG">
              Sucursal
            </label>
            <Field
              as="select"
              name="branchOffice"
              id="branchOffice"
              className={`input__min300TransparentRoundedSMB3 ${
                touched?.branchOffice && errors?.branchOffice
                  ? "input-error"
                  : ""
              }`}
            >
              <option value="" disabled>
                Elige la sucursal
              </option>
              {branchOfficeIDNames.map((branchOfficeName) => (
                <option value={branchOfficeName.id} key={branchOfficeName.id}>
                  {branchOfficeName.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="branchOffice"
              component="div"
              className="error_start"
            />
          </div>
        )}
      </div>

      <div className="flex__spacingMY">
        <Field type="radio" name="sendVia" value="viaEmail" />
        <label className="label__WLB500FLG">Enviar cuenta por correo</label>
      </div>
      {/* <div className="flex__spacing">
        <Field type="radio" name="sendVia" value="viaSMS" />
        <label className="label__WLB500FLG">Enviar cuenta por SMS</label>
      </div> */}
      <div className="flex__spacingJustifyEnd-MY">
        <button
          type="button"
          className="button__primary-cancel"
          onClick={handleBackStep}
        >
          Atras
        </button>
        <button
          type="submit"
          className="button__primary-blue"
          onClick={() => setFieldValue!("isSecondButton", true)}
        >
          Finalizar
        </button>
      </div>
    </section>
  );
}
