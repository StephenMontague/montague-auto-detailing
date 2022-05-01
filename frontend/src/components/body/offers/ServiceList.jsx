import React, { useEffect, useState } from 'react';
import Service from './Service';
import OffersService from '../../../services/OffersService';
import Button from '../../UI/Button';

const ServiceList = () => {
	const [offers, setOffers] = useState([]);
	const [service, setService] = useState('Exterior');

	const onServiceTypeHandler = e => {
		setService(e.target.firstChild.nodeValue);
	};

	useEffect(() => {
		getAllOffers();
	}, []);

	const getAllOffers = () => {
		OffersService.getAllServices()
			.then(response => {
				setOffers(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<div className='flex justify-center space-x-4'>
				<Button name='Exterior' onClick={onServiceTypeHandler} />
				<Button name='Interior' onClick={onServiceTypeHandler} />
				<Button name='Combo' onClick={onServiceTypeHandler} />
				<Button name='Add On' onClick={onServiceTypeHandler} />
			</div>
			<ul>
				{offers.map(offer => {
					if (offer.serviceType === service) {
						return (
							<li key={offer.id}>
								<Service
									code={offer.serviceCode}
									name={offer.serviceName}
									description={offer.description}
									type={offer.serviceType}
									price={offer.salePrice}
								/>
							</li>
						);
					} else {
						return '';
					}
				})}
			</ul>
		</div>
	);
};

export default ServiceList;

