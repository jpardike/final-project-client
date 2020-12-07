import React from "react";
import { Link } from "react-router-dom";
import UserModel from "../../models/user";
import PostModel from "../../models/post";

import placeholderImage from "../../assets/placeholder.jpg";

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
        <div className="row p-0 m-0 justify-content-around align-items-center">
          <div className="col-4 p-5">
            <img
              className="user-image img-fluid"
              src={placeholderImage}
              alt="user image"
            />
          </div>
          <div className="col-4 p-5">
            <h3>Name: {this.state.user.name}</h3>
            <p>Username: {this.state.user.username}</p>
            <p>Email: {this.state.user.email}</p>
            <p>Location: {this.state.user.location}</p>
            <Link className="btn" to={`/user/edit/${currentUser}`}>
              Edit User
            </Link>
          </div>
        </div>
        <hr className="profile-hr mt-5 mb-5" />
        <div className="row p-0 m-0 justify-content-center">
          <div className="col text-center">
            <h3 className="mb-4">Add Post</h3>
            <form onSubmit={this.handleNewPostSubmit}>
              <textarea
              className="mb-4"
                value={this.state.body}
                onChange={this.handleNewPostChange}
                name="body"
                cols="70"
                rows="5"
              ></textarea>
              <br />
              <input value="Post" type="submit" className="btn btn-primary" />
            </form>
          </div>
        </div>
        <hr className="profile-hr mt-5" />
        <div className="row p-0 m-0 justify-content-center">
          <div className="col-7 mt-5  text-center">
            <h3>Posts</h3>
            <ul className="p-0">{this.renderPosts()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
