import { lazy } from "react";

import {MainHeading} from "../Headings/Main/MainHeading";
import { SectionFormProps } from "./interfaces/ISectionForm";
import { SectionTopOptionsForm } from "../SectionTopOptions/SectionTopOptionsForm";

const PrimaryHeading = lazy(() =>
  import("../Headings/Primary/PrimaryHeading").then((module) => ({
    default: module.PrimaryHeading,
  }))
);

const InventoryTopSection = lazy(() =>
  import("@/pages/Inventory/Type/Main/InventoryTopSection").then((module) => ({
    default: module.InventoryTopSection,
  }))
);

export default function SectionForm({
  headingTitle,
  headingSubtitle,
  children,
  hasTopSection,
  fullWidthBGSec,
  fullWidthBGMain,
  withFiltering,
  query,
  setQuery,
  isLoading,
}: SectionFormProps) {
  return (
    <>
      <section
        className={
          fullWidthBGSec
            ? "generalForm__wFullBGSecPXXSPC"
            : fullWidthBGMain
            ? "generalForm__wFullBGMainPXXSPC"
            : "generalForm"
        }
      >
        {headingTitle && <MainHeading title={isLoading ? "-" : headingTitle} />}
        {headingSubtitle && <PrimaryHeading title={headingSubtitle} />}

        {withFiltering && (
          <SectionTopOptionsForm query={query} setQuery={setQuery} />
        )}

        {children}
      </section>
    </>
  );
}
