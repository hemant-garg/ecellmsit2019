import React, { Component } from "react";
import "./Home.css";
import Main from '../Main/Main'
import Initiatives from '../initiatives/initiatives';
import About from '../About/About';
import Events from '../Events/Events';




class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Main />
        <Initiatives />
        <About />
        <Events /> 
      </div>
    )
  }
}
export default Home;