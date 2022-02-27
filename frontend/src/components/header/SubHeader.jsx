import React from 'react';
import './SubHeader.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SubHeader = () => {
	return (
		<div className='subheader'>
			<div className='subheader__left'>
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
			<div className='subheader__right'>
				<a
					href='https://www.facebook.com/MontagueAutoDetailing/'
					target='_blank'
					rel='noopener noreferrer'>
					<FacebookIcon />
				</a>
				<a
					href='https://www.instagram.com/montagueautodetailing/'
					target='_blank'
					rel='noopener noreferrer'>
					<InstagramIcon />
				</a>
			</div>
		</div>
	);
};

export default SubHeader;
