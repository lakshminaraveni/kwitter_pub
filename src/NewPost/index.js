import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function NewPost(props) {
  const history = useHistory();
  const [postData, setPostData] = React.useState({
    title: "",
    content: "",
  });
  const [isLoading, seIsLoading] = React.useState(false);

  const handleSubmitPost = () => {
    seIsLoading(true);
    axios
      .post("https://hashtags-n-mentions.herokuapp.com/api/post", {
        title: postData?.title,
        content: postData?.content,
        createdAt: new Date().getTime(),

      })
      .then(() => {
        seIsLoading(false);

        history.push("/allPosts");
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>New Post</h2>
      <Grid container spacing={24} justify="center">
        <Grid item md={12}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            value={postData?.title}
            onChange={(e) => {
                setPostData({
                    ...postData,
                    title: e.target.value
                })
            }}
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            style={{ marginTop: 12, marginBottom: 16 }}
            variant="outlined"
            fullWidth
            value={postData?.content}
            onChange={(e) => {
                setPostData({
                    ...postData,
                    content: e.target.value
                })
            }}
          />
        </Grid>
        <Button
          color="primary"
          variant="contained"
          disabled={!postData?.title || !postData?.content}
          onClick={() => handleSubmitPost()}
        >
          {isLoading ? "Please wait.." : "Save"}
        </Button>
      </Grid>
    </div>
  );
}
