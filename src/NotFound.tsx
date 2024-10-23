import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { IUserDataContext } from "./interfaces/context/SessionContext";

interface INotFoundProps {
  isLogged: boolean;
  redirectTo?: string;
}

export function NotFound({ isLogged, redirectTo = "/" }: INotFoundProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return !isLogged ? (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  ) : (
    <div className="flexColumn__spacingCenterHFullVH">
      <h1>404 - Pagina no Encontrada</h1>
      <button className="button__primary" onClick={() => navigate("/")}>Volver</button>
    </div>
  );
}
