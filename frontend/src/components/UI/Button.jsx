const Button = props => {
	return (
		<button
			className='px-10 py-2 rounded-md bg-slate-700 hover:bg-blue-700'
			onClick={props.onClick}>
			{props.name}
		</button>
	);
};

export default Button;
