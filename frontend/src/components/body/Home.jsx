import React from 'react';
import './Home.css';
import image from '../../static/images/background.jpg';

const Home = () => {
	return (
		<div className='home'>
			<img src={image} alt='background' />
			<div className='home__info'>
				<h3>Montague Auto Detailing</h3>
				<p>
					Our mission at Montague Auto Detailing is simple: to provide high-quality services for our
					valued clients. Our team goes above and beyond to ensure that your vehicle looks exponentially
					cleaner than it was before we arrived. Through open communication and exceptional service, we
					hope you’ll find what you’re looking for with our Car Detailing Service. For more information
					or general inquiries, get in touch today!
				</p>
			</div>
			<div className='home__slideShow'></div>
			<div className='home__testimonials'></div>
		</div>
	);
};

export default Home;

