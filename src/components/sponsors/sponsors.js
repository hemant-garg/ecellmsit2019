import React, { Component } from "react";
import "./Sponsors.css";

class Sponsors extends Component {
	constructor(props) {
		super(props);
	}

	renderLOGO = images => {
		return images.map(image => {
			return (
				<div className="sponsors-logobox" key={image}>
					<img
						className="sponsors-logo"
						src={require(`./${image}.png`)}
					/>
				</div>
			);
		});
	};

	render() {
		const images = [
			"codechef",
			"boombox",
			"hellomeets",
			"partiko",
			"skillindia2",
			"nationalskill",
			"hackerearth",
			"educationtree",
			"estimote",
			"91springboard",
			"inc42"
		];

		return (
			<section className="sponsors-section">
				<h1 className="heading-2">Sponsors</h1>
				<div className="sponsors">{this.renderLOGO(images)}</div>
			</section>
		);
	}
}

export default Sponsors;
