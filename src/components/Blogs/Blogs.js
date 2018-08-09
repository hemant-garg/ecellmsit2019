import React, { Component } from "react";
import axios from "axios";
import checked from "./checked.svg";
import { Link } from "react-router-dom";
import "./Blogs.css";

class Blogs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: [],
			blogs: [],
			activeBlogs: [],
			inBlogs: false
		};
	}

	componentDidMount() {
		document.querySelectorAll(".LinkButton").forEach(button => {
			button.addEventListener("click", () => {
				window.scroll({
					top: 0,
					left: 0,
					behavior: "smooth"
				});
			});
		});
		if (this.props.match !== undefined) {
			if (this.props.match.path === "/blogs") {
				this.setState({ inBlogs: true });
				axios
					.get(
						"https://public-api.wordpress.com/rest/v1/sites/ecellblogs.wordpress.com/posts"
					)
					.then(res => {
						this.setState({
							blogs: res.data.posts,
							activeBlogs: res.data.posts
						});
						const filterArr = this.state.blogs.map(blog => {
							return Object.keys(blog.categories)[0];
						});
						this.setState({
							filters: Array.from(new Set(filterArr))
						});
					})
					.catch(error => console.log(error));
			}
		} else {
			axios
				.get(
					"https://public-api.wordpress.com/rest/v1/sites/ecellblogs.wordpress.com/posts"
				)
				.then(res => {
					const activeBlogs = res.data.posts.filter(
						(post, i) => i < 3
					);
					this.setState({ activeBlogs });
				})
				.catch(error => console.log(error));
		}
		const Navs = document.getElementById("header-navs").childNodes;
		Navs.forEach(nav => nav.classList.remove("activeNav"));
		document.getElementById("blogs").classList.add("activeNav");
	}
	renderBlogs = () => {
		const blogs = this.state.activeBlogs.map(blog => {
			return (
				<div className="blogs-box" key={blog.ID}>
					<Link
						to={"/blog/" + blog.ID}
						className="blackLink LinkButton"
					>
						<img
							className="blogs-featureimage"
							alt="article header"
							src={blog.featured_image}
						/>
					</Link>
					<div className="blogs-description">
						<h1 className=" blogs-title text-center">
							{blog.title}
						</h1>
						<div className="blogs-dateandbutton">
							<div className="blogs-date">
								{new Date(blog.date).toLocaleDateString()}
							</div>
							<Link to={"/blog/" + blog.ID}>
								<button className="btn button-light-2 LinkButton">
									Read More
								</button>
							</Link>
						</div>
					</div>
				</div>
			);
		});

		return blogs;
	};

	updateBlogs = target => {
		const allFilters = target.parentNode.childNodes;
		allFilters.forEach(filter => filter.classList.remove("activeFilter"));
		target.classList.add("activeFilter");

		if (target.id === "allblogs") {
			this.setState({ activeBlogs: this.state.blogs.slice() });
		} else {
			let filteredBlogs = this.state.blogs.filter(blog => {
				return blog.categories.hasOwnProperty(target.id);
			});
			this.setState({ activeBlogs: filteredBlogs.slice() });
		}
	};
	renderFilters = () => {
		return this.state.filters.map((filteroption, i) => {
			return (
				<li
					className="filter-item button-dark-1"
					key={i}
					onClick={e => this.updateBlogs(e.target)}
					id={filteroption}
				>
					{filteroption}{" "}
					<img className="checksvg" alt="check svg" src={checked} />{" "}
				</li>
			);
		});
	};

	render() {
		const { inBlogs } = this.state;
		if (!inBlogs) {
			return (
				<section className="blogs-section">
					<div className="heading">Blogs & Articles</div>
					<div className="blogs">
						<div className="blogs-container">
							{this.renderBlogs()}
						</div>
						<div style={{ textAlign: "center", marginTop: "3rem" }}>
							<Link to="/blogs">
								<button className="button-dark-1 LinkButton">
									See all Blogs
								</button>
							</Link>
						</div>
					</div>
				</section>
			);
		}
		return (
			<section className="blogs-section">
				<div className="heading">Blogs & Articles</div>
				<ul className="filter">
					<li
						className="filter-item button-dark-1 activeFilter"
						onClick={e => this.updateBlogs(e.target)}
						id="allblogs"
					>
						All{" "}
						<img
							className="checksvg"
							alt="check svg"
							src={checked}
						/>{" "}
					</li>
					{this.renderFilters()}
				</ul>
				<div className="blogs">
					<div className="blogs-container">{this.renderBlogs()}</div>
				</div>
			</section>
		);
	}
}

export default Blogs;
