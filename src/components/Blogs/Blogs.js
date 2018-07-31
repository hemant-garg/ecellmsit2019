import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Blogs.css';

class Blogs extends Component {
	constructor(props){
		super(props);
		this.state = {
			blogs: []
		}
	}

	componentDidMount(){
		axios.get("https://public-api.wordpress.com/rest/v1/sites/ecellblogs.wordpress.com/posts")
	      	.then(res => {
		        this.setState({ blogs: res.data.posts });
		        console.log(this.state.blogs);
		      })
	      	.catch(error => console.log(error));
	}

	renderBlogs = () => {
		const blog = this.state.blogs.map(blog => {
			return(
				<div className="blogs-box" key={blog.ID}>
					<Link to={"/blog/" + blog.ID} className="blackLink">
			           	<img
			                className="blogs-featureimage"
			                alt="article header"
			                src={blog.featured_image}
			              />
		            </Link>
		            <div className="blogs-description">
			            <h1 className=" blogs-title text-center">{blog.title}</h1>
			            <Link to={"/blog/" + blog.ID}>
			            	<button className="btn button-light">Read More</button>
			         	</Link>
		         	</div>
				</div>
			)
		})
		return blog;
	}

	render(){
		return (
	        <section className="blogs-section">
	        	<div className="heading">Blogs & Articles</div>
	        	<div className="blogs">
	        		<div className="blogs-container">
	        			{this.renderBlogs()}
	        		</div>
	        	</div>
	        </section>
	    );
	}  
};


export default Blogs;
