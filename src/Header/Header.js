import { AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import './header.css'


export default function Header() {

  const history = useHistory();
  const headerBar = () => {
    return (
      <Toolbar>
        <Grid justify="space-between" container spacing={24}>
          <Grid item>
            <Typography type="title" color="inherit">
              <Link to='/' style={{color: "#FFF"}}> Kwitter</Link>
            </Typography>
          </Grid>

          <Grid item>
            <div>
              <Button
                className="customBtn"
                variant="outlined"
                color="default"
                onClick={ () => {
                  history.push('/allPosts')
                }}
              >
                All Posts
              </Button>
              <Button className="customBtn" variant="outlined" onClick={ () => {
                history.push('/newPost')
              }}>
                New
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar>{headerBar()}</AppBar>
    </header>
  );
}
