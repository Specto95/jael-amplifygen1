import { useMemo, useState } from "react";

export function GenericFilteredItems<T>(
  items: T[] | undefined,
  field: keyof T
) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items
      ? items.filter((item) => {
          const value = item[field];
          return (
            typeof value === "string" &&
            value.toLowerCase().includes(query.toLowerCase())
          );
        })
      : [];
  }, [items, query, field]);

  return { filteredItems, query, setQuery };
}
