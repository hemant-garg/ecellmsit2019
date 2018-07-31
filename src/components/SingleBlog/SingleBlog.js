import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './SingleBlog.css';

class SingleBlog extends Component {
	constructor(props){
		super(props);
		this.state = {
			blog: []
		}
	}

	componentDidMount(){
		axios.get(
				    "http://public-api.wordpress.com/rest/v1/sites/ecellblogs.wordpress.com/posts/" +
				    this.props.match.params.id
				)
	      	.then(res => {
		        this.setState({ blog: res.data });
		        console.log('blog', this.state.blog);
		      })
	      	.catch(error => console.log(error));
		

	}


	render(){
		const content = document.getElementById('content');
		if (content !== null ){
			content.innerHTML = this.state.blog.content;
		}
		
		const { blog } = this.state;
		return (
	        <section className="singleblog-section">
	        	<div className="sngleblog">
	      			 <h1 className=" SingleBlog-title text-center">{blog.title}</h1>
		              <div id="content" ></div>
	        	</div>
	        </section>
	    );
	}  
};


export default SingleBlog;
