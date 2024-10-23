//?SRC IMPORTS

//* COMPONENTS
import { ListActions } from "@/components/UI/GenericComponents/BackContinue/Tables/ListActions/ListActions";

//*INTERFACES
import { IShowTableDataActionsProps } from "./interfaces/IShowTableDataActions";

//*AMPLIFY IMPORTS
import { getUrl, uploadData, list, remove } from "aws-amplify/storage";
import {
  deleteProductAPI,
  deleteInventoryProductAPI,
  deleteProductProviderAPI,
} from "@/graphql/mutations";

export function ShowTableDataActions({
  cell,
  Data,
  setData,
  sectionName,
}: IShowTableDataActionsProps) {
  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar el ${sectionName} con ID ${cell.row.original.id}?`
      )
    ) {
      async function removeS3IDContent(id: string) {
        try {
          if (sectionName === "product") return;
          const result = await list({
            prefix: `${id}/`,
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
              key: `${id}/`,
            });
            console.log("Files deleted successfully.");
          }
        } catch (error) {
          console.error("Error deleting files:", error);
        }
      }
      try {
        const { clientAPI } = await import("@/utils/amplifyAPI/client");
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

        setData!(Data!.filter((p) => p.id !== cell.row.original.id));

        await removeS3IDContent(cell.row.original.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return <ListActions cell={cell} handleDelete={handleDelete} />;
}
