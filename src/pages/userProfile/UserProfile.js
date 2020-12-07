import React from "react";
import { Link } from 'react-router-dom';
import UserModel from "../../models/user";
import PostModel from "../../models/post";

import PostsCards from "../../components/postsCards/PostsCards";

import "./userProfile.css";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      body: "",
      posts: [],
    };
  }

  componentDidMount() {
    const userId = this.props.currentUser;

    UserModel.getOne(userId).then((data) => {
      this.setState({ user: data.user });
    });

    PostModel.all().then((data) => {
      this.setState({ posts: data.posts });
    });
  }

  handleNewPostChange = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  handleNewPostSubmit = (event) => {
    event.preventDefault();
    PostModel.create({ body: this.state.body, user: this.state.user._id }).then(
      (data) => {
        console.log(data);
        PostModel.all().then((data) => {
          this.setState({ posts: data.posts, body: "" });
        });
      }
    );
  };

  renderPosts() {
    return this.state.posts.map((post) => {
      return <PostsCards key={post._id} post={post} />;
    });
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h3>Name: {this.state.user.name}</h3>
            <p>Username: {this.state.user.username}</p>
            <p>Email: {this.state.user.email}</p>
            <p>Location: {this.state.user.location}</p>
            <Link to={`/user/edit/${currentUser}`}>
                Edit User
              </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <h4>Add Post</h4>
            <form onSubmit={this.handleNewPostSubmit}>
              <label htmlFor="body">Be Heard</label>
              <textarea
                value={this.state.body}
                onChange={this.handleNewPostChange}
                name="body"
                cols="30"
                rows="10"
              ></textarea>
              <input value="Post" type="submit" className="btn btn-primary" />
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <ul>{this.renderPosts()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
