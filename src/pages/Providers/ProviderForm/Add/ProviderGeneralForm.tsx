import { useState, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Form, Formik } from "formik";

import styles from "../../ProviderForm.module.css";

import { v4 as uuidv4 } from "uuid";

//?SRC IMPORTS

//*LAZY FORMS
const AddProvider = lazy(() =>
  import("./MultipleForm/AddProvider").then((module) => ({
    default: module.AddProvider,
  }))
);
const ServiceProvider = lazy(() =>
  import("./MultipleForm/Service/ServiceProvider").then((module) => ({
    default: module.ServiceProvider,
  }))
);

const AddServiceResponsible = lazy(() =>
  import("./MultipleForm/Service/AddServiceResponsible").then((module) => ({
    default: module.AddServiceResponsible,
  }))
);
// const ProductProvider = lazy(() =>
//   import("./MultipleForm/Product/ProductProvider").then((module) => ({
//     default: module.ProductProvider,
//   }))
// );
const AddProductResponsible = lazy(() =>
  import("./MultipleForm/Product/AddProductResponsible").then((module) => ({
    default: module.AddProductResponsible,
  }))
);

import { LayoutForm } from "@/components/Layouts/LayoutForm";

//*INTERFACES
import { IProductTable } from "@/interfaces/Products/products";
import {
  IProductProviderResponsibleFormData,
  // IServiceProviderResponsibleFormData,
} from "../IProviderFormData";

import { ProviderGeneralFormData } from "../../ProviderFormData";
import { ProviderType } from "./MultipleForm/ProviderType";

//*HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useMultistepForm } from "@/hooks/useMultistepForm";

//*UTILS
import {
  productProviderResponsiblesSchema,
  productProviderSchema,
  providerSchema,
  serviceProviderResponsiblesSchema,
  serviceProviderSchema,
} from "@/utils/validations";
import { IProviderTypeState } from "@/interfaces/Providers/providers";

//*AMPLIFY
import { currentIndexObj } from "@/utils/multiStepForm/currentIndexObj";

export function ProviderGeneralForm(): JSX.Element {
  const invalidIndexes = [currentIndexObj.FOUR];
  const { handleBackTo } = useSectionProvider();
  const [providerType, setProviderType] =
    useState<IProviderTypeState["values"]>("");
  const [selectedRows, setSelectedRows] = useState<IProductTable[]>([]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  const handleBackProviderType = () => {
    goTo(currentIndexObj.TWO);
  };

  const handleProviderType = (type: "product" | "service") => {
    setProviderType(type);
    if (type === "service") {
      goTo(currentIndexObj.THREE);
    } else if (type === "product") {
      goTo(currentIndexObj.FIVE);
    }
  };

  const getValidationSchemaForStep = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return providerSchema;
      case currentIndexObj.THREE:
        return serviceProviderSchema;
      case 3:
        return serviceProviderResponsiblesSchema;
      case currentIndexObj.FIVE:
        return productProviderSchema;
      case 5:
        return productProviderResponsiblesSchema;
      default:
        return;
    }
  };

  const { goTo, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AddProvider />,
      <ProviderType />,
      <ServiceProvider />,
      <AddServiceResponsible />,
      // <ProductProvider />,
      <AddProductResponsible />,
    ]);
  return (
    <>
      <Helmet>
        <title>Jael | Agregar Proovedor</title>
        <meta name="description" content="Agregar Proovedor" />
      </Helmet>
      <Formik
        initialValues={ProviderGeneralFormData}
        validationSchema={getValidationSchemaForStep(currentStepIndex)}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              const { clientAPI } = await import("@/utils/amplifyAPI/client");

              //? TYPE === PRODUCT
              if (values.type === "product") {
                //*AMPLIFY IMPORTS
                const {
                  createProductProviderAPI,
                  createProviderAPI,
                  createProductProviderResponsibleAPI,
                } = await import("@/graphql/mutations");
                const productprovider_id = uuidv4();

                const responsibleResult =
                  values.productProviderResponsiblesFormData.responsibles! &&
                  Object.values(
                    values.productProviderResponsiblesFormData.responsibles!
                  ).some((value) => value) &&
                  values.productProviderResponsiblesFormData.responsibles!.map(
                    async (
                      responsible: IProductProviderResponsibleFormData
                    ) => {
                      await clientAPI(createProductProviderResponsibleAPI, {
                        input: {
                          productproviderID: productprovider_id,
                          name: responsible.name,
                          second_name: responsible.second_name,
                          lastname: responsible.lastname,
                          second_lastname: responsible.second_lastname,
                          phone: responsible.phone,
                          RFC: responsible.RFC,
                        },
                      });
                    }
                  );
                const provider_id = uuidv4();

                const productProviderResult: any = await clientAPI(
                  createProductProviderAPI,
                  {
                    input: {
                      id: productprovider_id,
                      productProviderProviderIDId: provider_id,
                    },
                  }
                );

                const providerResult: any = await clientAPI(createProviderAPI, {
                  input: {
                    id: provider_id,
                    enterprise_name: values.providerFormData.enterprise_name,
                    enterprise_RFC: values.providerFormData.enterprise_RFC,
                    phone: values.providerFormData.phone,
                    fixed_phone: values.providerFormData.fixed_phone,
                    providerProductproviderId: productprovider_id,
                    type: values.type,
                  },
                });
                handleBackTo("providers");
                return;
              }
              return;
            }
          } catch (error) {
            console.log(error);
          }
          try {
            if (invalidIndexes.includes(currentStepIndex)) {
              return;
            } else {
              handleNextStep();
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <LayoutForm values={values}>
            <Form
              className={styles.providerform}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              {currentStepIndex === currentIndexObj.ONE ? (
                <AddProvider touched={touched} errors={errors} />
              ) : currentStepIndex === currentIndexObj.TWO ? (
                <ProviderType
                  handleProviderType={handleProviderType}
                  setProviderType={setProviderType}
                  setFieldValue={setFieldValue}
                  enterprise_name={values.providerFormData.enterprise_name}
                  setSelectedRows={setSelectedRows}
                />
              ) : currentStepIndex === currentIndexObj.THREE ? (
                <ServiceProvider
                  handleBackStep={handleBackStep}
                  touched={touched}
                  errors={errors}
                  enterprise_name={values.providerFormData.enterprise_name}
                />
              ) : currentStepIndex === currentIndexObj.FOUR ? (
                <AddServiceResponsible
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                  responsibles={
                    values.serviceProviderResponsiblesFormData.responsibles
                  }
                  enterprise_name={values.providerFormData.enterprise_name}
                />
              ) : // currentStepIndex === currentIndexObj.FIVE ? (
              //   <ProductProvider
              //     handleNextStep={handleNextStep}
              //     handleBackProviderType={handleBackProviderType}
              //     enterprise_name={values.providerFormData.enterprise_name}
              //     selectedRows={selectedRows}
              //     setSelectedRows={setSelectedRows}
              //   />
              // )
              currentStepIndex === currentIndexObj.FIVE ? (
                <AddProductResponsible
                  handleBackStep={handleBackStep}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                  responsibles={
                    values.productProviderResponsiblesFormData.responsibles
                  }
                  enterprise_name={values.providerFormData.enterprise_name}
                  handleBackProviderType={handleBackProviderType}
                />
              ) : (
                step
              )}
            </Form>
          </LayoutForm>
        )}
      </Formik>
    </>
  );
}
