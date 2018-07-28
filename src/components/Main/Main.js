import React, { Component } from "react";
import "./Main.css";
import SVG from './svg/svg';
class Main extends Component {
  render() {
    return (
        <section className="main">
		<div className="main_heading">
			<div className="main_heading--primary">
				Entrepreneurship
			</div>
			<div className="main_heading--sub">
				cell of <span>MSIT</span>
			</div>
		</div>
		<div className="main_subscribe">
			<form>
				<input className="main_subscribe--input" type="text" placeholder="Enter Email Address" />
				<button type="submit" className="main_subscribe--button">Subscribe</button>
			</form>
			<p className="main_subscribe--note"><span>Missed eSummit or Internship Fair ?? </span>Now Join our Newsletter and never missed any upcoming Events.</p>
		</div>
		<SVG />
	</section>
    )
  }
}

export default Main;