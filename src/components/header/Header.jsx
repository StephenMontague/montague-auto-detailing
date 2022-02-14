import React from 'react';
import './Header.css';
import SubHeader from './SubHeader';

const Header = () => {
	return (
		<>
			<div className='header'>
				<div className='header__left'>
					<h1>Montague Auto Detailing</h1>
				</div>
				<div className='header__right'>
					<h1>Get in Touch</h1>
				</div>
			</div>
			<SubHeader />
		</>
	);
};

export default Header;
