import { useState, useEffect } from "react";
import Select from "react-select";

import styles from "./FiltersSelect.module.css";

//?SRC IMPORTS

//*COMPONENTS
import { IOptionType } from "../interfaces/ISelectTopSectionsData";

//*INTERFACES
import { IFiltersSelectProps } from "./interfaces/IFiltersSelect";

//*PAGES
import { Providers } from "@/pages/Products/ProductForm/Add/AddProductData";
import {
  ICategory,
  ISubcategory,
  IClass,
} from "@/pages/Products/ProductForm/Add/AddProductData.d";

//*AMPLIFY IMPORTS
import {
  listClassesAPI,
  listCategoriesAPI,
  listSubCategoriesAPI,
  listProductsAPI,
} from "@/graphql/queries";
import {
  ListProductsQueryVariables,
} from "@/API";

import { clientAPI } from "@/utils/amplifyAPI/client";

export function FiltersSelect({
  setListProductsViewData,
}: IFiltersSelectProps) {
  const [classes, setClasses] = useState<IClass[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subCategories, setSubCategories] = useState<ISubcategory[]>([]);
  const [selectedOption, setSelectedOption] = useState<IOptionType | null>();

  const handleSelectChange = (option: IOptionType | null) => {
    setSelectedOption(option);
  };

  const handleClearFilters = () => {
    setSelectedOption(null);
  };

  const options = [
    {
      label: "Classes",
      options: classes
        .sort((a, b) => a.id - b.id)
        .map((cl) => ({
          label: cl.name,
          value: cl.id,
        })),
    },
    {
      label: "Categories",
      options: categories
        .sort((a, b) => a.id - b.id)
        .map((ctg) => ({
          label: ctg.name,
          value: ctg.id,
        })),
    },
    {
      label: "Subcategories",
      options: subCategories
        .sort((a, b) => a.id - b.id)
        .map((sub) => ({
          label: sub.subcategory_name,
          value: sub.id,
        })),
    },
    {
      label: "Providers",
      options: Providers.sort((a, b) => a.id - b.id).map((prv) => ({
        label: prv.name,
        value: prv.id,
      })),
    },
  ];

  useEffect(() => {
    //?FETCH DATA
    const fetchClasses = async () => {
      try {
        const result: any = await clientAPI(listClassesAPI);
        setClasses(result.data.listClasses.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClasses();

    const fetchCategories = async () => {
      try {
        const result: any = await clientAPI(listCategoriesAPI);
        setCategories(result.data.listCategories.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();

    const fetchSubCategories = async () => {
      try {
        const result: any = await clientAPI(listSubCategoriesAPI);
        setSubCategories(result.data.listSubCategories.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!!selectedOption) {
          const filter: ListProductsQueryVariables["filter"] = {};
          const id = selectedOption.value;
          const label = selectedOption.label;

          const optionProvider = Providers.some(
            (prv) => prv.id === id && prv.name === label
          );

          const optionClass = classes.some(
            (cl) => cl.id === id && cl.name === label
          );

          const optionCategory = categories.some(
            (ctg) => ctg.id === id && ctg.name === label
          );

          const optionSubcategory = subCategories.some(
            (sub) => sub.id === id && sub.subcategory_name === label
          );

          //TODO - FILTER BY PRODUCTPROVIDER
          // if (optionProvider) {
          //   filter["provider_id"] = { eq: id.toString() };
          // } else
          if (optionClass) {
            filter["class_id"] = { eq: id };
          } else if (optionCategory) {
            filter["category_id"] = { eq: id };
          } else if (optionSubcategory) {
            filter["subcategory_id"] = { eq: id };
          }

          const result: any = await clientAPI(listProductsAPI, filter );
          if (setListProductsViewData) {
            setListProductsViewData(result.data.listProducts.items);
          }
        } else {
          const result: any = await clientAPI(listProductsAPI);
          if (setListProductsViewData) {
            setListProductsViewData(result.data.listProducts.items);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [selectedOption]);

  return (
    <div className={styles["section__filters-flex"]}>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder="Seleccione un filtro"
        isSearchable={false}
        isClearable={false}
        styles={{
          option: (provided) => ({
            ...provided,
            backgroundColor: "var(--bg-secondary)",
            color: "var(--text-primary)",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "var(--text-secondary)",
            },
          }),

          control: (provided) => ({
            ...provided,
            width: "var(--w-selectView)",
            height: "var(--h-button)",
            backgroundColor: "var(--bg-secondary)",
            border: "var(--border-2px)",
            borderRadius: "var(--radius-sm)",
            cursor: "pointer",
            ":hover": {
              border: "var(--border-2px)",
            },
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            display: "none",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "var(--text-primary)",
            fontWeight: "bold",
          }),
          indicatorsContainer: (provided) => ({
            ...provided,
            color: "var(--text-primary)",
          }),
          menu: (provided) => ({
            ...provided,
            margin: "0",
            width: "var(--w-selectView)",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "var(--text-primary)",
          }),
          menuList: (provided) => ({
            ...provided,
            cursor: "pointer",
            margin: "0",
            padding: "0",
            backgroundColor: "var(--bg-secondary)",
          }),
        }}
      />
      <button
        className={styles.section__clearFilters}
        onClick={handleClearFilters}
      >
        Limpiar filtros
      </button>
    </div>
  );
}
