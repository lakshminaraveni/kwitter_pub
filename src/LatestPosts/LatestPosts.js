import * as React from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Box,
} from "@material-ui/core";
import PostCard from "./PostCard";

export default function LatestPosts() {
  const [posts, setPosts] = React.useState([]);

  const handleGetAllPosts = () => {
    axios
      .get("https://hashtags-n-mentions.herokuapp.com/api/posts")
      .then((response) => {
        console.log(response);
        setPosts(response?.data?.posts);
      });
  };

  React.useEffect(() => {
    handleGetAllPosts();
  }, []);

  return (
    <div>
      <Grid container spacing={24} justify="center">
        {posts?.map((post, index) => {
          return (
            <Grid item md={6} key={index} style={{marginBottom: 12}}>
              <PostCard post={post} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
