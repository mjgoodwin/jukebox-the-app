import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Go Home</button>
        </Link>
        <br />
        About
      </div>
    );
  }
}
