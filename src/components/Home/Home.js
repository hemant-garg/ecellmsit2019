import React, { Component } from "react";
import "./Home.css";

import Main from '../Main/Main'
import Initiatives from '../initiatives/initiatives';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Main />
        <Initiatives />
      </div>
    )
  }
}
export default Home;