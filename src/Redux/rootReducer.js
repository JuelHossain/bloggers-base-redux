import { combineReducers } from "redux";
import allReducer from "./All/Reducer";
import filteredReducer from "./filtered/reducer";
import searchReducer from "./searchResult/reducer";

const rootReducer = combineReducers({
  all: allReducer,
  filtered: filteredReducer,
  searchResult: searchReducer,
});

export default rootReducer;
