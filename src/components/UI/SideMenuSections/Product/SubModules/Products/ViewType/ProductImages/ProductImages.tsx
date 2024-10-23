import { useState, useEffect } from "react";

import styles from "./ViewImages.module.css";

import { ProductImageCard } from "./ProductImageCard";
import { ProductImageAdd } from "./ProductImageAdd";

//*INTERFACES
import { IProductImages } from "@/interfaces/Products/products";

//*AMPLIFY IMPORTS
import { list, getUrl } from "aws-amplify/storage";
import { IProductImagesProps } from "@/interfaces/Products/products";
import { TableTransparentSpinner } from "@/components/UI/Spinners/TableTransparentSpinner";

export function ProductImages({
  listProductsViewData,
  isLoading,
}: IProductImagesProps) {
  const [productImages, setProductImages] = useState<IProductImages>({});
  const [allImagesFetched, setAllImagesFetched] = useState(false);

  const fetchProductImages = async (productId: string) => {
    try {
      //?LIST FIRST IMAGE OF THE PRODUCTID
      const result = await list({
        
        prefix: `${productId}/`,
        options: {
          pageSize: 1000,
        },
      });
      if (result) {
        console.log(result)
        const firstObjectKey = result.items[0]?.key;
        if (firstObjectKey) {
          const res = await getUrl({
            key: firstObjectKey,
            options: {
              validateObjectExistence: true,
            },
          });

          console.log(res);

          const URL = res.url.toString();
          // const imageUrl = URL.createObjectURL(blob);
          setProductImages((prev) => ({ ...prev, [productId]: URL }));
        }
      }
    } catch (error) {
      console.log("Error retrieving product image:", error);
    }
  };
  useEffect(() => {
    let isMounted = true;
    const fetchAllProductImages = async () => {
      listProductsViewData?.map(({ id }) => fetchProductImages(id));
      if (isMounted) {
        setAllImagesFetched(true);
      }
    };
    fetchAllProductImages();
    return () => {
      isMounted = false;
    };
  }, [listProductsViewData]);
  return (
    <>
      {isLoading ? (
        <TableTransparentSpinner />
      ) : listProductsViewData && listProductsViewData!.length > 0 ? (
        <div className={styles["productCard__container"]}>
          {listProductsViewData?.map((pro) => {
            return (
              <ProductImageCard
                key={pro.id}
                pro={pro}
                productImages={productImages}
              />
            );
          })}

          <ProductImageAdd />
        </div>
      ) : (
        <>
          <h3>No hay productos para mostrar.</h3>
          <div className={styles["productCard__container"]}>
            <ProductImageAdd />
          </div>
        </>
      )}
    </>
  );
}
