import { FC } from "react";
import { filterOptions } from "../../hooks/useFilter";
import { Checkbox } from "../Checkbox";
import styles from "./styles.module.css";



type FilterCardProps = {
  activeFilters: Set<number>;
  setActiveFilters: (value: number | 'all') => void;
};

export const FilterCard: FC<FilterCardProps> = ({
  activeFilters,
  setActiveFilters,
}) => {
  return (
    <div className="card">
      <h4 className={styles.title}>Количество пересадок</h4>
      <ul>
        <li>
          <Checkbox
            value={'all'}
            onChange={setActiveFilters}
            title={"Все"}
            checked={activeFilters.size === filterOptions.length}
          />
        </li>
        {filterOptions.map(({ title, value }) => (
          <li key={value}>
            <Checkbox
              value={value}
              onChange={setActiveFilters}
              title={title}
              checked={activeFilters.has(value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
