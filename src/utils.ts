import { Segment, SortValues, Ticket } from "./types";

export const getDuration = (segments: Segment[]) => {
  return segments.reduce((acc, el) => (acc += el.duration), 0);
};

export const getFilteredAndSorted = (
  tickets: Ticket[],
  filters: Set<number>,
  sort?: SortValues
) => {
  const filteredTickets = filters.size
    ? tickets.filter((ticket) => {
        const stopsCount = ticket.segments.reduce(
          (acc, el) => (acc += el.stops.length),
          0
        );
        return filters.has(stopsCount);
      })
    : tickets;
  const sortedTickets = filteredTickets.sort((a, b) => {
    if (sort) {
      if (sort === SortValues.PRICE) {
        return a.price - b.price;
      }
      return getDuration(a.segments) - getDuration(b.segments);
    } else {
      return 0;
    }
  });
  return sortedTickets;
};
