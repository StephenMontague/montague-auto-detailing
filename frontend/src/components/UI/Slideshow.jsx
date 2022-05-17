import React, { useState } from 'react';
import './Slideshow.css';
import { ArrowCircleRight, ArrowCircleLeft } from '@mui/icons-material';

const Slideshow = props => {
	const slideShow = [
		{ image: require('../../static/images/cobra_kai.jpeg') },
		{ image: require('../../static/images/bmw.jpeg') },
		{ image: require('../../static/images/jeep.jpeg') },
		{ image: require('../../static/images/4runner.jpeg') },
		{ image: require('../../static/images/matthew_polish.jpeg') },
	];

	const [current, setCurrent] = useState(0);
	const length = slideShow.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slideShow) || length <= 0) {
		return null;
	}

	return (
		<section className='slider'>
			<ArrowCircleLeft onClick={prevSlide} className='left-arrow' />
			{slideShow.map((slide, index) => {
				return (
					<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current && <img src={slide.image} alt='slide show' className='image' />}
					</div>
				);
			})}
			<ArrowCircleRight onClick={nextSlide} className='right-arrow' />
		</section>
	);
};

export default Slideshow;

