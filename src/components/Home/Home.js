import React, { Component } from "react";
import "./Home.css";

import Main from '../Main/Main'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>HOME</h1>
        <Main />
      </div>
    )
  }
}

export default Home;