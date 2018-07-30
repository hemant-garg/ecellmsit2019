import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./header.css";
import Logo from './logo.png';



class Header extends Component {

changeActiveClass = (target) => {
	const allNavs = target.parentNode.parentNode.childNodes;
	allNavs.forEach(nav => nav.classList.remove('activeNav'))
	target.parentNode.classList.add('activeNav');
} 

  render() {
    return (
      <div className="header">
		<Link to="/" className="LinkButton"><img className="header_logo" src={Logo} alt="" /></Link>
		<ul className="header_nav" id="header-navs">
			<li onClick={(e)=> this.changeActiveClass(e.target)} id="eventsss" className="header_nav--item"><a className="header_nav--link" href="#">Events</a></li>
			<li onClick={(e)=> this.changeActiveClass(e.target)} id="galllery" className="header_nav--item"><Link className="header_nav--link" to="/gallery">Gallery</Link></li>
			<li onClick={(e)=> this.changeActiveClass(e.target)} className="header_nav--item"><a className="header_nav--link" href="#">Blogs</a></li>
			<li onClick={(e)=> this.changeActiveClass(e.target)} className="header_nav--item"><a className="header_nav--link" href="#">About</a></li>
			<li onClick={(e)=> this.changeActiveClass(e.target)} className="header_nav--item"><button className="button-light">Join Us</button></li>
		</ul>
	 </div>
    )
  }
}

export default Header;