import {
  IListBranchOfficeInventoryProductsProductObjResponse,
  IListBranchOfficeProductsAPIResponse,
} from "../api/listBranchOfficeProducts";

// export const transformData = (
//   data: any
// ): IListBranchOfficeProductsAPIResponse[] => {
//   return data.reduce((acc: any, curr: any) => {
//     const existingProduct = acc.find(
//       (product: IListBranchOfficeProductsAPIResponse) =>
//         product.productID === curr.productID
//     );

//     if (existingProduct) {
//       existingProduct[`${curr.branchOfficeName}_customPrice`] =
//         curr.customPrice;
//       existingProduct[`${curr.branchOfficeName}_id`] = curr.id;
//       existingProduct["price"] = curr.price;
//     } else {
//       acc.push({
//         id: curr.id,
//         productID: curr.productID,
//         productName: curr.productName,
//         [`${curr.branchOfficeName}_customPrice`]: curr.customPrice,
//         [`${curr.branchOfficeName}_id`]: curr.id,
//         price: curr.price,
//       });
//     }
//     return acc;
//   }, []);
// };

export interface TransformedProduct {
  id: string;
  productID: string;
  productName: string;
  price: number;
  [branchOfficeCustomPrice: string]: number | string; // Dynamic properties for custom prices and branch-specific IDs
}

export const transformData = (
  branchOfficeInventoryProducts: IListBranchOfficeProductsAPIResponse[]
) => {
  let result: TransformedProduct[] = [];

  branchOfficeInventoryProducts.forEach((inventory) => {
    inventory.inventoryProduct.forEach(
      (product: IListBranchOfficeInventoryProductsProductObjResponse) => {
        let existingProduct = result.find(
          (p) => p.productID === product.productID
        );

        if (existingProduct) {
          existingProduct[`${inventory.branchOfficeName}_customPrice`] =
            product.customPrice;
          existingProduct[`${inventory.branchOfficeName}_id`] = product.id;
          existingProduct["price"] = product.generalPrice;
        } else {
          result.push({
            id: product.id,
            productID: product.productID,
            productName: product.productName,
            [`${inventory.branchOfficeName}_customPrice`]: product.customPrice,
            [`${inventory.branchOfficeName}_id`]: product.id,
            price: product.generalPrice,
          });
        }
      }
    );
  });

  return result;
};
