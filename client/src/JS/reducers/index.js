import { combineReducers } from "redux";
import { userReducer } from "./user";
import { postReducer } from "./posts";
export const rootReducer = combineReducers({ userReducer, postReducer });
