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
  const postReducer = useSelector((state) => state.postReducer.post);
  const [post, setPost] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
    likeCount: "",
    createdAt: "",
  });
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();

  useEffect(() => {
    edit
      ? setPost(postReducer)
      : setPost({
          title: "",
          message: "",
          creator: "",
          tags: "",
          selectedFile: "",
          likeCount: "",
          createdAt: "",
        });
  }, [edit, postReducer]);
  const handlePost = () => {
    if (!edit) {
      dispatch(postPub(post));
    } else {
      dispatch(editPost(postReducer._id, post));
    }
  };
  const clear = () => {
    setPost(0);
    setPost({
      title: "",
      message: "",
      creator: "",
      tags: "",
      selectedFile: "",
      likeCount: "",
      createdAt: "",
    });
  };

  return (
    <Form>
      <Form.Field>
        <label>title</label>
        <Input
          value={post.title}
          placeholder="Name"
          name="title"
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>message</label>
        <Input
          value={post.message}
          placeholder="Message"
          name="message"
          onChange={(e) => {
            setPost({ ...post, message: e.target.value });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>creator</label>
        <Input
          value={post.creator}
          placeholder="Creator"
          name="creator"
          onChange={(e) => {
            setPost({ ...post, creator: e.target.value });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>tags</label>
        <Input
          value={post.tags}
          placeholder="tags"
          name="tags"
          onChange={(e) => {
            setPost({ ...post, tags: e.target.value });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>selectedFile</label>
        <Input
          value={post.selectedFile}
          placeholder="selectedFile"
          name="selectedFile"
          onChange={(e) => {
            setPost({ ...post, selectedFile: e.target.value });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>likeCount</label>
        <Input
          value={post.likeCount}
          placeholder="likeCount"
          name="likeCount"
          onChange={(e) => {
            setPost({ ...post, likeCount: e.target.value });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>createdAt</label>
        <Input
          value={post.createdAt}
          placeholder="createdAt"
          name="createdAt"
          onChange={(e) => {
            setPost({ ...post, createdAt: e.target.value });
          }}
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
