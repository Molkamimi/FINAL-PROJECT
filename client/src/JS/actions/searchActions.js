import { GET_TEXT } from "../const/searchPost";

export const setSearch = (payload) => {
  return {
    type: GET_TEXT,
    payload,
  };
};
