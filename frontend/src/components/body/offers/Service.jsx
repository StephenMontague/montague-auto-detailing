const Service = props => {
	return (
		<div>
			<h1 className='text-4xl bg-slate-700'>{props.name}</h1>
			<div>
				<p className='bg-slate-700'>{props.description}</p>
			</div>
			<div>
				<p className='py-3 bg-slate-700 text-large '>{props.price}</p>
			</div>
		</div>
	);
};

export default Service;
