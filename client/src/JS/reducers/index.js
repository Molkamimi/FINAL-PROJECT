import { combineReducers } from "redux";
import { userReducer } from "./user";
import posts from "./posts";
export const rootReducer = combineReducers({ userReducer, posts });
