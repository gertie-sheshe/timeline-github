import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserComponent from './user-component';
import { fetchUser } from '../../redux/user/userActions';
import './user.scss'


class User extends Component {
  state = {
    user: ''
  }


  onChangeHandler = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { fetchUser } = this.props;
    const user = this.state.user;

    fetchUser(user);
  }

  render() {
    const { user: { userData, error }} = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label />
          <input type="text" name="user" onChange={this.onChangeHandler} />
          <input type="submit" />
        </form>
        {userData && <UserComponent userRepos={userData} />}
        {error && <p>User not found</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {
  fetchUser
})(User);
