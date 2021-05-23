import { useState } from "react";

export const filterOptions = [
  {
    value: 0,
    title: "Без пересадок",
  },
  {
    value: 1,
    title: "1 пересадка",
  },
  {
    value: 2,
    title: "2 пересадки",
  },
  {
    value: 3,
    title: "3 пересадки",
  },
];

export const useFilter = () => {
  const [activeFilters, setActiveFilters] = useState<Set<number>>(
    () => new Set([])
  );

  const handleChangeFilters = (value: number | "all") => {
    if (value === "all") {
      if (!(filterOptions.length === activeFilters.size)) {
        const newFilters = new Set(filterOptions.map((f) => f.value));
        setActiveFilters(newFilters);
        return;
      } else {
        setActiveFilters(new Set([]));
        return;
      }
    }
    if (activeFilters.has(value)) {
      const newFilters = new Set(activeFilters);
      newFilters.delete(value);
      setActiveFilters(newFilters);
    } else {
      setActiveFilters((prev) => new Set(prev).add(value));
    }
  };

  return { activeFilters, handleChangeFilters };
};
