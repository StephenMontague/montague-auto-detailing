import React from 'react';
import './Header.css';
import SubHeader from './SubHeader';
import logo from '../../static/images/logo.jpg';

const Header = () => {
	return (
		<>
			<div className='header'>
				<div className='header__stack'>
					<div className='header__top'>
						<div className='header__left'>
							<img src={logo} alt='logo' />
							<h1 className='flex items-center py-8'>Montague Auto Detailing</h1>
						</div>
						<div className='header__right'>
							<h1>
								<a
									href='mailto: stephen@getmadclean.org?subject=Tell me more about MAD Clean Services!'
									className='flex items-center py-8'>
									Get in Touch!
								</a>
							</h1>
						</div>
					</div>
					<div className='header__bottom'>
						<SubHeader />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;

