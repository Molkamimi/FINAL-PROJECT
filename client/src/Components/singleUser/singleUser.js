import { urlencoded } from "body-parser";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardImg,
  Spinner,
} from "reactstrap";
import { postPub, editPost } from "../../JS/actions/posts";

const SingleUser = () => {
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
  return (
    <Card
      style={{
        backgroundColor: "#9dd4dc",
        fontStyle: "italic",
        fontSize: "large",
      }}
    >
      <CardImg
        top
        width="20px"
        title={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <CardBody>
        <CardTitle
          tag="h6"
          onChange={(e) => {
            setPost({ ...post, creator: e.target.value });
          }}
        >
          {" "}
          creator: {post.creator}
        </CardTitle>

        <CardText>
          <small
            className="text-muted"
            onChange={(e) => {
              setPost({ ...post, message: e.target.value });
            }}
          >
            message:{post.message}
          </small>
        </CardText>
        <CardText>
          <small
            className="text-muted"
            onChange={(e) => {
              setPost({ ...post, tags: e.target.value });
            }}
          >
            tags:{post.tags}
          </small>
        </CardText>
        <CardText>
          <CardText>
            <small
              className="text-muted"
              onChange={(e) => {
                setPost({ ...post, likeCount: e.target.value });
              }}
            >
              likeCount:{post.likeCount}
            </small>
          </CardText>
          <small
            className="text-muted"
            onChange={(e) => {
              setPost({ ...post, createdAt: e.target.value });
            }}
          >
            createdAt:{post.createdAt}
          </small>
        </CardText>
        <CardText>
          <small
            className="text-muted"
            onChange={(e) => {
              setPost({ ...post, selectedFile: e.target.value });
            }}
          >
            selectedFile:{post.selectedFile}
          </small>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default SingleUser;
