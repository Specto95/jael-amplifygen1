import { PrimaryHeading } from "../../../../../../../../components/UI/GenericComponents/Headings/Primary/PrimaryHeading";

import { ISettingsAddCatalogueCategories } from "./interface/ISettingsAddCatalogueCategories";
import { ErrorMessage, Field } from "formik";
import { Finish } from "@/pages/PointOfSale/PDVForm/Add/GenericComponents/Finish/Finish";

import { ClassesListColumns } from "./columns/ClassesListColumns";
import { useListCategories } from "@/pages/Products/ProductForm/Add/api/categories/useListCategories";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { BackFinish } from "@/pages/PointOfSale/PDVForm/Add/GenericComponents/BackFinish/BackFinish";

export function SettingsAddCatalogueGroups({
  setFieldValue,
  values,
}: ISettingsAddCatalogueCategories) {
  const { listCategories } = useListCategories();

  const handleToBeFinished = () => {
    if (values.name) {
      return true;
    }
    return false;
  };

  return (
    <main>
      <PrimaryHeading title="Crear nueva categoría" />

      <div className="flexColumn-MBSM">
        <p className="bold">Nombre de Categoría</p>
        <Field
          type="text"
          name="name"
          placeholder="Nombre de la categoría:"
          id="name"
          className="input__min300TLRoundedSMB4"
        />
        <ErrorMessage name="name" component="div" className="error_start" />
      </div>
      <Finish
        setFieldValue={setFieldValue}
        toBeFinished={handleToBeFinished()}
        text="Agregar Categoría"
      />

      <ShowTableData
        notFoundDataMessage="No hay categorías disponibles"
        Columns={ClassesListColumns}
        Data={listCategories}
        hasBackground={true}
        hasTBodyBorder={true}
      />

      <BackFinish textFinish="Guardar Cambios" toBeFinished={true} />
    </main>
  );
}
