import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import Feed from "./pages/feed/Feed";
import NewUser from "./pages/newUser/NewUser";
import UserProfile from "./pages/userProfile/UserProfile";
import About from "./pages/about/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: null,
    };
  }

  changeUser = (data) => {
    this.setState({ currentUser: data, isLoggedIn: true });
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/new"
            render={(props) => (
              <NewUser
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                changeUser={this.changeUser}
              />
            )}
          />
          <Route
            exact
            path="/user/feed/:id"
            render={(props) => (
              <Feed {...props} currentUser={this.state.currentUser} />
            )}
          />
          <Route
            path="/user/:id"
            render={(props) => (
              <UserProfile {...props} currentUser={this.state.currentUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
