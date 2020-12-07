import React from "react";
import { Link } from "react-router-dom";

import PostModel from "../../models/post";

import "./showPost.css";

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      postUserId: "",
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    PostModel.getOne(postId).then((data) => {
      this.setState({ post: data.post, postUserId: data.post.user._id });
    });
  }

  render() {
    if (this.props.currentUser === this.state.postUserId) {
      return (
        <div className="card">
          <div className="card-body">
            <p>{this.state.post.body}</p>
            <div className="row">
              <p>update</p>
              <Link to={`/post/update/${this.state.post._id}`}>
              Update
              </Link>
              <p>delete</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <div className="card-body">
            <p>{this.state.post.body}</p>
          </div>
        </div>
      );
    }
  }
}

export default ShowPost;
