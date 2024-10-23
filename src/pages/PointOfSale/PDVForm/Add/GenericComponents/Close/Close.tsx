import { useNavigate } from "react-router-dom";
import styles from "./Close.module.css";

import { useSectionProvider } from "@/hooks/useSectionProvider";


export function Close() {

  const handleTemporalBackTo = () => {
    setTimeout(() => {
      setSectionName!("products");
      navigate("/");
      
    }, 1000);
  }

  const navigate = useNavigate();
  const {setSectionName } = useSectionProvider();
  return (
    <div className={styles["Close__Container"]}>
      <button
        type="button"
        className='button__secondary-cancel'
        // onClick={() => handleBackTo!("PDV")}
        onClick={handleTemporalBackTo}
      >
        Cerrar
      </button>
    </div>
  );
}
