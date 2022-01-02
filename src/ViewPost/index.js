import React from "react";
import PostCard from "../LatestPosts/PostCard";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export function ViewPost(props) {
  const location = useLocation();

  return (
    <div>
      <h2 style={{textAlign:'center'}}>View Post</h2>
      <PostCard post={location?.state?.post} isViewPage={true} />
      <Link to='/'> Back</Link>
    </div>
  );
}
