import React from "react";
import UserModel from "../../models/user";


import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleLoginInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLoginFormSubmit = (event) => {
    event.preventDefault();
    UserModel.login(this.state.email).then((data) => {
      console.log(data);
      this.props.changeUser(data.user._id);
      this.props.history.push(`/user/feed/${data.user._id}`);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginFormSubmit}>
          <div className="row justify-content-center">
            <div className="col text-center">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleLoginInputChange}
                value={this.state.email}
                type="email"
                name="email"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
              />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <input value="Login" type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
