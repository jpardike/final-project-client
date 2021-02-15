import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import Feed from "./pages/feed/Feed";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import UserProfile from "./pages/userProfile/UserProfile";
import EditUser from "./pages/editUser/EditUser";
import ShowPost from "./pages/showPost/ShowPost";
import UpdatePost from "./pages/updatePost/UpdatePost";
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
      <div className="container-fluid p-0 m-0">
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
            path="/user/login"
            render={(props) => (
              <Login
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                changeUser={this.changeUser}
              />
            )}
          />
          <Route
            exact
            path="/user/:id"
            render={(props) => (
              <UserProfile {...props} currentUser={this.state.currentUser} />
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
            exact
            path="/user/edit/:id"
            render={(props) => (
              <EditUser {...props} currentUser={this.state.currentUser} />
            )}
          />
          <Route
            exact
            path="/post/:id"
            render={(props) => (
              <ShowPost {...props} currentUser={this.state.currentUser} />
            )}
          />
          <Route
            exact
            path="/post/update/:id"
            render={(props) => (
              <UpdatePost {...props} currentUser={this.state.currentUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
