import { getTicketsRes, initSearchRes } from "./types";

const BASE_URL = "https://front-test.beta.aviasales.ru";

export const initSearch = async (): Promise<initSearchRes> => {
  try {
    const res = await fetch(BASE_URL + "/search");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTickets = async (): Promise<getTicketsRes> => {
  try {
    const searchId = sessionStorage.getItem("searchId");
    const res = await fetch(`${BASE_URL}/tickets?searchId=${searchId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
