// we use axios to call api and specify our url
import axios from "axios";
//returns all the posts we have in db
const url = "http://localhost:5000/posts";

//axios.get to call our url
export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
