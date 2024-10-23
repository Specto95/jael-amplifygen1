import { useState, useEffect, ChangeEvent, DragEvent, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";

import styles from "../ProductForm.module.css";

//?SRC IMPORTS

//*LAZY COMPONENTS
const ModalProductSuccess = lazy(() =>
  import("@/components/UI/Modals/ModalSuccess/ModalProductSuccess").then(
    (module) => ({
      default: module.ModalProductSuccess,
    })
  )
);

//* COMPONENTS
import { LayoutForm } from "@/components/Layouts/LayoutForm";
import { ProductFormData } from "../ProductFormData";

//* HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//* APIs
import { useListCategories } from "../Add/api/categories/useListCategories";
import { useListClasses } from "../Add/api/classes/useListClasses";
import { useListProvidersIDName } from "../Add/api/Providers/useListProvidersIDName";

import { useListInventoryProductsIDAndProductID } from "./api/useListInventoryProductsIDAndProductID";

//*INTERFACES
import {
  ISubcategory,
  IUpdateProductData,
  IAddProductInputAPI,
  IUpdateInventoryProductCustomPriceInputAPI,
} from "../Add/AddProductData.d";

//*UTILS
import { formatKey, formatNumber } from "@/utils/helpers";
import { validateAddProduct as validateUpdateProduct } from "@/utils/validations";

//*AMPLIFY IMPORTS
import { getProductAPI, listSubCategoriesAPI } from "@/graphql/queries";
import {
  updateProductAPI,
  updateInventoryProductGeneralPriceAPI,
} from "@/graphql/mutations";

import { clientAPI } from "@/utils/amplifyAPI/client";
import { getUrl, uploadData, list, remove } from "aws-amplify/storage";

export function UpdateProduct(): JSX.Element {
  const { handleBackTo } = useSectionProvider();

  const { listCategories: categories } = useListCategories();
  const { listClasses: classes } = useListClasses();
  const { providersIDName: providers } = useListProvidersIDName();
  const { id } = useParams();
  const { listInventoryProductsIDAndProductID } =
    useListInventoryProductsIDAndProductID(id!);

  const [subCategories, setSubCategories] = useState<ISubcategory[]>([]);

  const [selectedState, setSelectedState] = useState<string>("");
  const [updateProductState, setUpdateProductState] =
    useState<IUpdateProductData>();
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [previousPrice, setPreviousPrice] = useState<number>(0);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleFileSelection = (file: File) => {
    setImage(URL.createObjectURL(file));
    setFileName(file);
  };

  const fetchProductImages = async (productId: string) => {
    try {
      const result = await list({
        prefix: `${productId}/`,
        options: {
          pageSize: 1000,
        },
      });
      if (result) {
        const firstObjectKey = result.items[0]?.key;
        if (firstObjectKey) {
          const res = await getUrl({
            key: firstObjectKey,
            options: {
              validateObjectExistence: true,
            },
          });
          const URL = res.url.toString();
          // const res = await Storage.get(firstObjectKey, { download: true });
          // const blob = res.Body as Blob;
          // const imageUrl = URL.createObjectURL(blob);
          setImage(URL);
        }
      }
    } catch (error) {
      console.log("Error retrieving product image:", error);
    }
  };

  async function removeFilesWithPrefix(productId: string) {
    try {
      const result = await list({
        prefix: `${productId}/`,
        options: {
          pageSize: 1000,
        },
      });
      if (result) {
        const files = result.items.map((r) => r.key);
        if (files.length === 0) return;
        await Promise.all(
          files.map((f) =>
            remove({
              key: f as string,
            })
          )
        );
        console.log("Files deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  }

  useEffect(() => {
    if (selectedState) {
      const fetchSubCategories = async () => {
        try {
          const result: any = await clientAPI(listSubCategoriesAPI, {
            filter: {
              categoryID: {
                eq: selectedState,
              },
            },
          });
          setSubCategories(result.data.listSubCategories.items);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSubCategories();
    } else {
      setSubCategories([]);
    }
  }, [selectedState]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData: any = await clientAPI(getProductAPI, { id });

        if (productData.data.getProduct) {
          productData.data.getProduct.key =
            productData.data.getProduct.productProvider.providerID.id;
        }
        productData.data.getProduct.class =
          productData.data.getProduct.class_id;
        productData.data.getProduct.category =
          productData.data.getProduct.category_id;
        productData.data.getProduct.subcategory =
          productData.data.getProduct.subcategory_id;
        setSelectedState(productData.data.getProduct.category_id);
        setUpdateProductState(productData.data.getProduct);
        setPreviousPrice(productData.data.getProduct.price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
    fetchProductImages(id!);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jael | Editar Producto</title>
        <meta name="description" content="Editar Producto" />
      </Helmet>
      <style jsx="true">{`
        body {
          background-color: var(--text-secondary);
        }
      `}</style>
      <Formik
        initialValues={updateProductState || ProductFormData}
        validationSchema={validateUpdateProduct}
        onSubmit={async (values) => {
          if (values.isSecondButton) {
            try {
              setIsModalOpen(true);

              //* UPDATE GENERAL PRODUCT DETAILS
              const input: IAddProductInputAPI = {
                id,
                class_id: +values.class,
                category_id: +values.category,
                subcategory_id: +values.subcategory,
                name: values.name,
                description: values.description,
                price: +values.price,
                commission: updateProductState?.commission,
                hasCommission: values.hasCommission,
                hasDiscount: values.hasDiscount,
              };

              await clientAPI(updateProductAPI, { input });

              if (values.price !== previousPrice) {
                //* UPDATE GENERAL PRICES IN ALL INVENTORY PRODUCTS WITH THE PRODUCTID

                listInventoryProductsIDAndProductID.length > 0 &&
                  listInventoryProductsIDAndProductID.forEach(
                    async ({ id: inventoryProductID }) => {
                      const updateInventoryProductCustomPriceInput: IUpdateInventoryProductCustomPriceInputAPI =
                        {
                          id: inventoryProductID,
                          generalPrice: +values.price,
                        };

                      const updatedInventoryGeneralPriceResult: any =
                        await clientAPI(updateInventoryProductGeneralPriceAPI, {
                          input: updateInventoryProductCustomPriceInput,
                        });

                      console.log(updatedInventoryGeneralPriceResult);
                    }
                  );
              }
            } catch (error) {
              console.log(error);
              return;
            }

            //?Storage
            try {
              if (fileName) {
                //?REMOVE THE PREVIOUS IMAGE IN S3
                removeFilesWithPrefix(id as string);

                uploadData({
                  key: `${id}/${fileName.name}`,
                  data: fileName,
                  options: {
                    contentType: fileName.type,
                    onProgress: ({ transferredBytes, totalBytes }) => {
                      if (totalBytes) {
                        console.log(
                          `Upload progress ${Math.round(
                            (transferredBytes / totalBytes) * 100
                          )} %`
                        );
                      }
                    },
                  },
                }).result;
              }
              return;
            } catch (error) {
              console.log(error);
            }
          }
        }}
        enableReinitialize
      >
        {({ errors, touched, handleSubmit, setFieldValue, values }) => (
          <LayoutForm values={values} fileName={fileName}>
            <Form
              className={styles.productform}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <h1 className="heading__primary">Actualizar Producto</h1>
              <div className="flex__spacingCenterRES">
                <div className={styles.productform__left}>
                  <div className="flexColumn-MBSM">
                    <div className="flex__spacing">
                      <label htmlFor="name" className="label__sm">
                        Producto *
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Nombre del producto"
                        id="name"
                        className={`${styles.productform__input} ${
                          touched.name && errors.name ? "input-error" : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flexColumn-MBSM">
                    <div className="flex__spacing">
                      <label htmlFor="description" className="label__sm">
                        Descripción *
                      </label>
                      <Field
                        type="text"
                        name="description"
                        placeholder="Descripción del producto"
                        id="description"
                        className={`${styles.productform__input} ${
                          touched.description && errors.description
                            ? "input-error"
                            : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flexColumn-MBSM">
                    <div className="flex__spacing">
                      <label htmlFor="price" className="label__sm">
                        Precio *
                      </label>
                      <Field
                        type="number"
                        name="price"
                        placeholder="Precio del producto"
                        id="price"
                        className={`${styles.productform__input} ${
                          touched.price && errors.price ? "input-error" : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flexColumn-MBSM">
                    <div className="flex__spacing">
                      <label htmlFor="class" className="label__sm">
                        Clase *
                      </label>
                      <Field
                        as="select"
                        name="class"
                        placeholder="Clase"
                        id="class"
                        className={`${styles.productform__input} ${
                          touched.class && errors.class ? "input-error" : ""
                        }`}
                      >
                        {classes &&
                          classes
                            .sort((a, b) => a.id - b.id)
                            .map((cl) => (
                              <option value={cl.id} key={cl.id}>
                                {formatNumber(cl.id)} - {cl.name}
                              </option>
                            ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="class"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flexColumn-MBSM">
                    <div className="flex__spacing">
                      <label htmlFor="category" className="label__sm">
                        Grupo *
                      </label>
                      <Field
                        as="select"
                        name="category"
                        placeholder="Grupo"
                        id="category"
                        className={`${styles.productform__input} ${
                          touched.category && errors.category
                            ? "input-error"
                            : ""
                        }`}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setSelectedState(e.target.value);
                          setFieldValue("category_id", selectedState);
                        }}
                      >
                        {categories &&
                          categories
                            .sort((a, b) => a.id - b.id)
                            .map((category) => (
                              <option value={category.id} key={category.id}>
                                {formatNumber(category.id)} - {category.name}
                              </option>
                            ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flexColumn-MBSM">
                    <div className="flex__spacing">
                      <label htmlFor="subcategory" className="label__sm">
                        SubGrupo *
                      </label>
                      <Field
                        as="select"
                        name="subcategory"
                        placeholder="Subgrupo"
                        id="subcategory"
                        className={`${styles.productform__input} ${
                          touched.subcategory && errors.subcategory
                            ? "input-error"
                            : ""
                        }`}
                      >
                        {subCategories &&
                          subCategories
                            .sort((a, b) => a.id - b.id)
                            .map((subCategory) => (
                              <option
                                value={subCategory.id}
                                key={subCategory.id}
                              >
                                {formatNumber(subCategory.id)} -{" "}
                                {subCategory.subcategory_name}
                              </option>
                            ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="subcategory"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flexColumn-MBSM">
                    <div className="flex__spacing">
                      <label htmlFor="key" className="label__sm">
                        Proveedor
                      </label>
                      <Field
                        as="select"
                        name="key"
                        placeholder="Proveedor"
                        id="key"
                        className={`${styles.productform__input} ${
                          touched.key && errors.key ? "input-error" : ""
                        }`}
                        disabled={true}
                      >
                        <option value="" disabled>
                          Elegir Proveedor:
                        </option>

                        {providers.map((provider) => (
                          <option value={provider.id} key={provider.id}>
                            {formatKey(provider.id)} -{" "}
                            {provider.enterprise_name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="key"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flex__spacingCenter-MY">
                    <Field
                      type="checkbox"
                      name="hasCommission"
                      id="hasCommission"
                      className={`${styles.productform__input} ${
                        touched.hasCommission && errors.hasCommission
                          ? "input-error"
                          : ""
                      }`}
                    />
                    <label htmlFor="hasCommission" className="label__sm">
                      Aplica a comisión
                    </label>
                    <ErrorMessage
                      name="hasCommission"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="flex__spacingCenter">
                    <Field
                      type="checkbox"
                      name="hasDiscount"
                      id="hasDiscount"
                      className={`${styles.productform__input} ${
                        touched.hasDiscount && errors.hasDiscount
                          ? "input-error"
                          : ""
                      }`}
                    />
                    <label htmlFor="hasDiscount" className="label__sm">
                      Aplica a descuento
                    </label>
                    <ErrorMessage
                      name="hasCommission"
                      component="div"
                      className="error"
                    />
                  </div>
                </div>
                <div className={styles.productform__right}>
                  <div className={styles["productform__center-items"]}>
                    <label className={styles.productform_withphoto}>
                      {image ? (
                        <img src={image} alt="file" width={200} height={150} />
                      ) : (
                        <div>
                          <h2 className={styles["productform__withphoto-text"]}>
                            No hay imagen del producto
                          </h2>
                        </div>
                      )}
                    </label>
                    <label
                      htmlFor="photo"
                      className={styles["productform__previsualizacion-text"]}
                    >
                      Previsualización de la imagen
                    </label>
                    <Field
                      type="file"
                      name="photo"
                      accept="image/*"
                      id="photo"
                      className={styles.productform__uploadfile}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="photo"
                      className={styles["productform__uploadfile-text"]}
                    >
                      {image ? "Cambiar imagen" : "Cargar desde equipo"}
                    </label>
                  </div>
                  <div
                    className={styles["productform__dragfile-container"]}
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    Arrastra y suelta una imagen aquí
                  </div>
                </div>
              </div>
              <div className="flex__spacingJustifyEnd-MY">
                <button
                  type="button"
                  onClick={() => {
                    setFieldValue("isSecondButton", false);
                    handleBackTo("productsCatalogue");
                  }}
                  className="button__primary-cancel"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setFieldValue("isSecondButton", true)}
                  type="submit"
                  className="button__primary-submit"
                >
                  Guardar
                </button>
              </div>
            </Form>
          </LayoutForm>
        )}
      </Formik>
      {isModalOpen && (
        <ModalProductSuccess
          title={"Producto Actualizado correctamente!"}
          setIsModalOpen={setIsModalOpen}
          backTo={"productsCatalogue"}
        />
      )}
    </>
  );
}
