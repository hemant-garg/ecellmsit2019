import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.png";

class Header extends Component {
	changeActiveClass = target => {
		const allNavs = target.parentNode.parentNode.childNodes;
		allNavs.forEach(nav => nav.classList.remove("activeNav"));
		target.parentNode.classList.add("activeNav");
	};

	showJoinUsMessage() {
		document.getElementById("joinUsMessage").classList.add("show");
		setTimeout(() => {
			document.getElementById("joinUsMessage").classList.remove("show");
		}, 4100);
	}

	render() {
		return (
			<div className="header">
				<div id="joinUsMessage" className="showJoinMessage">
					Sorry, Registrations has been Closed... Subscribe to get
					upcoming updates
				</div>
				<Link to="/" className="LinkButton">
					<img className="header_logo" src={Logo} alt="" />
				</Link>
				<i class="fas fa-bars fa-3x nav_icon" />
				<ul className="header_nav" id="header-navs">
					<li
						onClick={e => this.changeActiveClass(e.target)}
						id="home"
						className="header_nav--item"
					>
						<Link className=" LinkButton header_nav--link" to="/">
							Home
						</Link>
					</li>
					<li
						onClick={e => this.changeActiveClass(e.target)}
						id="gallery"
						className="header_nav--item"
					>
						<Link
							className=" LinkButton header_nav--link"
							to="/gallery"
						>
							Gallery
						</Link>
					</li>
					<li
						onClick={e => this.changeActiveClass(e.target)}
						className="header_nav--item"
					>
						<Link
							className=" LinkButton header_nav--link"
							to="/blogs"
						>
							Blogs
						</Link>
					</li>
					<li
						onClick={e => this.changeActiveClass(e.target)}
						className="header_nav--item"
					>
						<a href="/#about-section" className="header_nav--link">
							About
						</a>
					</li>

					<li
						onClick={this.showJoinUsMessage}
						className="header_nav--item"
					>
						<button className="LinkButton button-light">
							Join Us
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
