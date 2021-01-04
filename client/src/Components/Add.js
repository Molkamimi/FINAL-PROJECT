import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { Link } from "react-router-dom";

import { Form, Input } from "semantic-ui-react";
import { Button } from "@material-ui/core";
import posts from "./PostList";
//import { toggleFalse, toggleTrue } from "../JS/actions/edit";
import { postPub, editPost } from "../JS/actions/posts";
const Add = () => {
  const dispatch = useDispatch();
  const postReducer = useSelector((state) => state.postReducer.posts);
  console.log(postReducer);
  const edit = useSelector((state) => state.editReducer.edit);
  const [posts, setPosts] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
    likeCount: "",
    createdAt: "",
  });
  useEffect(() => {
    edit
      ? setPosts(postReducer)
      : setPosts({
          title: "",
          message: "",
          creator: "",
          tags: "",
          selectedFile: "",
          likeCount: "",
          createdAt: "",
        });
  }, [postReducer, edit]);
  const handlePost = () => {
    if (!edit) {
      dispatch(postPub(posts));
    } else {
      dispatch(editPost(postReducer._id, posts));
    }
  };
  const clear = () => {
    setPosts(0);
    setPosts({
      title: "",
      message: "",
      creator: "",
      tags: "",
      selectedFile: "",
      likeCount: "",
      createdAt: "",
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setPosts({ ...posts, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <Form.Field>
        <label>title</label>
        <Input
          value={posts.title}
          placeholder="Name"
          name="title"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>message</label>
        <Input
          value={posts.message}
          placeholder="Message"
          name="message"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>creator</label>
        <Input
          value={posts.creator}
          placeholder="Creator"
          name="creator"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>tags</label>
        <Input
          value={posts.tags}
          placeholder="tags"
          name="tags"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>selectedFile</label>
        <Input
          value={posts.selectedFile}
          placeholder="selectedFile"
          name="selectedFile"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>likeCount</label>
        <Input
          value={posts.likeCount}
          placeholder="likeCount"
          name="likeCount"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>createdAt</label>
        <Input
          value={posts.createdAt}
          placeholder="createdAt"
          name="createdAt"
          onChange={handleChange}
        />
      </Form.Field>
      <Link to="/Dashbord">
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={handlePost}
        >
          {edit ? "Edit" : "Save"}{" "}
        </Button>
      </Link>

      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={clear}
      >
        Clear
      </Button>
    </Form>
  );
};

export default Add;
