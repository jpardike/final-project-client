import React from "react";

import "./postsCards.css";

function PostsCards(props) {
  return (
    <div className="card">
      <div className="card-body">
        <p>{props.post.body}</p>
      </div>
    </div>
  );
}

export default PostsCards;
