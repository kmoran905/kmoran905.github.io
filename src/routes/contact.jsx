import React from 'react';
import { useForm } from "react-hook-form";



export default function Contact() {
	const {register, handleSubmit, formState: {errors}} = useForm();
	const onSubmit = data => console.log(data);

	return (
		<><h1>Contact</h1>
			<p>If you have any questions regarding our clothes or 
				would like to contact us for any inquires, 
				Please fill out the contact form below.</p>
			<div className="container">
				<form onSubmit={handleSubmit(onSubmit)}>
					
					<fieldset>
						<label htmlFor="firstname"> First Name: </label>
						<input name="firstname" {...register("firstName", { required: "Please enter your first name.", maxLength: 20 })} />
						{errors.firstName && <p>FIrst name is required.</p>}
					

						<label htmlFor="lastname"> Last Name: </label>
						<input name="lastname" {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
						{errors.lastName && <p>Last name is required.</p>}

						<label htmlFor="phonenumber"> Phone Number: </label>
						<input name="phonenumber" {...register("phoneNumber", {
							required: true,
							pattern: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
						})} />
						{errors.phonenumber && <p>Phone number is required</p>}
					
						<label htmlFor="message"> Message: </label>
						<textarea rows="4" cols="50" name="message" {...register("message", {required: true,})} defaultValue="Enter message here..">
						</textarea> 
						{errors.message && <p>Please fill out a message.</p>}
					
						<input type="submit" />
					</fieldset>
					
				
				</form>
			</div>
		</>
	);
}


