import { ILineProps } from "./interfaces/ILine";
import styles from "./Line.module.css";


export default function Line({ size }: ILineProps) {
  return (
    <div
      className={
        size === "small"
          ? styles["line-small"]
          : size === "medium"
          ? styles["line-medium"]
          : styles["line-large"]
      }
    ></div>
  );
}
