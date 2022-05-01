const Service = props => {
	return (
		<div>
			<h1 className='text-4xl'>{props.name}</h1>
			<div>
				<p>{props.description}</p>
				<p>{props.price}</p>
			</div>
		</div>
	);
};

export default Service;

