import {
  FILTERBYAUTHOR,
  FILTERBYCATAGORIES,
  FILTERBYTITLE,
} from "./actionTypes";

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERBYTITLE:
      const { title, all: forTitle } = action.payload;
      return [
        forTitle.find(
          (blog) => blog.title.toLowerCase() === title.toLocaleLowerCase()
        ),
      ];
    case FILTERBYAUTHOR:
      const { author, all: forAuthor } = action.payload;
      return forAuthor.filter(
        (blog) => blog.author.name.toLowerCase() === author.toLocaleLowerCase()
      );

    case FILTERBYCATAGORIES:
      const { catagories, all: forCatagories } = action.payload;
      return forCatagories.filter(
        (blog) => blog.cat.toLowerCase() === catagories.toLowerCase()
      );

    default:
      return state;
  }
};

export default reducer;
