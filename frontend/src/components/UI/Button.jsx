const Button = props => {
	return (
		<div>
			<button className='bg-slate-700 hover:bg-blue-700 px-10 py-2 rounded-md' onClick={props.onClick}>
				{props.name}
			</button>
		</div>
	);
};

export default Button;

