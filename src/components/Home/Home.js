import React, { Component } from "react";
import {Helmet} from "react-helmet";
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
         <Helmet>
                    <meta charSet="utf-8" />
                    <title>eCell MSIT | Entrepreneurship Cell of MSIT | E-summit | Internship Fairs</title>
                    <meta name="description" content="The E-Cell of MSIT gives innovative geniuses an open platform to gain knowledge
					 about entrepreneurship, startups, ventures and the A-B-Cs of building businesses.
					 Our sole aim is to let the concept of entrepreneurship burgeon and evolve.
					 We believe that the desired support and guidance given at the right time can 
					 earn laurels."></meta>
           
                    <link rel="canonical" href="https://www.ecellmsit.in/" />
        </Helmet>
        <Main />
        <Initiatives />
        <About />
        <Gallery />
        <Blogs />
        <Sponsors />
      </div>
    );
  }
}
export default Home;
