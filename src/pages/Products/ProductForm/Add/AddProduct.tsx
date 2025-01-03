import { useState, useEffect, ChangeEvent, DragEvent, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";

import styles from "../ProductForm.module.css";

import { LayoutForm } from "@/components/Layouts/LayoutForm";
import { ProductFormData } from "../ProductFormData";

//? SRC IMPORTS

//*COMPONENTS
const ModalProductSuccess = lazy(() =>
  import("@/components/UI/Modals/ModalSuccess/ModalProductSuccess").then(
    (module) => ({
      default: module.ModalProductSuccess,
    })
  )
);

//*HOOKS
import { useSectionProvider } from "@/hooks/useSectionProvider";

//*UTILS
import { formatKey, formatNumber } from "@/utils/helpers";
import { validateAddProduct } from "@/utils/validations";

//*INTERFACES
import {
  ISubcategory,
  IAddProductInputAPI,
  IAddProductProviderInputAPI,
  IAddInventoryProductInputAPI,
} from "./AddProductData.d";

//* APIs
import { useListProvidersIDName } from "./api/Providers/useListProvidersIDName";
import { useListClasses } from "./api/classes/useListClasses";
import { useListCategories } from "./api/categories/useListCategories";
import { useListInventoriesIDs } from "./api/Inventory/useListInventoriesIDs";

//* AMPLIFY IMPORTS
import { listSubCategoriesAPI } from "@/graphql/queries";
import { clientAPI } from "@/utils/amplifyAPI/client";

export function AddProduct() {
  const { setSectionName, handleBackTo } = useSectionProvider();
  const { providersIDName } = useListProvidersIDName();
  const { listClasses } = useListClasses();
  const { listCategories } = useListCategories();
  const { listInventoriesIDs } = useListInventoriesIDs();

  const navigate = useNavigate();
  const [subCategories, setSubCategories] = useState<ISubcategory[]>([]);
  const [selectedState, setSelectedState] = useState<number>();
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [providerProductProviderIDs, setProviderProductProviderIDs] = useState({
    providerID: "",
    productProviderID: "",
  });

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
    localStorage.setItem("file", file.name);
  };

  useEffect(() => {
    if (selectedState || selectedState === 0) {
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

  return (
    <>
      <Helmet>
        <title>Jael | Agregar Producto</title>
        <meta name="description" content="Agregar Producto" />
      </Helmet>
      <Formik
        initialValues={ProductFormData}
        validationSchema={validateAddProduct}
        onSubmit={async (values) => {
          if (values.isSecondButton) {
            //* DYNAMIC AMPLIFY IMPORTS

            const {
              createInventoryProductAPI,
              createProductAPI,
              createProductProviderAPI,
            } = await import("@/graphql/mutations");

            try {
              const addProductinput: IAddProductInputAPI = {
                class_id: +values.class,
                category_id: +values.category,
                subcategory_id: +values.subcategory,
                name: values.name,
                description: values.description,
                price: +values.price,
                commission: 0,
                hasCommission: values.hasCommission,
                hasDiscount: values.hasDiscount,
                productProviderID: providerProductProviderIDs.productProviderID,
              };
              setIsModalOpen(true);
              const result: any = await clientAPI(createProductAPI, {
                input: addProductinput,
              });

              //?ID TO ADD IMAGE AND PRODUCTPROVIDER
              const { id: productID } = result.data.createProduct;

              if (productID && values.key) {
                const productProviderInput: IAddProductProviderInputAPI = {
                  productProviderProviderIDId:
                    providerProductProviderIDs.providerID,
                };

                const productProviderResult: any = await clientAPI(
                  createProductProviderAPI,
                  {
                    input: productProviderInput,
                  }
                );

                if (listInventoriesIDs.length > 0) {
                  listInventoriesIDs.map(async (inventoryID) => {
                    const inventoryProductInput: IAddInventoryProductInputAPI =
                      {
                        productID,
                        customPrice: +values.price,
                        quantity: 0,
                        inventoryID: inventoryID.id,
                        generalPrice: +values.price,
                        productProviderID:
                          providerProductProviderIDs.productProviderID,
                      };

                    const inventoryProductResult: any = await clientAPI(
                      createInventoryProductAPI,
                      {
                        input: inventoryProductInput,
                      }
                    );
                  });
                }

                // branchOfficeIDs.map(async (branchOfficeID) => {
                //   //?BRANCH OFFICE PRODUCT
                //   const branchOfficeProductInput: ICreateBranchOfficeProductInputAPI =
                //     {
                //       branchOfficeID: branchOfficeID.id,
                //       productID: id,
                //       customPrice: +values.price,
                //     };

                //   const branchOfficeProductResult: GraphQLQuery<any> =
                //     await API.graphql(
                //       graphqlOperation(createBranchOfficeProductAPI, {
                //         input: branchOfficeProductInput,
                //       })
                //     );
                // });
              }

              //?Storage
              try {
                if (fileName) {
                  const { uploadData } = await import("aws-amplify/storage");

                  uploadData({
                    key: `${productID}/${fileName.name}`,
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
              } catch (error) {
                console.log(error);
              }
              return;
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        {({ errors, touched, handleSubmit, setFieldValue, values }) => (
          <LayoutForm values={values} fileName={fileName}>
            <Form
              className={styles.productform}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <h2 className="heading__primary">Agregar Producto</h2>
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
                        Descripción
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
                        <option value="" disabled>
                          Elegir clase:
                        </option>
                        {listClasses &&
                          listClasses
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
                          setSelectedState(+e.target.value);
                          setFieldValue("category", e.target.value);
                        }}
                      >
                        <option value="" disabled>
                          Elegir Grupo:
                        </option>
                        {listCategories &&
                          listCategories
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
                        <option value="" disabled>
                          Elegir Subgrupo:
                        </option>
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
                        Proveedor *
                      </label>
                      <Field
                        as="select"
                        name="key"
                        placeholder="Proveedor"
                        id="key"
                        className={`${styles.productform__input} ${
                          touched.key && errors.key ? "input-error" : ""
                        }`}
                        value={values.key}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                          setFieldValue("key", e.target.value);

                          const providerProductProviderID =
                            providersIDName.find(
                              (provider) =>
                                provider.providerProductproviderId ===
                                e.target.value
                            );

                          if (providerProductProviderID) {
                            setProviderProductProviderIDs({
                              providerID: providerProductProviderID.id,
                              productProviderID:
                                providerProductProviderID.providerProductproviderId,
                            });
                          }
                        }}
                      >
                        <option value="" disabled>
                          Elegir Proveedor:
                        </option>
                        {providersIDName.map((provider, idx) => (
                          <option
                            value={provider.providerProductproviderId}
                            key={provider.id}
                          >
                            {/* {formatNumber(idx + 1)} - ProductProvider */}
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
                        <img
                          className="image__fitRadiusSM"
                          src={image}
                          alt="file"
                          width={200}
                          height={150}
                        />
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
                    handleBackTo("products");
                    // setSectionName("products");
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
          title={"Producto Guardado correctamente!"}
          setIsModalOpen={setIsModalOpen}
          backTo={"productsCatalogue"}
        />
      )}
    </>
  );
}
