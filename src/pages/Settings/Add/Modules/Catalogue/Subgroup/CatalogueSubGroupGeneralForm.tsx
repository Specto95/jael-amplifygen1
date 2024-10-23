import { lazy, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Form } from "formik";

//? SRC IMPORTS

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";

import { AddCatalogueSubGroupsSchema } from "./FormProps/schema/CatalogueSubGroupsSchema";
import { AddCatalogueCategoriesGeneralData } from "./FormProps/CatalogueSubGroupsGeneralData";

//* HOOKS
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { SettingsAddCatalogueSubGroups } from "./Step/One/SettingsAddCatalogueSubGroups";
import { ICatalogueSubCategoriesInputAPI } from "./Step/One/interface/ICatalogueSubCategoriesInputs";
import { useListSubCategories } from "@/pages/Products/ProductForm/Add/api/subcategories/useListSubCategories";
//*LAZY COMPONENTS

const ModalSuccess = lazy(() =>
  import("@/components/UI/Modals/GenericModal/ModalSuccess").then((module) => ({
    default: module.ModalSuccess,
  }))
);

export function CatalogueSubGroupGeneralForm() {
  const { listSubCategories } = useListSubCategories();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [categoryID, setCategoryID] = useState<number>(0);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<SettingsAddCatalogueSubGroups />]);

  const getValidationSchemaForStep = () => {
    return AddCatalogueSubGroupsSchema;
  };

  return (
    <>
      <Helmet>
        <title>Jael | Configuración SubGrupos</title>
        <meta name="description" content="Configuración SubGrupos" />
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
                const { createSubCategoryAPI } = await import(
                  "@/graphql/mutations"
                );

                const catalogueSubCategoriesInput: ICatalogueSubCategoriesInputAPI =
                  {
                    subcategory_name: values.subcategory_name,
                    categoryID: values.categoryID!,
                    id: listSubCategories.length + 1, //! FIX IT CUZ IT'S ONLY ACCEPTING INTS IN DB ATM
                  };

                const catalogueCategoriesResult: any = await clientAPI(
                  createSubCategoryAPI,
                  {
                    input: catalogueSubCategoriesInput,
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
                <SettingsAddCatalogueSubGroups
                  setFieldValue={setFieldValue}
                  values={values}
                  setCategoryID={setCategoryID!}
                />
              }
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalSuccess
          title={"SubCategoría Agregada Correctamente!"}
          setIsModalOpen={setIsModalOpen}
          sectionName={"settings-Catalogue"}
        />
      )}
    </>
  );
}
