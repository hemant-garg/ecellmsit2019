import React from "react";
import { Link } from "react-router-dom";
import SVG1 from "./svg1";
import SVG2 from "./svg2";
import SVG3 from "./svg3";

import "./initiatives.css";

const Initiatives = () => {
  return (
    <section id="initiatives-section" className="initiatives-section">
      <div className="heading">What We Do</div>
      <div className="initiatives">
        <div className="initiatives-div">
          <Link className="LinkButton" to="/bplan">
            <SVG1 />
          </Link>
          <h2 className="initiatives-title">B-plan Competitions</h2>
        </div>
        <div className="initiatives-div">
          <Link className="LinkButton" to="/internshipfair">
            <SVG2 />
          </Link>
          <h2 className="initiatives-title">Internship Fair</h2>
        </div>
        <div className="initiatives-div">
          <a href="https://esummit.ecellmsit.in/">
            <SVG3 />
          </a>
          <a
            href="https://esummit.ecellmsit.in/"
            style={{ textDecoration: "none" }}
          >
            <h2 className="initiatives-title">E-Summit 2019</h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
