import React, { Component } from "react";
import Slider from "react-slick";
import "./InternshipFair.css";


class InternshipFair extends Component {
	renderStartupsLogos = () => {
		return STARTUPS.map(startup => {
			return (
                <div className="startup-image-box">
                    <img src={require(`./images/${startup}`)} alt="" />
                </div>
			);
		});
	};

	render() {
		return (
			<section className="InternshipFair-section">
				<h1 className="heading">Internship Fair</h1>	

                <div class="sub-content e-row">
                    <p class="A"><strong>Event Details</strong><br /><br /><strong>Date:</strong> Mar 11th, 2018<br /><br /><strong>Venue:</strong>   Classrooms, MSIT<br /><br /><strong>Time:</strong>   11:00 a.m. - 3:30 p.m.</p>
                    <p class="B"><strong>Description</strong><br /><br />The objective of <b>Internship & Job Fair</b> is to bring students and professionals to a common platform to exchange their resources and skills to help each other. Through internships, a student experiences the feel of working in a corporate and a professional gets to work with young minds having originality in innovations.</p>
                </div>

                <br /><br />
                <h1 className="heading" text-align="center">Last Year<br />Startups</h1>
                <div className="startups-container"> 
                     {this.renderStartupsLogos()}
                </div>

    </section>
		);
	}
}


const STARTUPS = [
     't2.png', 'logo4.png', 'logo5.png', 'logo2.png', 'logo3.png', 'logo6.png', 'logo7.png',
     'logo8.png', 'logo9.png','logo10.png','logo1.png', 't1.png', 't3.png', 't4.png', 't5.png',
     't6.png', 't7.png', 't8.png', 't9.png', 't10.png'
];

export default InternshipFair;
