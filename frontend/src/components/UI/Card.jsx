const Card = props => {
	return (
		<div className='flex rounded-lg px-2 py-10 bg-slate-700 place-content-center'>
			<div className='w-3/4'>{props.children}</div>
		</div>
	);
};

export default Card;

