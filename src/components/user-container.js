import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserComponent from './user-component';
import './user.scss'

console.log('MAYAA', UserComponent)

class User extends Component {
  state = {}

  onChangeHandler = () => {
    console.log('on change handler')
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT')
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label />
          <input type="text" onChange={this.onChangeHandler}/>
          <input type="submit"/>
        </form>
        <UserComponent />
      </div>
    )
  }
}

// const mapStateToProps = () => { }

// const mapDispatchToProps = () => { }

export default connect(null, null)(User);
