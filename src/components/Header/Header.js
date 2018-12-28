import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.png";

class Header extends Component {

	changeActiveClass = target => {
		this.toggleNavForMobile();
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

	renderList = cls => {
		return (
			<ul className={cls} id="header-navs">
				<li
					onClick={e => this.changeActiveClass(e.target)}
					id="home"
					className={`${cls}--item`}
				>
					<Link
						aria-label="Home"
						className={`LinkButton ${cls}--link`}
						to="/"
					>
						Home
					</Link>
				</li>
				<li
					onClick={e => this.changeActiveClass(e.target)}
					id="gallery"
					className={`${cls}--item`}
				>
					<Link
						aria-label="Gallery"
						className={`LinkButton ${cls}--link`}
						to="/gallery"
					>
						Gallery
					</Link>
				</li>
				<li
					onClick={e => this.changeActiveClass(e.target)}
					id="blogs"
					className={`${cls}--item`}
				>
					<Link
						aria-label="Blogs"
						className={`LinkButton ${cls}--link`}
						to="/blogs"
					>
						Blogs
					</Link>
				</li>
				<li
					onClick={e => this.changeActiveClass(e.target)}
					className={`${cls}--item`}
				>
					<a
						aria-label="About"
						href="/#about-section"
						className={`${cls}--link`}
					>
						About
					</a>
				</li>

				<li onClick={this.showJoinUsMessage} className={`${cls}--item`}>
					<button
						aria-label="Joinus"
						className={`LinkButton button-light ${cls}-join`}
					>
						Join Us
					</button>
				</li>
			</ul>
		);
	};

	toggleNavForMobile() {
		document
			.getElementById("nav-ham-button")
			.classList.toggle("toggleNavButton");
		document.getElementById("nav-background").classList.toggle("show");
	}

	render() {
		return (
			<div className="header">
				<div id="joinUsMessage" className="showJoinMessage">
					Sorry, Registrations has been Closed... Subscribe to get
					upcoming updates
				</div>
				<Link
					aria-label="ecell msit logo"
					to="/"
					className="LinkButton"
				>
					<img id="website-logo" className="header_logo" src={Logo} alt="" />
				</Link>
				<div onClick={this.toggleNavForMobile} id="nav-ham-button" />
				<div id="nav-background">
					<div className="nav-mob">
						{this.renderList("header_nav_mob")}
					</div>
				</div>
				{this.renderList("header_nav")}
			</div>
		);
	}
}

export default Header;
