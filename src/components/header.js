import React from "react";
import "../css/header.css"

import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to='/' className="logo">🎶</Link>
        <div className="header-right">
          <Link to='/about'>about</Link>
          <Link to='/login'>login</Link>
        </div>
      </div>
    );
  }
}