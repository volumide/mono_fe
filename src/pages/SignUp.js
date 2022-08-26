import { useForm } from "react-hook-form";
import TextBox from "../components/TextBox";
import { ReactComponent as Logo } from "../assets/monologo.svg";
import Http from "../http";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
	const {
		handleSubmit,
		watch,
		register,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});

	const userSignup = async (data) => {
		const res = await new Http("signup").post(data);
		if (res.status === 200) toast.info(res.message);
		else toast(res.message);
	};

	return (
		<>
			<div className="h-screen w-screen bg-black flex justify-center items-center">
				<form
					className="w-4/5 md:w-2/5 bg-white p-5 rounded-lg"
					onSubmit={handleSubmit(userSignup)}
				>
					<div className="md:w-2/4 mx-auto">
						<div className="text-center my-10">
							<Logo className="mx-auto my-5" fill="#101010" />
							<p className="text-gray-400 leading-10">Track all your bank expenses in one place</p>
						</div>
						<div className="md:grid gap-10 grid-cols-2 grid-rows-1	">
							<div>
								<TextBox
									error={errors}
									name="first_name"
									type="text"
									register={register}
									params={{ required: true }}
									placeholder="First Name"
								/>
								{errors.first_name && <span>required</span>}
							</div>

							<div>
								<TextBox
									name="last_name"
									type="text"
									register={register}
									params={{ required: true }}
									placeholder="Last Name"
								/>
								{errors.last_name && <span> required</span>}
							</div>
						</div>

						<TextBox
							name="email"
							type="text"
							register={register}
							params={{ required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ }}
							placeholder="Email"
						/>
						{errors.email && errors.email.type === "required" && <span>required</span>}
						{errors.email && errors.email.type === "pattern" && <span>Invalid email format</span>}

						<TextBox
							name="password"
							type="password"
							register={register}
							params={{ required: true }}
							placeholder="Password"
						/>
						<p className="py-1"> {watch("password")} </p>
						{errors.password && <span>required</span>}

						<div className="my-5">
							<button type="submit" className="bg-blue-700 p-5 w-full text-white my-5 rounded">
								GET STARTED
							</button>
							<p className="text-center text-blue-700 py-5">
								Already have an account?{" "}
								<Link to="/signin" className="underline">
									Sign in
								</Link>
							</p>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignUp;
