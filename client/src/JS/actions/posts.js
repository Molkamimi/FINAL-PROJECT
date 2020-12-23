import axios from "axios";

import * as api from "../../api/index.js";

import {
  GET_ALL_POSTS,
  CREATE_POSTS,
  GET_POSTS_FAIL,
  UPDATE,
  DELETE,
} from "../const/post";
//action creators
export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POSTS });
  try {
    const result = axios.getPosts();
    dispatch({ type: "GET_ALL_POSTS", payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAIL });
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  dispatch({ type: CREATE_POSTS });
  try {
    const result = await api.createPost(post);
    dispatch({ type: "CREATE_POSTS", payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  dispatch({ type: UPDATE });
  try {
    const result = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: DELETE });
  try {
    const result = await api.deletePost(id);
    dispatch({ type: "DELETE", payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const result = await api.likePost(id);
    dispatch({ type: "UPDATE", payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};
