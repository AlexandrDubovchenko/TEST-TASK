import { FC } from "react";
import styles from "./styles.module.css";

type SegmentInfoProps = {
  title: string;
  data: string;
};

export const SegmentInfo: FC<SegmentInfoProps> = ({ title, data }) => {
  return (
    <div className={styles.segmentInfo}>
      <p className={styles.segmentInfo_title}>{title}</p>
      <p className={styles.segmentInfo_data}>{data}</p>
    </div>
  );
};
