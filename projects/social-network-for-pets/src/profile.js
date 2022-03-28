import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './userlist';

export class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    this.loadUserData();
  }

  loadUserData() {
    this.setState({
      userData: null,
    });
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({
        userData: userData
      });
    });
  }

  render() {
    let isLoading = this.state.userData === null;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    let name = isLoading ? 'Loading...' : this.state.userData.name;
    let bio = isLoading ? '...' : this.state.userData.bio;
    let friends = isLoading ? [] : this.state.userData.friends;

    return (
      <div className={className}>
        {!isLoading && (
          <div className="profile-picture">
            <img src={this.state.userData.profilePictureUrl} alt={this.state.userData.name} />
          </div>
        )
        }
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }
}