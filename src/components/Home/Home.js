import React, { Component } from "react";
import "./Home.css";
import Main from "../Main/Main";
import Initiatives from "../initiatives/initiatives";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Sponsors from "../sponsors/sponsors";
import Blogs from "../Blogs/Blogs";

class Home extends Component {
  componentDidMount() {
    const Navs = document.getElementById("header-navs").childNodes;
    Navs.forEach(nav => nav.classList.remove("activeNav"));
    document.getElementById("home").classList.add("activeNav");    
    document.querySelectorAll(".LinkButton").forEach(button => {
      button.addEventListener("click", () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    });
  }

  render() {
    return (
      <div className="Home">
        <Main />
        <Initiatives />
        <About />
        <Gallery />
        <Sponsors />
        <Blogs />
      </div>
    );
  }
}
export default Home;
