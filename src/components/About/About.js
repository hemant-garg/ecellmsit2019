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
					The eCell of MSIT gives innovative geniuses an open platform to gain knowledge about entrepreneurship, startups, ventures and the A-B-Cs of building businesses. Our sole aim is to let the concept of entrepreneurship burgeon and evolve. Founded in 2014, eCell MSIT works to ignite the spark of risk-taking, responsibility and the creative execution of ideas. In February 2017, CNBC India listed us among top 120 eCells in India.
					</div><div className="para">
					The eCell of MSIT gives innovative geniuses an open platform to gain knowledge about entrepreneurship, startups, ventures and the A-B-Cs of building businesses.
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
