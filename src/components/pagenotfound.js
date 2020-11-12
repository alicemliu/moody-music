import React from "react";
import { Link } from 'react-router-dom';

export default class PageNotFound extends React.Component {

  render() {
    return (
      <div className='content'>
        <br/>
        <div className="subtitle">Oops! This page doesn't exist.</div>
        <Link to='/'>
          <button className="round_btn">Return to Homepage</button>
        </Link>
      </div>
    )
  }
}