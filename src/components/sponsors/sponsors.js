import React, { Component } from "react";
import "./Sponsors.css";

class Sponsors extends Component {
	renderLOGO = images => {
		return images.map((image,i) => {
			return (
				<div key={image} className="startup-image-box">
					<img
						className="sponsors-logo"
						src={require(`./images/${i+1}.png`)}
						alt={image}
					/>
				</div>
			);
		});
	};

	render() {
		const images = [
			"3 Dexter",
			"Banaao",
			"CodeAlien",
			"Eat my news",
			"vNative",
			"Amsyt Technologies Pvt. Ltd.",
			"Ancg",
			"Crest Capital Advisors",
			"Shopwati",
			"WedAbout",
			"Hungry Bulb",
			"India E Learn"
		];
		
		return (

			<section className="sponsors-section">
				<h1 className="heading"> Sponsors &<br />Collaboration</h1>
				
					<div className="startups-container">
					{this.renderLOGO(images)}
					</div>
				
			</section>
		);
	}
}

export default Sponsors;
