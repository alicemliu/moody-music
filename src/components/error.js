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
      <div>
        
        { this.state.redirect
          ? 
          <div>
            <Redirect to="/login"/>
          </div>
          : 
          <div class='content'>
            <br/>
            <span class="subtitle">Authentication timed out!<br/>Redirecting you to login...</span>
            <br/>
            <Link to='/'>
              <button class="round_btn">Return to Homepage</button>
            </Link>
          </div>
        }
          
      </div>
    )
  }
}