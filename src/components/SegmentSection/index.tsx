import moment from "moment";
import { FC, useMemo } from "react";
import { Segment } from "../../types";
import { SegmentInfo } from "../SegmentInfo";
import styles from "./styles.module.css";

export const SegmentSection: FC<{ segment: Segment }> = ({ segment }) => {
  const durationString = useMemo(() => {
    const time = segment.duration;
    const hours = time / 60;
    const minutes = Math.round((hours - Math.floor(hours)) * 60);
    return `${Math.floor(hours) ? `${Math.floor(hours)}ч` : ""} ${
      minutes ? `${minutes}м` : ""
    }`;
  }, [segment.duration]);

  const datesString = useMemo(() => {
    const from = moment(segment.date).format("HH:mm");
    const to = moment(segment.date).add(segment.duration, "m").format("HH:mm");
    return `${from} - ${to}`;
  }, [segment]);

  return (
    <div className={styles.segmentsList}>
      <SegmentInfo
        title={segment.origin + " - " + segment.destination}
        data={datesString}
      />
      <SegmentInfo title={"В пути"} data={durationString} />
      <SegmentInfo
        title={`${segment.stops.length} Пересадки`}
        data={segment.stops.join(", ")}
      />
    </div>
  );
};
