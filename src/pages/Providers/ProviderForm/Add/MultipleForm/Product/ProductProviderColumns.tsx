import { IProductProviderColumns } from "./IProductProvider";


export const ProductProviderColumns: IProductProviderColumns[] = [
    {
      Header: "Producto",
      accessor: "name"
    },
    {
      Header: "Precio",
      accessor: "price"
    },
    {
      Header: "Clase",
      accessor: "class_id"
    },
    {
      Header: "Clave",
      accessor: "productProviderId",
    },
    {
      Header: "Marca",
      accessor: "category_id"
    },
    {
      Header: "SubGrupo",
      accessor: "subcategory_id"
    }
  ];
  