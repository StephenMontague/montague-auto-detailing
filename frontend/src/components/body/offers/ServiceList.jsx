import React, { useEffect, useState } from 'react';
import './ServiceList.css';
import Service from './Service';
import OffersService from '../../../services/OffersService';

const ServiceList = () => {
	const [offers, setOffers] = useState([]);

	const offersList = offers.map(offer => (
		<Service
			key={offer.id}
			code={offer.serviceCode}
			name={offer.serviceName}
			description={offer.description}
			type={offer.serviceType}
			price={offer.salePrice}
		/>
	));

	useEffect(() => {
		getAllOffers();
	}, []);

	const getAllOffers = () => {
		OffersService.getAllServices()
			.then(response => {
				setOffers(response.data);
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className='services'>
			<ul>{offersList}</ul>
		</div>
	);
};

export default ServiceList;
