import React from "react";
import "../css/header.css"

import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <Link to='/' class="logo">🎶</Link>
        <div class="header-right">
          <Link to='/about'>about</Link>
          <Link to='/login'>login</Link>
        </div>
      </div>
    );
  }
}