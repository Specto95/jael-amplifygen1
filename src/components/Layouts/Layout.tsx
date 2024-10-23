import { Outlet } from "react-router-dom";
import { SideMenu } from "../UI/SideMenu/SideMenu";
import styles from "./Layout.module.css";
import { useEffect } from "react";

import { useSectionProvider } from "@/hooks/useSectionProvider";

export function Layout() {
  const { sectionName } = useSectionProvider();

  useEffect(() => {
    if (sectionName === "PDV") {
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = "Estas seguro de dejar esta pagina?";
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [sectionName]);

  return (
    <main className={styles.main}>
      <SideMenu />
      <Outlet />
    </main>
  );
}
