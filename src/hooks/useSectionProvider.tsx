import { useContext } from "react";
import { SectionContext } from "@/context/SectionContext";

export function useSectionProvider() {
  return useContext(SectionContext);
}