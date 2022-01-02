import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LatestPosts from "./LatestPosts/LatestPosts";
import { NewPost} from "./NewPost"
import { ViewPost } from "./ViewPost";
export function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/allPosts" />
      </Route>
      <Route exact path="/allPosts" component={LatestPosts} />
      <Route exact path="/newPost" component={NewPost} />
      <Route exact path="/viewPost" component={ViewPost} />
    </Switch>
  );
}
