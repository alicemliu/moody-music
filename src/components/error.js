import React from "react";
import { Redirect, Link } from 'react-router-dom';

export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 1500)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return (
      <div className='content'>
        { this.state.redirect
          ? 
          <div>
            <Redirect to="/login"/>
          </div>
          : 
          <div>
            <div className="subtitle">Authentication timed out!<br/>Redirecting you to login...</div>
            <Link to='/'>
              <button className="round_btn">Return to Homepage</button>
            </Link>
          </div>
        }
      </div>
    )
  }
}