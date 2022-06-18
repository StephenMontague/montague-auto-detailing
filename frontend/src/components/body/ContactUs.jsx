import React, { useState } from "react";
import "./ContactUs.css";

import Button from "../UI/Button";

const ContactUs = () => {
	const [formIsValid, setFormIsValid] = useState(false);
	const [formIsTouched, setFormIsTouched] = useState(false);

	const formSubmissionHandler = event => {
		event.preventDefault();

		setFormIsTouched(true);
	};

	const firstNameHandler = event => {};

	return (
		<form onSubmit={formSubmissionHandler} className=''>
			<div className='w-1/2 pb-10 m-auto'>
				<div style={{ paddingLeft: "25%" }}>
					<label className='pr-2'>First Name</label>
				</div>
				<div style={{ paddingLeft: "25%" }}>
					<input
						className='pl-2 text-black border-white border-solid rounded-md bg-slate-300'
						type='text'
						id='firstName'
						onChange={firstNameHandler}
						style={{ width: "88%" }}
					/>
				</div>
			</div>
			<div className='w-1/2 pb-10 m-auto'>
				<div style={{ paddingLeft: "25%" }}>
					<label className='pr-2'>Last Name</label>
				</div>
				<div style={{ paddingLeft: "25%" }}>
					<input
						className='pl-2 text-black border-white border-solid rounded-md bg-slate-300'
						type='text'
						style={{ width: "88%" }}
					/>
				</div>
			</div>
			<div className='w-1/2 pb-10 m-auto'>
				<div style={{ paddingLeft: "25%" }}>
					<label className='pr-2'>Email Address</label>
				</div>
				<div style={{ paddingLeft: "25%" }}>
					<input
						className='pl-2 text-black border-white border-solid rounded-md bg-slate-300'
						type='email'
						style={{ width: "88%" }}
					/>
				</div>
			</div>
			<div className='w-1/2 pb-10 m-auto'>
				<div style={{ paddingLeft: "25%" }}>
					<label className='pr-2'>Your Message</label>
				</div>
				<div style={{ paddingLeft: "25%" }}>
					<textarea
						className='pl-2 text-black border-white border-solid rounded-md bg-slate-300'
						rows='4'
						cols='50'
					/>
				</div>
			</div>
			<div className='justify-center w-1/2 m-auto'>
				<div style={{ paddingLeft: "47%" }}>
					<Button name='Submit' />
				</div>
			</div>
		</form>
	);
};

export default ContactUs;
