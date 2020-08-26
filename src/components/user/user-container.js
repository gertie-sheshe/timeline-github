import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserComponent from './user-component';
import Loader from '../loader/loader';
import HomePage from '../home-page/home-page';
import { fetchUser } from '../../redux/user/userActions';
import {
  selectSortedUser,
  selectError,
  selectHomePage,
  selectLoading,
  selectUser,
} from '../../redux/user/userSelectors';
import './user.scss';

class User extends Component {
  state = {
    user: '',
  };

  onChangeHandler = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { fetchUser } = this.props;
    const user = this.state.user;

    fetchUser(user);
  };

  render() {
    const { sortedUser, error, homePage, loading, user } = this.props;

    return (
      <div className="user-container">
        {!homePage && <h1>GitHub Timeline</h1>}
        {homePage && <HomePage />}
        <form onSubmit={this.onSubmit}>
          <label for="username">User:</label>
          <input
            id="username"
            className="input"
            type="text"
            name="user"
            onChange={this.onChangeHandler}
          />
          <br />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        {loading && <Loader />}
        {sortedUser && <UserComponent userRepos={sortedUser} />}
        {user && user.length === 0 && (
          <p className="error-warning">
            Sorry, this user has no public repositories
          </p>
        )}
        {error && <p className="error-warning">User not found</p>}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sortedUser: selectSortedUser,
  error: selectError,
  homePage: selectHomePage,
  loading: selectLoading,
  user: selectUser,
});

export default connect(mapStateToProps, {
  fetchUser,
})(User);
