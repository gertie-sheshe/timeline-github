import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserComponent from './user-component';
import { fetchUser } from '../../redux/user/userActions';
import {selectSortedUser, selectError} from '../../redux/user/userSelectors';
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
    const { sortedUser, error } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label />
          <input type="text" name="user" onChange={this.onChangeHandler} />
          <input type="submit" />
        </form>
        {sortedUser && <UserComponent userRepos={sortedUser} />}
        {error && <p>User not found</p>}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sortedUser: selectSortedUser,
  error: selectError
});

export default connect(mapStateToProps, {
  fetchUser
})(User);
