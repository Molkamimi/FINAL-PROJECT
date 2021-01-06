import { combineReducers } from "redux";
import { userReducer } from "./user";
import { postReducer } from "./posts";
import { editReducer } from "./edit";
import { filterReducer } from "./search";
import { todoComment } from "./comment";
export const rootReducer = combineReducers({
  userReducer,
  postReducer,
  editReducer,
  filterReducer,
  todo: todoComment,
});
