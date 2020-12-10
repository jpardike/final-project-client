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
      <div className="row p-0 m-0 justify-content-center align-items-center text-center edit-user-form-container">
        <form className="p-4" onSubmit={this.handleUpdateUserFormSubmit}>
          <h2 className="mb-5">Edit User</h2>
          <div className="row p-0 m-0 justify-content-center">
            <div className="col">
              <label className="mb-4" htmlFor="name">Name</label>
            </div>
            <div className="col">
              <input className="mb-4"
                onChange={this.handleUpdateUserInputChange}
                value={this.state.name}
                type="text"
                name="name"
              />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <div className="col">
              <label className="mb-4" htmlFor="username">Username</label>
            </div>
            <div className="col">
              <input className="mb-4"
                onChange={this.handleUpdateUserInputChange}
                value={this.state.username}
                type="text"
                name="username"
              />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <div className="col">
              <label className="mb-4" htmlFor="email">Email</label>
            </div>
            <div className="col">
              <input className="mb-4"
                onChange={this.handleUpdateUserInputChange}
                value={this.state.email}
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <div className="col">
              <label className="mb-5" htmlFor="location">Location</label>
            </div>
            <div className="col">
              <input className="mb-5"
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
        <div ref={this.updateMessageRef} className="row p-0 m-0 justify-content-center updateUserMessage">
          <div className="col">
            <p>Update Successful!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
