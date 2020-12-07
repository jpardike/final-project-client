import React from "react";

import PostModel from "../../models/post";

import "./showPost.css";

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    PostModel.getOne(postId).then((data) => {
      this.setState({ post: data.post });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <p>{this.state.post.body}</p>
        </div>
      </div>
    );
  }
}

export default ShowPost;
