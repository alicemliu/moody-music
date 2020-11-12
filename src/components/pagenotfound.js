import React from "react";
import { Redirect, Link } from 'react-router-dom';

export default class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='content'>
        <br/>
        <span class="subtitle">Oops! This page doesn't exist.<br/></span>
        <Link to='/'>
          <button class="round_btn">Return to Homepage</button>
        </Link>
      </div>
    )
  }
}