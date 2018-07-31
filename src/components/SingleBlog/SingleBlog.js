import React, { Component } from 'react';
import axios from 'axios';
import Disqus from 'disqus-react';
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
				    "https://public-api.wordpress.com/rest/v1/sites/ecellblogs.wordpress.com/posts/" +
				    this.props.match.params.id
				)
	      	.then(res => {
		        this.setState({ blog: res.data });
		        console.log('blog', this.state.blog);
		      })
	      	.catch(error => console.log(error));
		

	}


	render(){

		const disqusShortname = 'ecellmsit';
        const disqusConfig = {
            url: this.state.blog.URL,
            identifier: this.state.blog.ID,
            title: this.state.blog.title,
        };


		const content = document.getElementById('content');
		if (content !== null ){
			content.innerHTML = this.state.blog.content;
		}
		
		const { blog } = this.state;
		let firstName ='';
		let lastName = '';
		if(blog.author !== undefined){
			firstName = blog.author.first_name;
			lastName = blog.author.last_name;
		}
		return (
	        <section className="singleblog-section">
	        	<div className="singleblog">
	      			 <h1 className=" singleblog-title text-center">{blog.title}</h1>
	      			 <div className="singleblog-details">
	      			 	<div className="singleblog-author">Author: {`${firstName} ${lastName}`}</div>
	      			 	<div className="singleblog-date">{new Date(blog.date).toDateString()}</div>
	      			 </div>
		              <div id="content" ></div>
	        	</div>
	        	<Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
	        </section>
	    );
	}  
};


export default SingleBlog;

