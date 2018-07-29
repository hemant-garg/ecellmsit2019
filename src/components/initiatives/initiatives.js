import React from 'react';
import SVG1 from './svg1';
import SVG2 from './svg2';
import SVG3 from './svg3';

import './initiatives.css';


const Initiatives = () => {
    return (
        <section className="initiatives-section">
        	<div className="heading">What We Do</div>
        	<div className="initiatives">
	        	<SVG1 />
	        	<SVG2 />
	        	<SVG3 />
        	</div>
        </section>
    );
};

export default Initiatives;
