import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./PostStyles";
import { useDispatch } from "react-redux";
import { deletePost, getPost, likePost } from "../JS/actions/posts";
import { Link } from "react-router-dom";
import { TOGGLE_FALSE, TOGGLE_TRUE } from "../JS/const/edit";
import { toggleTrue } from "../JS/actions/edit";
import { connect } from "react-redux";
import { addItem } from "../JS/actions/comment";
import ListComment from "./ListComment/ListComment";
import SingleUser from "../Components/singleUser/singleUser";
const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white", fontSize: "10px" }}
          size="small"
          onClick={() => {}}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          size="40"
        />
        <Button
          color="primary"
          onClick={() => {
            dispatch(addItem({ id: Math.random(), todo: item, done: false }));
            setItem("");
          }}
        >
          Add
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h6"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
        <div className="comment-section">{/* <ListComment /> */}</div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <ThumbAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        <Link to={`/Dashbord/add/${post._id}`}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(getPost(post._id));
              dispatch(toggleTrue());
            }}
          >
            <DeleteIcon fontSize="small" />
            EDIT
          </Button>
        </Link>
        <Link to={`/add/${post._id} `}>
          <Button
            size="small"
            color="primary"
            fontSize="small"
            onClick={() => {
              dispatch(getPost(post._id));
              dispatch(toggleTrue());
            }}
          >
            Profile
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Post;
