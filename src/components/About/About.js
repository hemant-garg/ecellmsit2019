import React from "react";
import "./About.css";
import AboutSVG from "./about-svg";

const About = () => {
	return (
		<section id="about-section" className="about-section">
			<div className="heading-2">about us</div>
			<div className="about">
				<div className="about--text">
					<div className="about--text-heading">
						Entrepreneurship Cell Of MSIT
					</div>
					<div className="about--text-moto">
						Ideate &#x25cf; Inspire &#x25cf; Invest
					</div>
					<div className="para">
					<p><strong>You have IDEAS and we give them the WINGS</strong></p>
					<p>
					The <strong>E-Cell of MSIT</strong> gives innovative geniuses an open platform to gain knowledge
					 about entrepreneurship, startups, ventures and the A-B-Cs of building businesses.
					 Our sole aim is to let the concept of entrepreneurship burgeon and evolve.
					 We believe that the desired support and guidance given at the right time can 
					 earn laurels. E-Cell MSIT has always motivated students to come up with innovative 
					 ideas and groomed them to the right note making them the desired and suitable 
					 for the industry and <strong>Ideal Entrepreneur</strong>.
					 </p>
					 <p>
					 <strong>Founded in 2014, E-Cell MSIT</strong> works to ignite the spark of risk-taking,
					  responsibility and the creative execution of ideas. Since then under the
					   immense guidance of our mentors and seniors we have learnt and evolved 
					   to a large extent. Our team's hardwork has earned us immense appreciation 
					   and wide acceptance. In <strong>February 2017, CNBC India listed us among top 120 eCells in India.</strong>
					 </p>
					</div>
					<ul className="about--sociallist">
						<li>
							<a
								className="about--sociallist-link"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.facebook.com/ecellmsit/"
							>
								<i className="fab fa-facebook-f fa-2x footer--icon" />
							</a>
						</li>
						<li>
							<a
								className="about--sociallist-link"
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.linkedin.com/company/ecellmsit/?originalSubdomain=in"
							>
								<i className="fab fa-linkedin-in fa-2x footer--icon" />
							</a>
						</li>
						<li>
							<a
								className="about--sociallist-link"
								target="_blank"
								rel="noopener noreferrer"
								href="https://twitter.com/ecellmsit"
							>
								<i className="fab fa-twitter fa-2x footer--icon" />
							</a>
						</li>
					</ul>
				</div>
				<div className="about--svg">
					<AboutSVG />
				</div>
			</div>
		</section>
	);
};
export default About;
