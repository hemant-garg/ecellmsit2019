import React from 'react';
import './About.css';
import AboutSVG from './about-svg';

const About = () => {
    return (
        <section className="about-section">
        	<div className="heading-2">about us</div>
        	<div className="about">
	        	<div className="about--text">
		        	<div className="about--text-heading">Entrepreneurship Cell Of MSIT</div>
		        	<div className="about--text-moto">Ideate &#x25cf; Inspire &#x25cf; Invest</div>
		        	<div className="para">
		        		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe obcaecati rem ea, temporibus 
		        		asperiores molestias magni, est magnam omnis quaerat commodi accusantium ut, fugit quibusdam velit
		        		quae doloribus numquam animi? 
						Lorem ipsum dolor sit amet, <br />
						consectetur adipisicing elit. Deserunt quae iusto illo odit pariatur.
						 Eligendi numquam velit nam maiores possimus veritatis, earum illo cumque ea expedita excepturi 
						 aut dolores in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione hic praesentium 
						 similique consequatur, illum vel quia obcaecati blanditiis excepturi ut nesciunt velit consequuntur
						  perferendis veniam quibusdam tempore, aut incidunt temporibus?	
		        	</div>
		        	<button className="button-light-2">Our Facebook Page</button>
		        </div>
		       	<div className="about--svg">
		       		<AboutSVG />
		       	</div>
        	</div>
        </section>
    );
};
export default About;
