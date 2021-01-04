import { combineReducers } from "redux";
import { userReducer } from "./user";
import { postReducer } from "./posts";
import { editReducer } from "./edit";
export const rootReducer = combineReducers({
  userReducer,
  postReducer,
  editReducer,
});
