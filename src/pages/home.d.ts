import { IUserDataContext } from "../context/interfaces/ISessionContext";
export interface IHomeProps {
  setUserDataContext: (userDataContext: IUserDataContext) => void;
  userDataContext: IUserDataContext;
}
