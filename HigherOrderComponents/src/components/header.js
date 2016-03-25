import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    // authenticated comes from reducers/index
    if (this.props.authenticated) {
      // authenticate comes from actions/index
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
    }
    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

// This piece of state comes from combined reducer call in index
// This object shows up as props inside header
function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
