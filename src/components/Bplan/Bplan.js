import React, { Component } from "react";
import {Helmet} from "react-helmet";
import "./Bplan.css";


class Bplan extends Component {
	renderBplan = () => {
		return BPLANS.map(bplan => {
			return (
				
				<div class="bplanBox">
				 <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bplan Competitions 2018 | eCell MSIT</title>
					<meta name="description" content="All the entrepreneurs who have a business idea need money to make their idea into reality. That is exactly what this competition is all about! Getting the investors to invest in your idea! "></meta>
                </Helmet>
					<div className="bplan-img-box">
					<a href={`#${bplan.title}`}><img className="bplan-img" src={require(`./pics/${bplan.image}`)} alt="Quiz" width="300" height="200"/>
			  </a></div>
				<div class="desc"><strong>{bplan.title}</strong><br />{bplan.about}</div>
			  </div>
			);
		});
	};

	renderBplanDetails = () => {
		return BPLANS.map(bplan => {
			return (
				<div class="sub-content b-row" id={bplan.title}>
						<p class="A"><strong>Event Details</strong><br /><br /><strong>Time:</strong>  11:00am - 1:00pm<br /><br /><strong>Venue:</strong>   Seminar Hall 06, MSIT<br /><br /><strong>Date:</strong>   11 March, 2018</p>
						<p class="B"><strong>{bplan.title}</strong><br /><br />{bplan.description}</p>
				</div>
			);
		});
	}

	render() {
		
		return (
			<section className="bplan-section">
				<h1 className="heading">Competitions</h1>	

				<div class="bplan-group b-row">
					{this.renderBplan()}
				</div>	

				<div >
				 	{this.renderBplanDetails()}
				</div>		
			</section>
		);
	}
}


const BPLANS = [
	{
		title: 'BizQuiz',
		about: 'A number of questions regarding businesses and start-ups.',
		description: 'Just as the name suggests in Business Quiz the participants will be asked a number of questions regarding businesses and start-ups. The quiz will really explore the knowledge of the participants about industries, companies, and products.The teams will be asked a variety of questions from all fields of business including the legal formalities investment so on and so forth. The team that answers the maximum number of questions in the minimum time will be declared winner. The maximum team limit for the quiz is two people.',
		image: 'quiz.jpg'
	},
	{
		title: 'B-Plan Pitching',
		about: 'All the entrepreneurs who have a business idea need money to make their idea into reality. That is exactly what this competition is all about! ',
		description: 'All the entrepreneurs who have a business idea need money to make their idea into reality. That is exactly what this competition is all about! Getting the investors to invest in your idea! Participants can come in teams (max limit- 4 people). Teams can bring a presentation if they require. Limit for each team will be a total of 4 minutes on stage and 1 minute off stage. The team which is able to impress our judges the most will be the winners.',
		image: 'Pitch.jpg'
	},
	{
		title: 'Ad Venture',
		about: 'Advertisements are a very effective tool.',
		description: 'Advertisements are a very effective tools for companies to market their products in today’s ever increasing competitive markets. And that’s exactly what this competition is all about, making an ad for your product. The teams can have maximum 5 members and they will be given a product on the spot. The teams will be given ample time to prepare. The ads should be attractive, there should be punchline, it should explain everything about the products, and all other details like price, offers etc. Participants will have to enact their ads on the stage and will be judged accordingly. Maximum time limit will be 5 minutes per team.',
		image: 'admaking.png'
	}
];

export default Bplan;
