import React, { Component } from "react";
import "./header.css";
import Logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
		<img className="header_logo" src={Logo} alt="" />
		<ul className="header_nav">
			<li className="header_nav--item"><a className="header_nav--link" href="#">Events</a></li>
			<li className="header_nav--item"><a className="header_nav--link" href="#">Gallery</a></li>
			<li className="header_nav--item"><a className="header_nav--link" href="#">Blogs</a></li>
			<li className="header_nav--item"><a className="header_nav--link" href="#">About</a></li>
			<li className="header_nav--item"><button className="subscribe-light">Subscribe</button></li>
		</ul>
	 </div>
    )
  }
}

export default Header;