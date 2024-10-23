import { PrimaryHeading } from "../../../../../../../../components/UI/GenericComponents/Headings/Primary/PrimaryHeading";

// import { useListProvidersEnterpriseNameInventory } from "@/pages/Inventory/Type/BranchOffice/Add/MultipleForm/Income/Steps/Three/IncomeInventoryGeneralData/api/useListProvidersEnterpriseNameInventory";

// import { useState } from "react";
import { ISettingsAddCatalogueCategories } from "./interface/ISettingsAddCatalogueCategories";
import { ErrorMessage, Field } from "formik";
import { Finish } from "@/pages/PointOfSale/PDVForm/Add/GenericComponents/Finish/Finish";

import { ClassesListColumns } from "./columns/ClassesListColumns";
import { useListClasses } from "@/pages/Products/ProductForm/Add/api/classes/useListClasses";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";
import { BackFinish } from "@/pages/PointOfSale/PDVForm/Add/GenericComponents/BackFinish/BackFinish";

export function SettingsAddCatalogueCategories({
  setFieldValue,
  values,
}: ISettingsAddCatalogueCategories) {
  const { listClasses } = useListClasses("ADMIN");

  // const { providersEnterpriseNameInventory } =
  //   useListProvidersEnterpriseNameInventory();

  // const [provider, setProvider] = useState("");

  // const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedEnterpriseName = e.target.value;

  //   setProvider(selectedEnterpriseName);
  //   setFieldValue!("enterprise_name", selectedEnterpriseName);
  // };

  const handleToBeFinished = () => {
    if (values.name) {
      return true;
    }
    return false;
  };

  return (
    <main>
      <PrimaryHeading title="Crear nueva clase" />

      <div className="flexColumn-MBSM">
        <p className="bold">Nombre de clase</p>
        <Field
          type="text"
          name="name"
          placeholder="Nombre de la clase:"
          id="name"
          className="input__min300TLRoundedSMB4"
        />
        <ErrorMessage name="name" component="div" className="error_start" />
        {/* <input type="text" className="input__min300TLRoundedSMB4" /> */}
      </div>

      {/* <div className="flex__spacingMY">
        <input type="checkbox" />
        <p className="bold">Agregar Proovedor</p>
      </div>

      <p className="bold">Seleccionar un Proovedor</p>
      <select
        className="input__min300TLRoundedSMB4"
        onChange={handleProviderChange}
        value={provider}
      >
        <option value="" disabled>
          Selecciona un Proveedor
        </option>
        {providersEnterpriseNameInventory.map((provider) => (
          <option value={provider.enterprise_name} key={provider.id}>
            {provider.enterprise_name}
          </option>
        ))}
      </select>
      <ErrorMessage name="enterprise_name" component="div" className="error" /> */}

      <Finish
        setFieldValue={setFieldValue}
        toBeFinished={handleToBeFinished()}
        text="Agregar Clase"
      />

      <ShowTableData
        notFoundDataMessage="No hay clases disponibles"
        Columns={ClassesListColumns}
        Data={listClasses}
        hasBackground={true}
        hasTBodyBorder={true}
        // withActions={true}
      />

      <BackFinish textFinish="Guardar Cambios" toBeFinished={true} />

      {/* <SectionTopOptions query={query} setQuery={setQuery} />
        
      <SalesList Sales={filteredItems} setSales={setListSalesView}
      isLoading={isLoading}
      /> */}
    </main>
  );
}
