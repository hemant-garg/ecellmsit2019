import React, { Component } from "react";
import {Helmet} from "react-helmet";
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Internship Fair 2018 | eCell MSIT</title>
                    <meta name="description" content="The Internship Drive organised by eCell MSIT. We believe that an internship assists career development by providing real work experiences and opportunities that help students explore their interests. It also helps them develop/refine professional skills and competencies. 
This drive will help the students connect to the corporate world and chase their dreams."></meta>
                </Helmet>
				<h1 className="heading">Internship Fair</h1>	

                <div class="sub-content e-row">
                    <p class="A"><strong>Event Details</strong><br /><br /><strong>Date:</strong> Mar 11th, 2018<br /><br /><strong>Venue:</strong>   Classrooms, MSIT<br /><br /><strong>Time:</strong>   11:00 a.m. - 3:30 p.m.</p>
                    <div class="B">
                    <p><strong>Description</strong></p>
                    <p><b>"The expert in anything was once a beginner!"</b></p>
                    <p>- Wanna work with qualified professionals and gain the experience of working in an MNC?<br />
                    - Wanna make your resume stand out?<br />
                    - Wanna earn a good salary?<br />
                    </p>
                    <p>
                    The <strong>"Internship Drive"</strong> organised by eCell MSIT is what you are looking for!
We believe that an internship assists career development by providing real work experiences and opportunities that help students explore their interests. It also helps them develop/refine professional skills and competencies. 
This drive will help the students connect to the corporate world and chase their dreams.
                    </p>
                    </div>
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
