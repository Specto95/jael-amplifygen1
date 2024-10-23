import { useState, useEffect, lazy } from "react";

import styles from "../ViewImages.module.css";

//* INTERFACES
import { IPDVCardProps } from "@/interfaces/PDV/PDV";
import { IListProductsPDVAPI } from "../api/interfaces/IUseListProductsPDV";
import { commaSeparator } from "@/utils/commaSeparator";

import { useGetBranchOfficeCommission } from "../../Second/api/useGetBranchOfficeCommission";
import { handleTotalCommission } from "../../../helpers/functions";
import { useSessionProvider } from "@/hooks/useSessionProvider";
import { AccountFormObj } from "@/pages/Account/utils/AccountFormObj";

const ModalProductDetails = lazy(() =>
  import(
    "@/components/UI/Modals/SideMenuSections/PDV/ModalProductDetails"
  ).then((module) => ({
    default: module.ModalProductDetails,
  }))
);

export function PDVCard({
  pro,
  productImages,
  setSelectedData,
  selectedData,
  setPreviousData,
}: IPDVCardProps) {
  const { branchInventory, rolID, mainBranchInventory } = useSessionProvider();

  const { getBranchOfficeCommission } = useGetBranchOfficeCommission(
    rolID === AccountFormObj.ADMIN ? mainBranchInventory.id : branchInventory.id
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isXLView, setIsXLView] = useState(window.innerWidth > 1200);

  const handleResize = () => {
    setIsXLView(window.innerWidth > 1200);
  };

  const handleSelectedData = () => {
    const isObjectAlreadyAdded = selectedData!.some(
      (item) => item.id === pro.id
    );

    if (!isObjectAlreadyAdded) {
      setSelectedData!((prev: IListProductsPDVAPI[]) => [
        ...prev,
        {
          ...pro,
          quantity: 1,
          withDiscount: false,
          discountPercentage: 0,
          discountPerProduct: 0,
          totalDiscounted: 0,
          productPriceWithDiscount: 0,
          amountToPayWithDiscount: 0,
          amountToPay: pro.price * 1,
          commission: pro.hasCommission
            ? (pro.price * getBranchOfficeCommission.branchOffice_commission) /
              100
            : 0,
          // commission: handleTotalCommission(
          //   selectedData,
          //   getBranchOfficeCommission.branchOffice_commission
          // ),
        },
      ]);
      setPreviousData!((prev: IListProductsPDVAPI[]) => [...prev, { ...pro }]);
      return;
    }
    return;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.productCard} key={pro.id}>
      <div className={styles["productCard__img"]}>
        <div className={styles["productCard__img-Container"]}>
          {productImages && productImages[pro.id] ? (
            <img src={productImages[pro.id]} alt={pro.name} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles["productCard__info"]}>
        <div className={styles["productCard__detailsContainer"]}>
          <button
            className="button__mainFit"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Detalles
          </button>
        </div>
        {isXLView ? (
          <>
            <div className="flex__spacing-MY left">
              <div className={styles["productCard__name"]}>
                <h4>{pro.name}</h4>
              </div>
              <div className={styles["productCard__price"]}>
                <h4>${commaSeparator(pro.price)}</h4>
              </div>
            </div>
            <div className="flex__spacingBetween-MYXS">
              {pro.quantity > 0 ? (
                <>
                  <h4>Existencia</h4>
                  <h4 className="logo-available">{pro.quantity}</h4>
                </>
              ) : (
                <h4 className="error w-full text-right my-xs">Agotado</h4>
              )}
            </div>

            <button
              type="button"
              className="button__primary-bluefit"
              onClick={handleSelectedData}
              disabled={pro.quantity === 0}
            >
              Agregar al carrito
            </button>
          </>
        ) : (
          <>
            <div className="flexColumn__spacingNoCenter left">
              <h5>Nombre del Producto</h5>
              <h5 className="text-primary">{pro.name}</h5>
            </div>
            <div className="flexColumn__spacingNoCenter left">
              <h5>Precio</h5>
              <h5 className="text-primary">${commaSeparator(pro.price)}</h5>
            </div>
            <div className="flexColumn__spacingNoCenter left">
              <h5>Cantidad Disponible</h5>
              {pro.quantity > 0 ? (
                <>
                  <button className="button__primary-bluefitNoPadding">
                    {pro.quantity}
                  </button>
                </>
              ) : (
                <h5 className="error">Agotado</h5>
              )}
            </div>
            <div className="flexColumn__spacingNoCenter">
              <button
                type="button"
                className="button__primary-bluefit text-sm"
                onClick={handleSelectedData}
                disabled={pro.quantity === 0}
              >
                Agregar al carrito
              </button>
            </div>
          </>
        )}
      </div>
      {isModalOpen && (
        <ModalProductDetails
          pro={pro}
          setIsModalOpen={setIsModalOpen}
          handleSelectedData={handleSelectedData}
        />
      )}
    </div>
  );
}
