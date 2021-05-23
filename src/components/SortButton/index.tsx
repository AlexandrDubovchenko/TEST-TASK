import { FC } from "react";
import styles from "./styles.module.css";

type SortButtonProps = {
  onChange: () => void;
  checked: boolean;
  title: string;
};

export const SortButton: FC<SortButtonProps> = ({
  onChange,
  checked,
  title,
}) => {
  return (
    <button
      onClick={onChange}
      className={styles.container + ' ' + (checked && styles.active) }
    >
      {title}
    </button>
  );
};
