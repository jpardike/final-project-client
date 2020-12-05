import React from 'react'
import UserModel from '../../models/user';

import './userProfile.css';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    const userId = this.props.currentUser;

    UserModel.getOne(userId)
      .then((data) => {
        console.log('data: ', data);

        this.setState({user: data.user})
      })

  }

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
      </div>
    )
  }
}

export default UserProfile;