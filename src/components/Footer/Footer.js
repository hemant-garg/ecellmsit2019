import React from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<section className="footer-section">
			<div className="footer">
				<div className="footer-1">
					<div className="footer-1-logo">
						<img src={Logo} alt="ecell msit logo" />
					</div>
					<div className="footer-1--website">
						Enterpreneurship Cell of MSIT
					</div>
					<div className="copyright">
						Copyright &copy; 2019 eCell MSIT. <br />All Rights
						Reserved.
					</div>
				</div>
				<div className="footer-2">
					<h2 className="footer--heading">Contact</h2>
					<ul className="footer--list">
						<li className="footer--listitem">
							<a
								href="mailto:hmtcool4u@gmail.com?Subject=Message%20from%20eCell%20Website"
								className="footer--link"
							>
								<i className="far fa-envelope footer--icon" />
								ecellmsit@gmail.com
							</a>
						</li>
						{/* <li className="footer--listitem">
							<a className="footer--link">
								<i className="fas fa-phone footer--icon" />+91
								phone
							</a>
						</li> */}
						<li className="footer--listitem">
							<a
								href="https://goo.gl/maps/2U76WTTwxy52"
								target="_blank"
								rel="noopener noreferrer"
								className="footer--link"
							>
								<i className="fas fa-map-marker-alt footer--icon" />Janakpuri,
								New Delhi
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-3">
					<h2 className="footer--heading">FOLLOW US</h2>
					<ul className="footer--list">
						<li className="footer--listitem">
							<a
								href="https://www.facebook.com/ecellmsit/"
								target="_blank"
								rel="noopener noreferrer"
								className="footer--link"
							>
								<i className="fab fa-facebook-f footer--icon" />Facebook
							</a>
						</li>
						<li className="footer--listitem">
							<a
								href="https://www.linkedin.com/company/ecellmsit/?originalSubdomain=in"
								target="_blank"
								rel="noopener noreferrer"
								className="footer--link"
							>
								<i className="fab fa-linkedin-in footer--icon" />Linkedin
							</a>
						</li>
						<li className="footer--listitem">
							<a
								href="https://twitter.com/ecellmsit"
								target="_blank"
								rel="noopener noreferrer"
								className="footer--link"
							>
								<i className="fab fa-twitter footer--icon" />Twitter
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-4">
					<h2 className="footer--heading">NAVIGATION</h2>
					<ul className="footer--list footer--list-nav">
						<li className="footer--listitem">
							<Link to="/" className="footer--link LinkButton">
								&#9656; Home
							</Link>
						</li>
						<li className="footer--listitem">
							<a
								href="/#initiatives-section"
								className="footer--link LinkButton"
							>
								&#9656; Initiatives
							</a>
						</li>
						<li className="footer--listitem">
							<Link
								to="/blogs"
								className="footer--link LinkButton"
							>
								&#9656; Blogs
							</Link>
						</li>
						<li className="footer--listitem">
							<a
								href="/#about-section"
								className="footer--link LinkButton"
							>
								&#9656; About
							</a>
						</li>
						<li className="footer--listitem">
							<Link
								to="/gallery"
								className="footer--link LinkButton"
							>
								&#9656; Gallery
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-dev">
				Made with <i className="fas fa-coffee" /> by{" "}
				<a
					href="https://hemant-garg.github.io/"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-dev-link"
				>
					HEMANT GARG
				</a>
			</div>
		</section>
	);
};

export default Footer;
