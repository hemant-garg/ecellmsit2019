import React, { Component } from "react";
import "./Home.css";
import Main from '../Main/Main'
import Initiatives from '../initiatives/initiatives';
import About from '../About/About';
import Events from '../Events/Events';
import Gallery from '../Gallery/Gallery';




class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Main />
        <Initiatives />
        <About />
        <Gallery /> 
      </div>
    )
  }
}
export default Home;