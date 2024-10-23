//* INTERFACES
import { ILayoutFormProps } from "./interfaces/ILayoutForm";

//* COMPONENTS
import { SideMenuOperation } from "../UI/SideMenu/Operation/SideMenuOperation";
import { UserView } from "../UI/RoleInfo/UserView/UserView";

//* STYLES
import styles from "./LayoutForm.module.css";

export function LayoutForm({ values, fileName, children }: ILayoutFormProps) {
  return (
    <>
      <SideMenuOperation values={values} fileName={fileName} />

      <div className={styles.mainOperation__container}>
        <section className={styles.fixed__UserSectionView}>
        <UserView isForm={true} />
          
        </section>

        <div className={styles.fixed__divisor}></div>

        {children}
      </div>
    </>
  );
}
