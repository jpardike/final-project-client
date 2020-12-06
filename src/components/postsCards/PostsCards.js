import React from "react";
// import { Link } from "react-router-dom";

import "./postsCards.css";

function PostsCards(props) {
  if (props.user === props.post.user) {
    return (
      <div className="card">
        <div className="card-body">
          <p>{props.post.body}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-body">
          <p>{props.post.body}</p>
        </div>
      </div>
    );
  }
}

export default PostsCards;
