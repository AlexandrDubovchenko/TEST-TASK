import { FC } from "react";
import { Ticket } from "../../types";
import { SegmentSection } from "../SegmentSection";
import styles from "./styles.module.css";

export const TicketCard: FC<{ ticket: Ticket }> = ({ ticket }) => {
  return (
    <div className={styles.container + " card"}>
      <div className={styles.card_header}>
        <p className={styles.price}>
          {ticket.price.toLocaleString("ru-Ru", {
            currency: "RUB",
            style: "currency",
            minimumFractionDigits: 0,
          })}
        </p>
        <div>
          <img
            src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
            alt="company logo"
          />
        </div>
      </div>
      <div className={styles.card_body}>
        {ticket.segments.map((segment, i) => (
          <SegmentSection key={i} segment={segment} />
        ))}
      </div>
    </div>
  );
};
