import React, { useEffect } from 'react';

const Service = ({ name, description, serviceType, price}) => {
	const[type, setType] = useEffect('Exterior')
	
	return (
		<div className='serviceOffer'>
			<h1>{name}</h1>
			<p>{description}</p>
			<p>{price}</p>
		</div>
	);
};

export default Service;
