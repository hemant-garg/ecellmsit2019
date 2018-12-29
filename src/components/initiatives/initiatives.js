import React from "react";
import {Link} from 'react-router-dom';
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
					<Link className="LinkButton" to="/bplan" >
					<SVG1 />
					</Link>
					<h2 className="initiatives-title">B-plan Competitions</h2>
				</div>
				<div className="initiatives-div">
					<SVG2 />
					<h2 className="initiatives-title">Internship Fair</h2>
				</div>
				<div className="initiatives-div">
				<Link className="LinkButton" to="/esummit" >
					<SVG3 />
					</Link>
					<h2 className="initiatives-title">E-Summit</h2>
				</div>
			</div>
		</section>
	);
};

export default Initiatives;
