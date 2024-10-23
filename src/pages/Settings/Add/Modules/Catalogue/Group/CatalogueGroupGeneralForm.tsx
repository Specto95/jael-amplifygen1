import { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

import { AddCatalogueCategoriesSchema } from "./FormProps/schema/CatalogueCategoriesSchema";
import { AddCatalogueCategoriesGeneralData } from "./FormProps/CatalogueCategoriesGeneralData";

//* HOOKS
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { SettingsAddCatalogueGroups } from "./Step/One/SettingsAddCatalogueGroups";
import { ICatalogueCategoriesInputAPI } from "./Step/One/interface/ICatalogueCategoriesInputs";
import { useListCategories } from "@/pages/Products/ProductForm/Add/api/categories/useListCategories";
//*LAZY COMPONENTS

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

export function CatalogueGroupGeneralForm() {
  const { listCategories } = useListCategories();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<SettingsAddCatalogueGroups />]);

  const handleNextStep = () => {
    if (!isLastStep) return next();
  };

  const handleBackStep = () => {
    if (!isFirstStep) return back();
  };

  const getValidationSchemaForStep = () => {
    return AddCatalogueCategoriesSchema;
  };

  return (
    <>
      <Helmet>
        <title>Jael | Configuración Categorías</title>
        <meta name="description" content="Configuración Categorías" />
      </Helmet>
      <Formik
        initialValues={AddCatalogueCategoriesGeneralData}
        validationSchema={getValidationSchemaForStep()}
        onSubmit={async (values) => {
          try {
            if (values.isSecondButton) {
              setIsModalOpen(true);
              try {
                //* DYNAMIC AMPLIFY IMPORTS
                const { clientAPI } = await import("@/utils/amplifyAPI/client");

                const { createCategoryAPI } = await import(
                  "@/graphql/mutations"
                );

                const catalogueCategoriesInput: ICatalogueCategoriesInputAPI = {
                  name: values.name,
                  id: listCategories.length + 1, //! FIX IT CUZ IT'S ONLY ACCEPTING INTS IN DB ATM
                };

                const catalogueCategoriesResult: any = await clientAPI(
                  createCategoryAPI,
                  {
                    input: catalogueCategoriesInput,
                  }
                );
                console.log("COMPLETED");

                return;
              } catch (err) {
                console.log(err);
              }
              return;
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ touched, errors, handleSubmit, values, setFieldValue }) => (
          <LayoutForm values={values}>
            <Form
              onSubmit={handleSubmit}
              autoComplete={"off"}
              className="generalForm"
            >
              {
                <SettingsAddCatalogueGroups
                  setFieldValue={setFieldValue}
                  values={values}
                />
              }
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalSuccess
          title={"Categoría Agregada Correctamente!"}
          setIsModalOpen={setIsModalOpen}
          sectionName={"settings-Catalogue"}
        />
      )}
    </>
  );
}
