const Service = props => {
	return (
		<div>
			<h1 className='text-4xl bg-slate-700'>{props.name}</h1>
			<div>
				<p className='bg-slate-700'>{props.description}</p>
			</div>
			<div>
				<p className='bg-slate-700 py-3'>{props.price}</p>
			</div>
		</div>
	);
};

export default Service;

