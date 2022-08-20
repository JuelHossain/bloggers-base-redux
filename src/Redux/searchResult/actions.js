import { SEARCHING } from "./actionTypes";

export const filterBySearch = (searchInput, allBlogs) => {
  return {
    type: SEARCHING,
    payload: {
      searchInput,
      allBlogs,
    },
  };
};
