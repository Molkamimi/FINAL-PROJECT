import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./PostStylesList";
import Post from "./Post";
import { getPosts } from "../JS/actions/posts";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const loadPosts = useSelector((state) => state.postReducer.loadPosts);

  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {loadPosts ? (
        <h2>loading</h2>
      ) : (
        posts.map((el) => <Post key={el._id} posts={el} />)
      )}
    </div>
  );
};

export default PostList;
