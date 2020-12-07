import React from "react";
import UserModel from "../../models/user";

import "./editUser.css";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      location: "",
    };
    this.updateMessageRef = React.createRef();
  }

  componentDidMount() {
    const userId = this.props.currentUser;
    const updateMessage = this.updateMessageRef.current;
    updateMessage.classList.add("hidden");
    UserModel.getOne(userId).then((data) => {
      this.setState({
        name: data.user.name,
        username: data.user.username,
        email: data.user.email,
        location: data.user.location,
      });
    });
  }

  handleUpdateUserInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUpdateUserFormSubmit = (event) => {
    const userId = this.props.currentUser;
    const updateMessage = this.updateMessageRef.current;
    event.preventDefault();
    UserModel.update(userId, this.state).then((data) => {
      updateMessage.classList.remove("hidden");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleUpdateUserFormSubmit}>
          <div className="row p-0 m-0 justify-content-center">
            <div className="col text-center">
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleUpdateUserInputChange}
                value={this.state.name}
                type="text"
                name="name"
              />
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleUpdateUserInputChange}
                value={this.state.username}
                type="text"
                name="username"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleUpdateUserInputChange}
                value={this.state.email}
                type="email"
                name="email"
              />
              <label htmlFor="location">Location</label>
              <input
                onChange={this.handleUpdateUserInputChange}
                value={this.state.location}
                type="text"
                name="location"
              />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <input value="Update" type="submit" className="btn btn-primary" />
          </div>
        </form>
        <div ref={this.updateMessageRef} className="row updateUserMessage">
          <div className="col">
            <p>Update Successful!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
