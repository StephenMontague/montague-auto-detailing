const Service = ({
	name,
	description,
	serviceType,
	price,
}) => {
	return (
		<div className='serviceOffer'>
			<h1>{name}</h1>
			<p>{description}</p>
			<p>{price}</p>
		</div>
	);
};

export default Service;
