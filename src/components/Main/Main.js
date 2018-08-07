import React, { Component } from "react";
import "./Main.css";
import SVG from "./svg/svg";
import axios from "axios";
import unchecked from "./unchecked.svg";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ""
		};
	}
	onChangeEmail = e => {
		this.setState({ email: e.target.value });
	};

	showMessage(message, style) {
		const messageBox = document.getElementById("subscribeMessage");
		messageBox.innerHTML = message;
		messageBox.classList.add(style);
		setTimeout(() => {
			messageBox.classList.remove(style);
		}, 4100);
	}

	handleButtonUI = res => {
		let subscribeText = document.getElementById("subscribeText");
		let loader = document.getElementById("lds-ellipsis");
		let success = document.getElementById("checkmark");
		let error = document.getElementById("errorSubscribe");
		let background = document.getElementById("backgroundButton");
		loader.style.display = "none";
		if (res.data === "successfully registered") {
			success.style.display = "inline-block";

			setTimeout(() => {
				background.classList.add("success");
			}, 700);
			this.showMessage("Email Registered Successfully !", "success");
			setTimeout(() => {
				success.style.display = "none";
				background.classList.remove("success");
				subscribeText.style.opacity = "1";
			}, 4500);
		} else if (
			res.data === "Your email is not vaild" ||
			res.data === "Your email is already registered"
		) {
			error.style.display = "inline-block";
			this.showMessage(res.data, "failure");
			background.classList.add("error");
			setTimeout(() => {
				error.style.display = "none";
				background.classList.remove("error");
				subscribeText.style.opacity = "1";
			}, 4500);
		}
	};

	validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	onSubmitEmail = e => {
		e.preventDefault();
		const { email } = this.state;
		if (this.validateEmail(email)) {
			console.log("passed");
			document.getElementById("subscribeText").style.opacity = "0";
			document.getElementById("lds-ellipsis").style.display =
				"inline-block";
			axios
				.post(
					"https://pure-citadel-50491.herokuapp.com/subscribe/user",
					{
						email: email
					}
				)
				.then(res => this.handleButtonUI(res))
				.catch(function(error) {
					console.log(error);
					this.showMessage(
						"Sorry Server Problem, Try again after some time",
						"failure"
					);
				});
			this.setState({ email: "" });
		} else {
			//invalid email
			this.showMessage("Sorry, Email is not Valid !", "failure");
		}
	};
	render() {
		return (
			<section className="main">
				<div id="subscribeMessage" className="showSubscribeMessage">
					{" "}
				</div>
				<div className="main_heading">
					<div className="main_heading--primary">En</div>
					<div className="main_heading--sub">
						cell of <span>MSIT</span>
					</div>
				</div>
				<div className="main_subscribe">
					<form onSubmit={this.onSubmitEmail}>
						<input
							className="main_subscribe--input"
							onChange={this.onChangeEmail}
							type="email"
							value={this.state.email}
							placeholder="Enter Email Address"
							required
						/>
						<button
							type="submit"
							className="main_subscribe--button"
							id="subscribe_button"
						>
							<span className="main_subscribe--button--icon">
								<i className="far fa-smile-beam fa-2x" />
							</span>
							<span id="subscribeText">Subscribe</span>
							<div id="lds-ellipsis">
								<div />
								<div />
								<div />
								<div />
							</div>
							<svg
								id="checkmark"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 52 52"
							>
								<circle
									className="checkmark__circle"
									cx="26"
									cy="26"
									r="25"
									fill="none"
								/>
								<path
									className="checkmark__check"
									fill="none"
									d="M14.1 27.2l7.1 7.2 16.7-16.8"
								/>
							</svg>
							<img
								src={unchecked}
								alt="error"
								id="errorSubscribe"
							/>
							<div id="backgroundButton" />
						</button>
					</form>
					<p className="main_subscribe--note">
						<span>Missed eSummit or Internship Fair ?? </span>Now
						Join our Newsletter and never missed any upcoming
						Updates.
					</p>
				</div>
				<SVG />
			</section>
		);
	}
}

export default Main;
