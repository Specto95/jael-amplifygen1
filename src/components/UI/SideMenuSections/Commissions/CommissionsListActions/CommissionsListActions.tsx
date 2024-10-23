import { Link } from "react-router-dom";

import styles from "../Commissions.module.css";

//?SRC IMPORTS

//*ASSETS
import Delete from "@/assets/img/Delete.png";
import Edit from "@/assets/img/Edit.svg";

//*INTERFACES
import { ICommissionsListActionsProps } from "./interfaces/ICommissionsListActions";

export function CommissionsListActions({
  cell,
  listCommissions,
  setListCommissions,
}: ICommissionsListActionsProps) {
  const handleDelete = async () => {
    if (
      confirm(
        `¿Estas seguro de eliminar comisión de la sucursal ${cell.row.original.name}?`
      )
    ) {
      // try {
      //   await API.graphql<GraphQLQuery<DeleteProviderMutation>>(
      //     graphqlOperation(deleteProvider, {
      //       input: { id: cell.row.original.id },
      //     })
      //   );
      //   setListBranchOfficesCommissions!(
      //     listBranchOfficesCommissions!.filter(
      //       (p) => p.id !== cell.row.original.id
      //     )
      //   );
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  return (
    <div className={styles["tableData-btnContainer"]}>
      <Link to={`/`}>
        <img src={Edit} alt="Edit" />
      </Link>
      <button className={styles["tableData-btnDelete"]} onClick={handleDelete}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
}
