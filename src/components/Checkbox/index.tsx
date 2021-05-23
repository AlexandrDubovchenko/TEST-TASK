import { FC } from "react";
import styles from "./styles.module.css";

type CheckboxProps = {
  title: string;
  checked: boolean;
  onChange: (value: number | 'all') => void;
  value: number | 'all';
};

export const Checkbox: FC<CheckboxProps> = ({
  title,
  checked,
  onChange,
  value,
}) => {
  return (
    <label className={styles.container}>
      <input
        onChange={(e) => onChange(value)}
        checked={checked}
        className={styles.checkbox}
        type="checkbox"
        hidden
      />
      <div className={styles.custom} />
      {title}
    </label>
  );
};
