import { SEARCHING } from "./actionTypes";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING:
      const { searchInput, allBlogs } = action.payload;
      const searchByTitle = allBlogs.filter((blog) => {
        if (searchInput === "") {
          return false;
        } else if (
          blog.title.toLowerCase().includes(searchInput.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      const searchByAuthor = allBlogs.filter((blog) => {
        if (searchInput === "") {
          return false;
        } else if (
          blog.author.name.toLowerCase().includes(searchInput.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      const searchByCat = allBlogs.filter((blog) => {
        if (searchInput === "") {
          return false;
        } else if (blog.cat.toLowerCase().includes(searchInput.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      return [
        ...new Set([...searchByTitle, ...searchByAuthor, ...searchByCat]),
      ];

    default:
      return state;
  }
};
export default reducer;
