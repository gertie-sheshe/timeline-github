import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserComponent from './user-component';
import HomePage from '../home-page/home-page';
import { fetchUser } from '../../redux/user/userActions';
import {selectSortedUser, selectError, selectHomePage} from '../../redux/user/userSelectors';
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
    const { sortedUser, error, homePage } = this.props;

    return (
      <div className="user-container">
        {!homePage && <h1>GitHub Timeline</h1>}
        {homePage && <HomePage/>}
        <form onSubmit={this.onSubmit}>
          <label />
          <input className="input" type="text" name="user" onChange={this.onChangeHandler} /><br/>
          <input className="button" type="submit" />
        </form>
        {sortedUser && <UserComponent userRepos={sortedUser} />}
        {error && <p>User not found</p>}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sortedUser: selectSortedUser,
  error: selectError,
  homePage: selectHomePage
});

export default connect(mapStateToProps, {
  fetchUser
})(User);
