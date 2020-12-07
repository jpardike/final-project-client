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
        <div className="row p-0 m-0 justify-content-center">
          <h2 className="mt-5">Update Post</h2>
        </div>
        <div className="row p-0 m-0 justify-content-center">
          <div className="col text-center">
            <form className="mt-5" onSubmit={this.handleUpdatePostSubmit}>
              <textarea
                value={this.state.body}
                onChange={this.handleUpdatePostChange}
                name="body"
                cols="70"
                rows="5"
              ></textarea>
              <br/>
              <input value="Update" type="submit" className="btn mt-4" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default UpdatePost;
