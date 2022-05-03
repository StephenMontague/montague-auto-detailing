import React, { useEffect, useState } from 'react';
import Service from './Service';
import OffersService from '../../../services/OffersService';
import Button from '../../UI/Button';
import Card from '../../UI/Card';

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
			<ul className='m-8'>
				{offers.map(offer => {
					if (offer.serviceType === service) {
						return (
							<div className='m-auto p-2 justify-center m-w-3/4 w-1/2'>
								<Card>
									<li className='justify-center space-y-2' key={offer.id}>
										<Service
											code={offer.serviceCode}
											name={offer.serviceName}
											description={offer.description}
											type={offer.serviceType}
											price={offer.salePrice}
										/>
									</li>
								</Card>
							</div>
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

