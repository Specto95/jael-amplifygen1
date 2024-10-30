import { ListInventoryProductsQuery } from "@/API";
import { listAvailableProductsAPI } from "@/graphql/queries";
import { clientAPI } from "@/utils/amplifyAPI/client";

export interface ListAvailableProducts {
  category_id: number;
  subcategory_id: number;
  class_id: number;
  id: string;
  name: string;
  price: number;
  productProviderID: string;
  inventoryProductID: string;
  quantity: number;
  branchProductQuantity?: number;
}

export const fetchListAvailableProductsAPI = async (
  inventoryID: string,
  branchInventoryID: string
) => {
  const result = (await clientAPI(listAvailableProductsAPI, {
    inventoryID,
    branchInventoryID,
  })) as { data: ListInventoryProductsQuery };

  return result.data.listInventoryProducts?.items.map((availableProduct) => {
    const listAvailableProductsResult: ListAvailableProducts = {
      quantity: availableProduct?.quantity!,
      category_id: availableProduct?.product?.category_id!,
      subcategory_id: availableProduct?.product?.subcategory_id!,
      class_id: availableProduct?.product?.class_id!,
      id: availableProduct?.product?.id!,
      name: availableProduct?.product?.name!,
      price: availableProduct?.product?.price!,
      productProviderID: availableProduct?.product?.productProviderID!,
      inventoryProductID:
        availableProduct?.product?.inventoryProduct?.items[0].id!,
      branchProductQuantity:
        availableProduct?.product?.inventoryProduct?.items[0].quantity,
    };
    return listAvailableProductsResult;
  });
};
