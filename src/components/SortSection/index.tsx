import { FC } from "react";
import { SortValues } from "../../types";
import { SortButton } from "../SortButton";
import styles from "./styles.module.css";

type SortOptions = {
  title: string;
  value: SortValues;
};

const sortOptions: SortOptions[] = [
  {
    title: "Самые Дешевые",
    value: SortValues.PRICE,
  },
  {
    title: "Самый Быстрый",
    value: SortValues.DURATION,
  },
];

type SortSectionProps = {
  activeSort?: SortValues;
  onChange: (value: SortValues) => void;
};

export const SortSection: FC<SortSectionProps> = ({ activeSort, onChange }) => {
  return (
    <div className={styles.container}>
      {sortOptions.map(({ title, value }) => (
        <SortButton
          key={value}
          title={title}
          checked={activeSort === value}
          onChange={() => onChange(value)}
        />
      ))}
    </div>
  );
};
