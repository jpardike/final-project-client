import React from "react";

import PostModel from "../../models/post";

import "./updatePost.css";

class UpdatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    PostModel.getOne(postId).then((data) => {
      this.setState({ body: data.post.body });
    });
  }

  handleUpdatePostChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUpdatePostSubmit = (event) => {
    const postId = this.props.match.params.id;
    event.preventDefault();
    PostModel.update(postId, this.state).then((data) => {
        this.props.history.goBack();
    })
  }

  render() {
    return (
      <>
        <div className="row">
          <h2>Update Post</h2>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleUpdatePostSubmit}>
              <textarea
                value={this.state.body}
                onChange={this.handleUpdatePostChange}
                name="body"
                cols="30"
                rows="10"
              ></textarea>
              <input value="Update" type="submit" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default UpdatePost;
