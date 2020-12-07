import React from "react";
import { Link } from "react-router-dom";

import "./postsCards.css";

function PostsCards(props) {
    return (
      <Link to={`/post/${props.post._id}`}>
        <div className="card">
          <div className="card-body">
            <p>{props.post.body}</p>
          </div>
        </div>
      </Link>
    );
}

export default PostsCards;
