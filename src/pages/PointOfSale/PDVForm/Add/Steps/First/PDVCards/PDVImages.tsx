import { useState, useMemo, lazy } from "react";
import { Column } from "react-table";

import styles from "../ViewImages.module.css";

import { PDVCard } from "./PDVCard";

//*LAZY FORMS
const PDVSelectedData = lazy(() =>
  import("./PDVSelectedData").then((module) => ({
    default: module.PDVSelectedData,
  }))
);

//*COMPONENTS
import { SectionTopOptions } from "@/components/UI/SectionTopOptions/SectionTopOptions";
import { PDVSelectedDataColumns } from "../../../Columns/PDVSelectedDataColumns";

//*INTERFACES
import { IProductImages } from "@/interfaces/Products/products";
import { IPDVImagesProps } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../api/interfaces/IUseListProductsPDV";
import { GenericFilteredItems } from "@/components/UI/GenericComponents/FilteredItems/GenericFilteredItems";
import { PDVImagesFilterObjs } from "./Filters/PDVImagesFiltersObjs";
import { MainHeading } from "@/components/UI/GenericComponents/Headings/Main/MainHeading";

export function PDVImages({
  listProductsPDV,
  selectedData,
  previousData,
  setSelectedData,
  setPreviousData,
}: IPDVImagesProps) {
  const [productImages, setProductImages] = useState<IProductImages>({});
  const { filteredItems, query, setQuery } = GenericFilteredItems(
    listProductsPDV,
    PDVImagesFilterObjs.NAME
  );

  return (
    <>
      {filteredItems?.length === 0 && <h3>No hay productos para mostrar.</h3>}
      <div className="flex__spacing-between">
        <MainHeading
          title="Buscar productos para venta"
          customStyle="heading__primaryPSM"
        />
      </div>
      <div className={styles["productCard__container"]}>
        {filteredItems!.length > 0 &&
          filteredItems?.map((pro) => {
            return (
              <PDVCard
                key={pro.id}
                pro={pro}
                productImages={productImages}
                setSelectedData={setSelectedData}
                selectedData={selectedData}
                setPreviousData={setPreviousData}
              />
            );
          })}
      </div>
    </>
  );
}
