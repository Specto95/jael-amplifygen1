import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";

import styles from "./ElementDetails.module.css";
import { IElementDetailsProps } from "./interface/IElementDetails";

export function ElementDetails({ url }: IElementDetailsProps) {
  return (
    <div className="flex__spacing">
      <Link to={url}>
        <CiCircleMore className={styles.CiCircleMore__elementDetails} />
      </Link>
    </div>
  );
}
