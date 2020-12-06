import React from "react";
import UserModel from "../../models/user";
import PostModel from "../../models/post";

import "./userProfile.css";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      body: "",
    };
  }

  componentDidMount() {
    const userId = this.props.currentUser;

    UserModel.getOne(userId).then((data) => {
      console.log("data: ", data);

      this.setState({ user: data.user });
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
      }
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h3>{this.state.user.name}</h3>
            <p>{this.state.user.username}</p>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.location}</p>
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
      </div>
    );
  }
}

export default UserProfile;
