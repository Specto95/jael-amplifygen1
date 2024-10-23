export interface SectionFormProps {
  headingTitle?: string;
  withFiltering?: boolean;
  headingSubtitle?: string;
  children: React.ReactNode;
  hasTopSection?: boolean;
  fullWidthBGSec?: boolean;
  fullWidthBGMain?: boolean;
  query?: string;
  setQuery?: (query: string) => void;
  isLoading?: boolean;
}
