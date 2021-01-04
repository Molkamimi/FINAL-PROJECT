//import const
import {
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  GET_POSTS_LOAD,
  GET_POST,
} from "../const/posts";

//INITIALSTATE
const initialState = {
  posts: [],
  loadPosts: false,
  errors: null,
  post: {},
};
export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_LOAD:
      return { ...state, loadPosts: true };
    case GET_POSTS_SUCCESS:
      return { ...state, posts: payload, loadPosts: false };
    case GET_POSTS_FAIL:
      return { ...state, loadPosts: false, errors: payload };
    case GET_POST:
      return { ...state, post: payload };

    default:
      return state;
  }
};
