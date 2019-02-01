import React, { Component } from "react";
import {Helmet} from "react-helmet";
import Slider from "react-slick";
import "./Esummit.css";


class Esummit extends Component {
    
	renderSpeaker = () => {
		return SPEAKERS.map(speaker => {
			return (
                
				<div class="speaker-box">
                    <Helmet>
                    <meta charSet="utf-8" />
                    <title>E-Summit 2018 | eCell MSIT</title>
                    <meta name="description" content="The Entrepreneurship Summit is the annual flagship event of eCell MSIT which includes conclave, competitions, internship and job fair. This year, we have come up with theme 'Upgrading to Upstand' which aims to highlight the importance of upgradation of resources and skills to sustain in this challenging world. Guest speakers are from vivid backgrounds that have got priceless knowledge to share through their experiences."></meta>
                </Helmet>
                    <div className="speaker-image-box">
                    <img src={require(`./pics/${speaker.image}`)} alt={speaker.name} />
                    </div>
                <div class="desc"><strong>{speaker.name}</strong><br />{speaker.about}</div>
                </div>
			);
		});
	};

	render() {
		var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
          };

		return (
			<section className="esummit-section">
				<h1 className="heading">E-SUMMIT</h1>	

              <div className="sliderBox">
                <Slider {...settings}>
                    <div>
                    <img src={require(`./pics/summit1.PNG`)} alt="" />
                    </div>
                    <div>
                    <img src={require(`./pics/summit22.PNG`)} alt="" />
                    </div>
                    <div>
                    <img src={require(`./pics/summit3.jpg`)} alt="" />
                    </div>
                </Slider>
                </div>


                <div class="esummit-group e-row">
                <div class="esummit-titlebox">
                    <div width="300" height="200"><strong>SPEAKER SESSIONS</strong><br /><br />Panel Talks, Workshops, Success Stories</div>
                </div>
                <div class="esummit-titlebox">
                    <div width="300" height="200"><strong>COMPETITIONS</strong><br /><br />Quizzes, B-Plan Pitching, Graffiti</div>
                </div>
                <div class="esummit-titlebox">
                    <div width="300" height="200"><strong>JOBS AND INTERNSHIPS</strong><br /><br />Summer Internships, Full-Time Jobs</div>
                </div>
                </div>


                <div class="sub-content e-row">
                    <p class="A"><strong>Event Details</strong><br /><br /><strong>Date:</strong>   Mar 10th, 2018 - Mar 11th, 2018<br /><br /><strong>Venue:</strong>   Auditorium, MSIT<br /><br /><strong>Time:</strong>   9:00 a.m. - 5:00 p.m.</p>
                    <p class="B"><strong>Description</strong><br /><br />The Entrepreneurship Summit is the annual flagship event of eCell MSIT which includes conclave, competitions, internship and job fair. This year, we have come up with theme <strong>'Upgrading to Upstand'</strong> which aims to highlight the importance of upgradation of resources and skills to sustain in this challenging world. Guest speakers are from vivid backgrounds that have got priceless knowledge to share through their experiences.</p>
                </div>


                <div class="diff">
                <h1 class="heading-2">SPEAKERS</h1>
                <div class="speakers-details-section e-row">
                {this.renderSpeaker()}
                </div>
                </div>

                <div className="esummit-sponsors">
                    <h1 className="heading">Sponsors</h1> 
                    <div className="esummit-sponsors--logoContainer">
                            <img src={require('./pics/91sb.png')} alt="91 springboard logo"/>
                            <img src={require('./pics/sbi.png')} alt="SBI logo"/>
                            <img src={require('./pics/yc.png')} alt="yc logo"/>
                    </div>
                </div>
    </section>
		);
	}
}


 const SPEAKERS = [
 	{
		name: 'Nitin (NEO) Sharma',
		about: 'Facilitator, Firewalk Coach',
		image: 'Nitin (NEO) Sharma.jpg'
	},
	{
		name: 'Ankit Prasad',
		about: 'Founder and CEO, Bobble Keyboard',
		image: 'Ankit Prasad.jpg'
	},
	{
		name: 'Farheen Ahmad',
		about: 'Co-founder and director, CRON systems',
		image: 'Farheen Ahmad.jpg'
	},
    {
		name: 'Himanshu Batra',
		about: 'Founder and CEO, Acadview',
		image: 'Himanshu Batra.jpg'
	},
    {
		name: 'Rahul Kaushik',
		about: 'Poet and Owner, Melting Words',
		image: 'Rahul Kaushik.jpg'
	},
    {
		name: 'Manjeet Singh',
		about: 'Co-founder, Buddy4Studdy',
		image: 'Manjeet Singh.jpg'
	},
    {
		name: 'Manish K Tyagi',
		about: 'TEDx Speaker and Corporate Trainer',
		image: 'Manish K Tyagi.jpg'
	}
];

export default Esummit;
