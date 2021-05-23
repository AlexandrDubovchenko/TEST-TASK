import { useState } from "react";
import { SortValues } from "../types";

export const useSort = () => {
  const [sort, setSort] = useState<SortValues | undefined>();

  const handleChangeSort = (value: SortValues) => {
    if (value === sort) {
      setSort(undefined);
    } else {
      setSort(value);
    }
  };

  return { sort, handleChangeSort };
};
