import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchTickets, initSearch } from "./api";
import { FilterCard } from "./components/FilterCard";
import { SortSection } from "./components/SortSection";
import { TicketCard } from "./components/TicketCard";
import { useFilter } from "./hooks/useFilter";
import { useSort } from "./hooks/useSort";
import { Ticket } from "./types";
import { getFilteredAndSorted } from "./utils";

const INITIAL_TICKETS_NUMBER = 5;

function App() {
  const data = useRef<Ticket[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [numberToShow, setNumberToShow] = useState<number>(
    INITIAL_TICKETS_NUMBER
  );
  const { activeFilters, handleChangeFilters } = useFilter();
  const { sort, handleChangeSort } = useSort();

  const currentTickets = useMemo(() => {
    const sortedTickets = getFilteredAndSorted(tickets, activeFilters, sort);
    return sortedTickets.slice(0, numberToShow);
  }, [activeFilters, tickets, numberToShow, sort]);

  const init = async () => {
    try {
      const { searchId } = await initSearch();
      sessionStorage.setItem("searchId", searchId);
      setInitialized(true);
    } catch (error) {
      setInitialized(false);
      console.log(error);
    }
  };
  useEffect(() => {
    init();
  }, []);

  const getTickets = useCallback(async () => {
    try {
      const { tickets, stop } = await fetchTickets();
      data.current = data.current.concat(tickets);
      if (stop) {
        setTickets(data.current);
      } else {
        getTickets();
      }
    } catch (error) {
      getTickets();
    }
  }, [data]);

  useEffect(() => {
    if (initialized) {
      getTickets();
    }
  }, [initialized, getTickets]);

  const showMore = () => {
    setNumberToShow(numberToShow + INITIAL_TICKETS_NUMBER);
  };

  return (
    <div className="app">
      <FilterCard
        activeFilters={activeFilters}
        setActiveFilters={handleChangeFilters}
      />
      <main className="main">
        <SortSection activeSort={sort} onChange={handleChangeSort} />

        {tickets.length ? (
          currentTickets.map((ticket, i) => (
            <TicketCard key={i} ticket={ticket} />
          ))
        ) : (
          <div className="loader">Loader</div>
        )}

        {!!tickets.length && (
          <button className="blueButton" onClick={showMore}>
            Показать еще 5 билетов!
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
