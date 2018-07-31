import React, { Component } from "react";
import "./Home.css";
import Main from '../Main/Main'
import Initiatives from '../initiatives/initiatives';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';




class Home extends Component {
 componentDidMount(){
    const Navs = document.getElementById('header-navs').childNodes;
    Navs.forEach(nav => nav.classList.remove('activeNav'));

    document.querySelectorAll('.LinkButton').forEach( button => {
      button.addEventListener('click', () => {
        window.scroll({
          top: 0, 
          left: 0
        });
    })
    })
 }
 
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