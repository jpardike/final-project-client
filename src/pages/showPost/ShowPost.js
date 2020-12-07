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

  deletePostClick = () => {
    const postId = this.props.match.params.id;
    PostModel.destroy(postId).then((data) => {
      this.props.history.goBack();
    });
  };

  render() {
    if (this.props.currentUser === this.state.postUserId) {
      return (
        <div className="row p-0 m-0 justify-content-center">
          <div className="col-6 mt-5 text-center">
            <h2 className="mb-5">View Post</h2>
            <div className="card">
              <div className="card-body">
                <p className="m-4">{this.state.post.body}</p>
                <div className="row p-0 m-0 justify-content-around">
                  <Link
                    className="btn"
                    to={`/post/update/${this.state.post._id}`}
                  >
                    Update
                  </Link>
                  <button className="btn" onClick={this.deletePostClick}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row p-0 m-0 justify-content-center">
          <div className="col-6 text-center">
            <h2 className="mb-5">View Post</h2>
            <div className="card">
              <div className="card-body">
                <p className="m-4">{this.state.post.body}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ShowPost;
