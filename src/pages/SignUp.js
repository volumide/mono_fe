import React from "react";
import { useForm } from "react-hook-form";
import TextBox from "../components/TextBox";

const SignUp = () => {
	const { handleSubmit, watch, register } = useForm({
		mode: "onChange",
	});

	const registerA = (data) => console.log("workin");

	return (
		<div>
			<form onSubmit={handleSubmit(registerA)}>
				<div className="grid gap-48 grid-cols-3 grid-rows-1"></div>
				<TextBox
					name="first_name"
					id="firstname"
					type="text"
					defaultValue="Olumide"
					register={register}
					className="border p-4 border-red-500"
				/>
				{watch("first_name")}
				<button type="submit" className="bg-blue-500 p-5 w-full text-white my-5">
					Signup
				</button>
			</form>
		</div>
	);
};

export default SignUp;
