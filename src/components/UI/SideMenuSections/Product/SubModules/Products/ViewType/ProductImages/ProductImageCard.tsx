import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ViewImages.module.css";

//* ASSETS
import Edit from "@/assets/img/Edit.svg";

//* INTERFACES
import { IProductImageCardProps } from "@/interfaces/Products/products";

//* UTILS
import { commaSeparator } from "@/utils/commaSeparator";
import { formatKey, formatNumber } from "@/utils/helpers";

export function ProductImageCard({
  pro,
  productImages,
}: IProductImageCardProps) {
  const blurredImageDiv = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const div = blurredImageDiv.current!;
    const img = imageContainer.current!;

    function handleLoad() {
      if (img.complete) {
        div.classList.add("loaded");
      }
    }

    if (img && img.complete) {
      handleLoad();
    } else if (img) {
      img.addEventListener("load", handleLoad);
    }

    return () => {
      if (img) {
        img.removeEventListener("load", handleLoad);
      }
    };
  }, [productImages![pro.id]]);

  const navigate = useNavigate();
  return (
    <div className={styles.productCard} key={pro.id}>
      <div className={styles["productCard__img"]}>
        {productImages && productImages[pro.id] && (
          <div
            ref={blurredImageDiv}
            className={styles["productCard__img-Container"]}
          >
            <img
              ref={imageContainer}
              src={productImages[pro.id]}
              alt={pro.name}
              loading="lazy"
            />
          </div>
        )}
        <div
          className={styles["productCard__edit"]}
          onClick={() => navigate(`/products/update/${pro.id}`)}
        >
          <img src={Edit} alt={pro.name} />
        </div>
      </div>
      <div className={styles["productCard__info"]}>
        <div className={styles["productCard__info-inner"]}>
          <h5 className="text-primary">{pro.name}</h5>
          <div className={styles.productCard__discountCommission}>
            <h5>Descuento: </h5>
            <h5>{pro.hasDiscount ? "Aplica" : "No aplica"}</h5>
          </div>
        </div>
        <div className={styles["productCard__info-inner"]}>
          <h5>{`$${commaSeparator(pro.price)}`}</h5>
          <div className={styles.productCard__discountCommission}>
            <h5>Comisión: </h5>
            <h5>{pro.hasCommission ? "Aplica" : "No aplica"}</h5>
          </div>
        </div>
        <div className={styles["productCard__info-inner"]}>
          <h6>
            Clase: <span className="ml-xs">{formatNumber(+pro.class_id)}</span>
          </h6>
          <h6>
            Grupo:{" "}
            <span className="ml-xs">{formatNumber(+pro.category_id)}</span>
          </h6>
        </div>
        <div className={styles["productCard__info-inner"]}>
          <h6>
            Clave:{" "}
            <span className="ml-xs">
              {formatKey(pro.productProviderID!) || "N/A"}
            </span>
          </h6>
          <h6>
            SubGrupo:{" "}
            <span className="ml-xs">{formatNumber(+pro.subcategory_id)}</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
