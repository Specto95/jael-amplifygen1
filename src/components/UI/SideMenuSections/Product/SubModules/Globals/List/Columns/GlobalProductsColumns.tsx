import { formatKey } from "@/utils/helpers";
import { globalProductsListObj } from "../../utils/globalProductsListObj";

import {
  IGlobalProductsListColumns,
  IGlobalProductsListColumnsProductDetailsRow,
} from "./interfaces/IGlobalProductsColumns";
import { IListBranchOfficeProductsAPIResponse } from "../../api/listBranchOfficeProducts";

export const getGlobalProductsColumns = (
  branchOfficeProducts: IListBranchOfficeProductsAPIResponse[]
): IGlobalProductsListColumns[] => {
  const branchOfficeNames: IListBranchOfficeProductsAPIResponse[] =
    branchOfficeProducts.reduce((unique: any, item) => {
      return unique.some(
        (obj: IListBranchOfficeProductsAPIResponse) =>
          obj.branchOfficeID === item.branchOfficeID
      )
        ? unique
        : [...unique, item];
    }, []);

  return [
    {
      Header: globalProductsListObj.productNameID,
      accessor: (row: IGlobalProductsListColumnsProductDetailsRow) =>
        `${row.productName} - ${formatKey(row.productID)}`,
    },
    ...branchOfficeNames.map((branchOffice) => {
      const column = {
        Header: `${branchOffice.branchOfficeName}`,
        accessor: `${branchOffice.branchOfficeName}_customPrice`,
        id: `${branchOffice.branchOfficeID}`,
      };
      return column;
    }),
  ];
};
