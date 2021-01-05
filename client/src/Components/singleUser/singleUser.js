import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPost, getPost } from "../../JS/actions/posts";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const SingleUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postt = useSelector((state) => state.postReducer.post);
  const edit = useSelector((state) => state.editReducer.edit);
  const [post, setPost] = useState({
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
      ? setPost(post)
      : setPost({
          title: "",
          message: "",
          creator: "",
          tags: "",
          selectedFile: "",
          createdAt: "",
        });
    if (postt) {
      dispatch(getPost(post._id));
    }
  }, [edit, post]);
  const handlePost = () => {
    if (!edit) {
      dispatch(getPost(post._id));
    } else {
      dispatch(editPost(post._id, post));
    }
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {post.message}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {" "}
            {post.tags}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleUser;
