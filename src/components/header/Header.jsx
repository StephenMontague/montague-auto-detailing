import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__top'>
				<div className='header__left'>
					<h1>Montague Auto Detailing</h1>
				</div>
				<div className='header__right'>
					<h1>Get in Touch</h1>
				</div>
			</div>
			<div className='header__bottom'>
				<Link to='/'>Home</Link>
			</div>
		</div>
	);
};

export default Header;
