import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../JS/actions/user";
import { useHistory } from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import trips from "../Images/trips.jpg";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "../Styles/styles";
import { getPosts } from "../../JS/actions/posts";

const Dashbord = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        Logout
      </button>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Trips
          </Typography>
          <img className={classes.image} src={trips} alt="trips" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              className={classes.mainContainer}
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}></Grid>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default Dashbord;
