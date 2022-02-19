import React from 'react';
import './Header.css';
import SubHeader from './SubHeader';

const Header = () => {
	return (
		<>
			<div className='header'>
				<div className='header__stack'>
					<div className='header__top'>
						<div className='header__left'>
							<h1>
								Montague Auto
								Detailing
							</h1>
						</div>
						<div className='header__right'>
							<h1>
								<a href='mailto: stephen@getmadclean.org?subject=Tell me more about MAD Clean Services!'>
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
