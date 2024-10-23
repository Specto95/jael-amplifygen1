import { Outlet } from "react-router-dom";

import styles from "./LayoutOperation.module.css";

import { useEffect } from "react";


export function LayoutOperation(): JSX.Element {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Estas seguro de dejar esta pagina?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <main className={styles.mainOperation}>
      <Outlet />
    </main>
  );
}
