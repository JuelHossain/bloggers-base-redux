import {
  FILTERBYAUTHOR,
  FILTERBYCATAGORIES,
  FILTERBYSEARCH,
  FILTERBYTITLE,
} from "./actionTypes";

export const filterByTitle = (title, all) => {
  return {
    type: FILTERBYTITLE,
    payload: {
      title,
      all,
    },
  };
};
export const filterByAuthor = (author, all) => {
  return {
    type: FILTERBYAUTHOR,
    payload: {
      author,
      all,
    },
  };
};
export const filterByCatagories = (catagories, all) => {
  return {
    type: FILTERBYCATAGORIES,
    payload: {
      catagories,
      all,
    },
  };
};
