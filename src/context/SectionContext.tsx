import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IChildren, ISectionName } from "@/interfaces/main";

import { useSessionProvider } from "@/hooks/useSessionProvider";

type SectionContextType = {
  sectionName: ISectionName["sectionName"];
  setSectionName: (sectionName: ISectionName["sectionName"]) => void;
  handleBack: () => void;
  handleBackTo: (sectionName: ISectionName["sectionName"]) => void;
  branchOfficeID: string;
  setBranchOfficeID: (branchOfficeID: string) => void;
  hasParams: boolean;
  setHasParams: (hasParams: boolean) => void;
  filteredCheckedFields: string[];
  setFilteredCheckedFields: React.Dispatch<React.SetStateAction<string[]>>;
  isDownloading: boolean;
  setIsDownloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SectionContext = createContext<SectionContextType>(
  {} as SectionContextType
);

export const SectionProvider = ({ children }: IChildren) => {
  const { isLogged } = useSessionProvider();

  const navigate = useNavigate();
  const [sectionName, setSectionName] =
    useState<ISectionName["sectionName"]>("PDV");
  const [branchOfficeID, setBranchOfficeID] = useState<string>("");
  const [hasParams, setHasParams] = useState<boolean>(false);
  const [filteredCheckedFields, setFilteredCheckedFields] = useState<string[]>(
    []
  );

  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleBack = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleBackTo = (sectionName: ISectionName["sectionName"]) => {
    setTimeout(() => {
      setSectionName(sectionName);
      handleBack();
    }, 100);
  };

  useEffect(() => {
    if (!isLogged) {
      setSectionName("");
    }
  }, [isLogged]);

  useEffect(() => {
    if (sessionStorage.getItem("branchOffice")) {
      setBranchOfficeID(sessionStorage.getItem("branchOffice")!);
    }
  }, [sessionStorage.getItem("branchOffice")]);

  return (
    <SectionContext.Provider
      value={{
        sectionName,
        setSectionName,
        handleBack,
        handleBackTo,
        branchOfficeID,
        setBranchOfficeID,
        hasParams,
        setHasParams,
        filteredCheckedFields,
        setFilteredCheckedFields,
        isDownloading,
        setIsDownloading,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};
