import React from "react";

import "./newUser.css";

class NewUser extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="name">Name
          </label>
            <input type="text" />
          <label htmlFor="username">Username
          </label>
            <input type="text" />
          <label htmlFor="email">Email
          </label>
            <input type="email" />
          <label htmlFor="password">Password
          </label>
            <input type="password" />
          <label htmlFor="location">Location
          </label>
            <input type="text" />
          <input type="button" value="SIGNUP"/>
        </form>
      </div>
    );
  }
}

export default NewUser;