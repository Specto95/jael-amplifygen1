import { IChildren } from "@/interfaces/main";
import { IUserDataContext } from "../../interfaces/context/SessionContext";

export interface IProtectedRouteProps {
  isLogged: boolean;
  redirectTo?: string;
  // children?: React.ReactNode;
}
