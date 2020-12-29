import {
  GET_POSTS_FAIL,
  GET_POSTS_LOAD,
  GET_POSTS_SUCCESS,
} from "../const/posts";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOAD });
  try {
    let result = await axios.get("/api/post");
    dispatch({ type: GET_POSTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAIL, payload: error });
    console.log(error);
  }
};
