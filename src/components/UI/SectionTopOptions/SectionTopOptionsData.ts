import ImageView from "@/assets/img/ImageViewIcon.png";
import ListView from "@/assets/img/ListViewIcon.png";
import { ISelectTopSectionsData } from "./interfaces/ISelectTopSectionsData";

export const options : ISelectTopSectionsData[] = [
  {
    value: "thumbnail",
    label: "Modo Imágenes",
    image: ImageView,
  },
  { value: "list", label: "Modo Lista", image: ListView },
];