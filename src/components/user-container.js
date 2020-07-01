import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserComponent from './user-component';
import { fetchUser } from '../redux/user/userActions';
import './user.scss'


class User extends Component {
  state = {
    user: ''
  }


  onChangeHandler = () => {
    console.log('on change handler')
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { fetchUser } = this.props

    fetchUser('gertie-sheshe');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label />
          <input type="text" onChange={this.onChangeHandler} />
          <input type="submit" />
        </form>
        <UserComponent />
      </div>
    )
  }
}

// const mapStateToProps = () => { }

export default connect(null, {
  fetchUser
})(User);
