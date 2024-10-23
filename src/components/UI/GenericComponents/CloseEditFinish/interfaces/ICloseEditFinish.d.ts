import {
  IIsEditing,
  ISetFieldValue,
  ISetIsEditing,
} from "@/interfaces/SideMenuSections/general";

export interface ICloseEditFinishProps
  extends IIsEditing,
    ISetIsEditing,
    ISetFieldValue {
        customFinishText?: string;
    }
