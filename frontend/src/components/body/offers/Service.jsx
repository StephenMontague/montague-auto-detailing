const Service = props => {
	return (
		<div className='serviceOffer'>
			<h1>{props.name}</h1>
			<p>{props.description}</p>
			<p>{props.price}</p>
		</div>
	);
};

export default Service;

