import { lazy, useMemo, useState } from "react";

//* APIs
import { useListBranchOfficeProducts } from "./api/useListBranchOfficeProducts";

//* COMPONENTS
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { globalProductsViewFilterObjs } from "./Filters/GlobalProductsViewFiltersObjs";
import SectionForm from "@/components/UI/GenericComponents/SectionForm/SectionForm";
import { ShowTableData } from "@/components/UI/GenericComponents/Table/ShowTableData";

//* COLUMNS
import { getGlobalProductsColumns } from "./List/Columns/GlobalProductsColumns";

//* INTERFACES
import { IGlobalProductsTableEditingState } from "@/interfaces/Products/products";

//* UTILS
import { transformData } from "./utils/helpers";
import { UserView } from "@/components/UI/RoleInfo/UserView/UserView";
// import { globalProductsListObj } from "./utils/globalProductsListObj";

const ModalEditProduct = lazy(() =>
  import(
    "@/components/UI/Modals/SideMenuSections/Products/ModalEditProduct"
  ).then((module) => ({
    default: module.ModalEditProduct,
  }))
);

export function GlobalProductsView() {
  const { branchOfficeProducts, setBranchOfficeProducts, isLoading } =
    useListBranchOfficeProducts();
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    branchOfficeProducts,
    globalProductsViewFilterObjs.NAME
  );

  // console.log(filteredItems);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editing, setEditing] = useState<IGlobalProductsTableEditingState>({
    id: "",
    productID: "",
    productName: "",
    branchOfficeID: "",
    branchOfficeName: "",
    customPrice: 0,
  });

  const transformedData = transformData(branchOfficeProducts);

  const updatedColumns = getGlobalProductsColumns(branchOfficeProducts);

  const data = useMemo(() => transformedData || [], [branchOfficeProducts]);

  const columns = useMemo(() => updatedColumns || [], [branchOfficeProducts]);

  return (
    <>
      {/* <UserView query={query} setQuery={setQuery} /> */}
      <SectionForm
        withFiltering={true}
        fullWidthBGMain={true}
        query={query}
        setQuery={setQuery}
      >
        <ShowTableData
          hasBackground={true}
          customColumns={columns}
          customMemoData={data}
          isLoading={isLoading}
          notFoundDataMessage="No se encontraron productos."
          setEditing={setEditing}
          setIsModalOpen={setIsModalOpen}
        />
      </SectionForm>
      {isModalOpen && (
        <ModalEditProduct
          setIsModalOpen={setIsModalOpen}
          pro={{ ...editing }}
        />
      )}
    </>
  );
}
