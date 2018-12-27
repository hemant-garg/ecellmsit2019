import React, { Component } from "react";
import Slider from "react-slick";
import "./Sponsors.css";

class Sponsors extends Component {
	renderLOGO = images => {
		return images.map(image => {
			return (
				<div key={image}>
					<img
						className="sponsors-logo"
						src={require(`./images/${image}.png`)}
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
			"India E Learn",
			"ReligiousKart",
			"Saizen  Global",
			"YoungDesk"
		];
		const settings = {
			dots: true,
			speed: 500,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 2,
			autoplay: true,
  			autoplaySpeed: 2000,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				}
			  ]
		  };
	  

		return (

			<section className="sponsors-section">
				<h1 className="heading-2">Sponsors</h1>
				<Slider {...settings}>
					{this.renderLOGO(images)}
				</Slider>
				
			</section>
		);
	}
}

export default Sponsors;
