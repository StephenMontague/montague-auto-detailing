import React from 'react';
import './SubHeader.css';
import { Link } from 'react-router-dom';

const SubHeader = () => {
	return (
		<div className='subheader'>
			<Link className='link' to='/'>
				Home
			</Link>
			<Link className='link' to='/about-us'>
				About Us
			</Link>
			<Link className='link' to='contact-us'>
				Contact Us
			</Link>
			<Link className='link' to='/services'>
				Services
			</Link>
		</div>
	);
};

export default SubHeader;
