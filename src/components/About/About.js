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
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Saepe obcaecati rem ea, temporibus asperiores
						molestias magni, est magnam omnis quaerat commodi
						accusantium ut, fugit quibusdam velit quae doloribus
						numquam animi? Lorem ipsum dolor sit amet, <br />
						consectetur adipisicing elit. Deserunt quae iusto illo
						odit pariatur. Eligendi numquam velit nam maiores
						possimus veritatis, earum illo cumque ea expedita
						excepturi aut dolores in. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Ratione hic praesentium
						similique consequatur, illum vel quia obcaecati
						blanditiis excepturi ut nesciunt velit consequuntur
						perferendis veniam quibusdam tempore, aut incidunt
						temporibus?
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
