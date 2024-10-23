//?SRC IMPORTS

//* COMPONENTS
import { ListActions } from "@/components/UI/GenericComponents/BackContinue/Tables/ListActions/ListActions";

//*INTERFACES
import { IProductListActionsProps } from "./interfaces/IProductListActions";

//*AMPLIFY IMPORTS
import { list, remove } from "aws-amplify/storage";
import { clientAPI } from "@/utils/amplifyAPI/client";
import {
  deleteProductAPI,
  deleteInventoryProductAPI,
  deleteProductProviderAPI,
} from "@/graphql/mutations";

export function ProductListActions({
  cell,
  Products,
  setProducts,
}: IProductListActionsProps) {
  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar el producto ${cell.row.original.name}?`
      )
    ) {
      async function removeS3IDContent(productId: string) {
        try {
          const result = await list({
            prefix: `${productId}/`,
          });
          if (result) {
            const files = result.items.map((r) => r.key);
            if (files.length === 0) return;

            //?REMOVE FILES INSIDE FOLDER
            await Promise.all(
              files.map((f) =>
                remove({
                  key: f as string,
                })
              )
            );

            //?REMOVE FOLDER
            await remove({
              key: `${productId}/`,
            });
            console.log("Files deleted successfully.");
          }
        } catch (error) {
          console.error("Error deleting files:", error);
        }
      }
      try {
        const deletedProductResult: any = await clientAPI(deleteProductAPI, {
          id: cell.row.original.id,
        });

        const deletedInventoryProduct: any = await clientAPI(
          deleteInventoryProductAPI,
          {
            id: deletedProductResult.data?.deleteProduct?.inventoryProduct
              .items[0].id,
          }
        );

        const deletedProductProviderResult: any = await clientAPI(
          deleteProductProviderAPI,
          {
            id: deletedProductResult.data?.deleteProduct?.productProviderID,
          }
        );

        setProducts!(Products!.filter((p) => p.id !== cell.row.original.id));

        await removeS3IDContent(cell.row.original.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return <ListActions cell={cell} handleDelete={handleDelete} />;
}
