import { Link } from "react-router-dom";

//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";
import styles from "../Provider.module.css";

//*INTERFACES
import { IProviderListActionsProps } from "./interfaces/IProviderListActions";

//*AMPLIFY IMPORTS
import { deleteProviderAPI } from "@/graphql/mutations";

import { clientAPI } from "@/utils/amplifyAPI/client";
import { getUrl, uploadData, list, remove } from "aws-amplify/storage";

export function ProviderListActions({
  cell,
  Providers,
  setProviders,
}: IProviderListActionsProps) {
  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar el proovedor ${cell.row.original.enterprise_name}?`
      )
    ) {
      async function removeS3IDContent(providerId: string) {
        try {
          const result = await list({
            prefix: `${providerId}/`,
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
              key: `${providerId}/`,
            });
            console.log("Files deleted successfully.");
          }
        } catch (error) {
          console.error("Error deleting files:", error);
        }
      }
      try {
        await clientAPI(deleteProviderAPI, {
          input: { id: cell.row.original.id },
        });
        setProviders(Providers.filter((p) => p.id !== cell.row.original.id));

        await removeS3IDContent(cell.row.original.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles["tableData-btnContainer"]}>
      <Link to={`/provider/update/${cell.row.original.id}`}>
        <img src={Edit} alt="Edit" />
      </Link>
      <button className={styles["tableData-btnDelete"]} onClick={handleDelete}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}
