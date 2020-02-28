import React, { Component } from "react";
import {Helmet} from "react-helmet";
import Slider from "react-slick";
import "./FacultyConvention.css";


class FacultyConvention extends Component {

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
				<h1 className="heading">Faculty Convention 2019 <br/> E-Cell MSIT</h1>	

              <div className="sliderBox">
                <Slider {...settings}>
                    <div>
                    <img src={require(`./pics/flex2.jpg`)} style={{height: 500,}} alt="" />
                    </div>
                </Slider>
                </div>


                <div class="esummit-group e-row">
                <div class="esummit-titlebox">
                    <div width="300" height="200"><strong>SPEAKER SESSIONS</strong><br /><br />Mr. Shivam Ahuja (CEO, SkillCircle)<br/>
Mr. Saurabh (CEO, Baudhik Ventures)<br/>
Mr. Yuvraj K. Sharma (Co-Founder, Kompanions)</div>
                </div>
                <div class="esummit-titlebox">
                    <div width="300" height="200"><strong>COMPETITIONS</strong><br /><br />Quizzes, Startup Idea Pitching, Logo Design</div>
                </div>
                <div class="esummit-titlebox">
                    <div width="300" height="200"><strong>Sponsors</strong><br /><br /><img src={'/iste.png'}/></div>
                </div>
                </div>


                <div class="sub-content e-row">
                    <p class="A"><strong>Event Details</strong><br /><br /><strong>Date:</strong>   Oct 30th, 2019 - Oct 31st, 2019<br /><br /><strong>Time:</strong> <br/>  10:00 a.m. - 3:30 p.m. on 30th Oct 2019 <br/> 10:00 a.m. - 2:30 p.m. on 31st Oct 2019</p>
                    <p class="B"><strong>About Convention</strong><br /><br />
                    Let’s face it, this is the age when startups are exploding everywhere like
never before. The motivated entrepreneurs are leaving no opportunity go
by to prove their worth in this thriving culture of innovation and technology. While challenging the pedigree of overarching domination of established businesses many of these startups are able to make a significant
presence in the world arena, others unfortunately, disappear into oblivion.
It is always important for them to execute their business idea in a way that
brings value and merit to their existence.
Why do startups fail in the first place? It is mainly because of the high risk
propositions being associated with startups where strategy adoption and
execution failures act as triggers. 
They fail because they didn't put others first. Other reasons include business model failure, poor managment team and product problems. Faculty
Convention is the program to provide these ideas with a platform to solve
the challenges faced during implementation and nurture them
                    </p>
                </div>


                <div class="diff">
                <h1 class="heading-2">About ISTE</h1>
                <div class="speakers-details-section e-row">
                    <p className="isteP">
                    The <strong>International Society for Technology in Education (ISTE)</strong> is a nonprofit organization that serves educators interested in the use of technology in education. It was found in 1941 by (APTI) and later transformed
in 1968 as ISTE. ISTE provides the teacher with professional development
and resources on educational technology topics, including digital citizenship, STEM, computational thinking, artificial intelligence, and global
collaboration. The organization offers professional learning for a wide variety of educator roles, including ed tech coaches, library media specialists,
classroom educators and specialists. Being the only national body of educators in engineering and technology, it contributes and associates with
the government in the technical field.
                    </p>
                </div>
                </div>

                <div className="esummit-sponsors">
                    <h1 className="heading">Convention Iternary</h1> <br />
                    <div className="day1">
                        <font size="10"><strong>Day 1</strong></font><br />
                        <ul style={{float: 'left', textAlign: 'left', listStyleType: 'none'}}>
                            <li style={{fontSize: '20px'}}>10:00 - 10:30 Inauguration Ceremony</li>
                            <li style={{fontSize: '20px'}}>10:30 - 11:30 Inaugural Speech</li>
                            <li style={{fontSize: '20px'}}>11:30 - 12:00 Tea break</li>
                            <li style={{fontSize: '20px'}}>12:00 - 01:00 Speaker Session 1</li>
                            <li style={{fontSize: '20px'}}>01:00 - 01:30 Lunch</li>
                            <li style={{fontSize: '20px'}}>01:30 - 02:30 Speaker Session 2</li>
                            <li style={{fontSize: '20px'}}>02:30 - 03:30 Speaker Session 3</li>
                        </ul>
                    </div>
                    <div className="day2">
                        <font size="15"><strong>Day 2</strong></font><br />
                        <ul style={{float: 'left', textAlign: 'left', listStyleType: 'none'}}>
                            <li style={{fontSize: '20px'}}>09:00 - 10:00 Logo Design Competition</li>
                            <li style={{fontSize: '20px'}}>10:00 - 10:30 Tea break</li>
                            <li style={{fontSize: '20px'}}>10:30 - 12:00 Startup Idea pitching</li>
                            <li style={{fontSize: '20px'}}>12:00 - 01:00 Quiz</li>
                            <li style={{fontSize: '20px'}}>01:00 - 01:30 Lunch</li>
                            <li style={{fontSize: '20px'}}>01:30 - 02:30 Valedictory</li>
                        </ul>
                    </div>
                 </div>

                 <div class="diff">
                <h1 class="heading-2">Rules of Competitions</h1>
                <div class="speakers-details-section e-row">
                        <div class="day1">
                        <p class="isteP">
                        For <strong>Quiz:</strong><br/><br/>
                        1. The quiz will consist of questions from topics like new startups,
economic theory, marketing and other miscellaneous business
current events.<br />
2. There will be 30 questions in total in this quiz. <br />
3. The 30 questions will be divided into 3 rounds: Prelim, Second and
Final round.<br />
4. The prelim round will consist of 15 questions.<br />
5. The second round will consist of 10 questions.<br />
6. The final round will have the rest 5 questions.<br />
7. Questions will be arranged according to increasing difficulty in
each proceeding round.<br />
8. The competition will follow an elimination format in which some
teams will be eliminated in each round on the basis of their score.<br/>
9. Each correct answer will be rewarded with 1 points while
incorrect and not answered question will not be awarded any
points.

                    </p>
                    </div><div class="day2">
                        <p class="isteP">
                        For <strong>Pitch Presentation:</strong><br/><br/>
                    1. The team must have a proper understanding of the idea and
will present it verbally.<br/>
2. Each team will have max of 5 minutes to present their ideas.<br/>
3. Judges will evaluate the ideas and it’s merit in accordance
with their specific metrics.<br />
</p>
                        </div>
                </div>
                </div>
    </section>
		);
	}
}

export default FacultyConvention;
