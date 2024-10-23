import { PrimaryHeading } from "../../../../../../../../components/UI/GenericComponents/Headings/Primary/PrimaryHeading";

import { ISettingsAddCatalogueCategories } from "./interface/ISettingsAddCatalogueCategories";
import { ErrorMessage, Field } from "formik";
import { Finish } from "@/pages/PointOfSale/PDVForm/Add/GenericComponents/Finish/Finish";

import { ClassesListColumns } from "./columns/ClassesListColumns";
import { useListSubCategories } from "@/pages/Products/ProductForm/Add/api/subcategories/useListSubCategories";
import { useListCategories } from "@/pages/Products/ProductForm/Add/api/categories/useListCategories";

import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { BackFinish } from "@/pages/PointOfSale/PDVForm/Add/GenericComponents/BackFinish/BackFinish";
import { useState } from "react";

export function SettingsAddCatalogueSubGroups({
  setFieldValue,
  values,
  setCategoryID,
}: ISettingsAddCatalogueCategories) {
  const { listSubCategories } = useListSubCategories();
  const { listCategories } = useListCategories();

  const [group, setGroup] = useState(0);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGroup = +e.target.value;

    setGroup(selectedGroup);
    // setCategoryID!(selectedGroup);
    setFieldValue!("categoryID", selectedGroup);
  };

  const handleToBeFinished = () => {
    if (values.subcategory_name && values.categoryID) {
      return true;
    }
    return false;
  };

  return (
    <main>
      <PrimaryHeading title="Crear nueva categoría" />

      <div className="flexColumn-MBSM">
        <p className="bold">Nombre de Subcategoría</p>
        <Field
          type="text"
          name="subcategory_name"
          placeholder="Nombre de la categoría:"
          id="subcategory_name"
          className="input__min300TLRoundedSMB4"
        />
        <ErrorMessage
          name="subcategory_name"
          component="div"
          className="error_start"
        />
      </div>

      <p className="bold">Seleccionar un Subgrupo</p>
      <select
        className="input__min300TLRoundedSMB4"
        onChange={handleGroupChange}
        value={values.categoryID}
      >
        <option value="" disabled>
          Selecciona un Subgrupo
        </option>
        {listCategories.map((group) => (
          <option value={group.id} key={group.id}>
            {group.name}
          </option>
        ))}
      </select>
      <ErrorMessage name="categoryID" component="div" className="error_start" />

      <Finish
        setFieldValue={setFieldValue}
        toBeFinished={handleToBeFinished()}
        text="Agregar Subcategoría"
      />

      <ShowTableData
        notFoundDataMessage="No hay subcategorias disponibles"
        Columns={ClassesListColumns}
        Data={listCategories}
        hasBackground={true}
        hasTBodyBorder={true}
      />

      <BackFinish textFinish="Guardar Cambios" toBeFinished={true} />
    </main>
  );
}
