import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./PostStylesList";
import Post from "./Post";
import { getPosts } from "../JS/actions/posts";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const loadPosts = useSelector((state) => state.postReducer.loadPosts);
  const [Search, setSearch] = useState("");
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts());
  }, [Search]);
  return (
    <div>
      {loadPosts ? (
        <h2>loading</h2>
      ) : (
        posts.map((el) => <Post key={el._id} post={el} setSearch={setSearch} />)
      )}
    </div>
  );
};

export default PostList;
