import React from 'react';
import './Home.css';
import Slideshow from '../UI/Slideshow';

const Home = () => {
	// const reviews = GET
	// https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews

	return (
		<div className='home'>
			<div className='home__info'>
				<h3 className='text-5xl pb-5'>Montague Auto Detailing</h3>
				<div className='home__slideShow'>
					<Slideshow />
				</div>
				<p className='w-3/4 m-auto pt-5'>
					Our mission at Montague Auto Detailing is simple: to provide high-quality services for our
					valued clients. Our team goes above and beyond to ensure that your vehicle looks exponentially
					cleaner than it was before we arrived. Through open communication and exceptional service, we
					hope you’ll find what you’re looking for with our Car Detailing Service. For more information
					or general inquiries, get in touch today!
				</p>
			</div>
			<div className='home__testimonials'></div>
		</div>
	);
};

export default Home;

