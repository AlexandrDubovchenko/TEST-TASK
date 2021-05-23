export type initSearchRes = { searchId: string };
export type getTicketsRes = {
  tickets: Ticket[];
  stop: boolean;
};

export interface Ticket {
  price: number;
  carrier: string;
  segments: [Segment, Segment];
}

export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export enum SortValues {
  PRICE = "price",
  DURATION = "duration",
}
