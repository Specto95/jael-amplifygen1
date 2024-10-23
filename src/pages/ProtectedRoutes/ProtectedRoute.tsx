import { useEffect } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IProtectedRouteProps } from "./ProtectedRoute.d";

import { useSectionProvider } from "@/hooks/useSectionProvider";
import { useSessionProvider } from "../../hooks/useSessionProvider";

import { ISectionName } from "@/interfaces/main";
import { sectionNameObj } from "@/utils/globalObjs/sectionNames/sectionNamesObj";
import { ForbiddenSections } from "./ForbiddenSections";
import { AccountFormObj } from "../Account/utils/AccountFormObj";

export const ProtectedRoute = ({
  isLogged,
  redirectTo = "/login",
}: IProtectedRouteProps) => {
  const location = useLocation();
  const { setSectionName, sectionName } = useSectionProvider();
  const { rolID } = useSessionProvider();

  useEffect(() => {
    setSectionName(
      JSON.parse(
        sessionStorage.getItem(
          sectionNameObj.SECTIONNAME
        ) as ISectionName["sectionName"]
      )
    );
  }, [sectionName]);

  useEffect(() => {
    if (
      rolID === AccountFormObj.BRANCHMANAGER &&
      ForbiddenSections.includes(sectionName)
    ) {
      setSectionName("PDV");
    }
  }, [sectionName]);

  return isLogged || location.pathname === "/login" ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo}  />
  );
};
