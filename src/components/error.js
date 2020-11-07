import React from "react";
import { Redirect } from 'react-router-dom';

export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      window.history.push('/login')
    }, 10000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return (
      <div>
          authentication error, redirecting you to login...
          <Redirect to="/login"/>
      </div>
    )
  }
}