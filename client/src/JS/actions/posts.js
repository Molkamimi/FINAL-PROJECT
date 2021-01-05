import {
  GET_POSTS_FAIL,
  GET_POSTS_LOAD,
  GET_POSTS_SUCCESS,
  DELETE_POST,
  GET_POST,
  LIKE_POST,
  POST_PUB,
  EDIT_POST,
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
export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`/api/post/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) => console.log(err));
};
export const getPost = (id) => (dispatch) => {
  axios
    .get(`/api/post/${id}`)
    .then((res) => dispatch({ type: GET_POST, payload: res.data.response }))
    .catch((err) => console.log(err));
};
export const likePost = (id) => async (dispatch) => {
  await axios
    .get(`/api/post/${id}`)
    .then((res) => dispatch({ type: LIKE_POST, payload: res.data.response }))
    .catch((err) => console.log(err));
};
export const postPub = (post) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  await axios
    .post(`/api/add`, post, options)
    .then((res) => dispatch(getPosts()))
    .catch((err) => console.log(err));
};

export const editPost = (id, post) => (dispatch) => {
  axios
    .put(`/api/post/${id}`, post)
    .then((res) => dispatch(getPosts()))
    .catch((err) => console.log(err));
};
