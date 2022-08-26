import { useForm } from "react-hook-form";
import TextBox from "../components/TextBox";
import { ReactComponent as Logo } from "../assets/monologo.svg";
import Http from "../http";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
	const naviagate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});
	const login = async (data) => {
		const res = await new Http("login").post(data);
		const {
			data: { data: responds },
			message,
		} = res;
		if (responds) {
			toast.info("signin successful");
			localStorage.setItem(
				"isLoggedIn",
				`jd${Math.random()}_${responds.data.id}${Math.random()}ZAnia`
			);
			localStorage.setItem("profile", JSON.stringify(responds));
			naviagate("/dashboard/view", { replace: true });
		}
		if (message) toast.warning(message);
	};

	return (
		<div className="h-screen w-screen bg-black flex justify-center items-center">
			<form className="w-4/5 md:w-2/5 bg-white p-5 rounded-lg" onSubmit={handleSubmit(login)}>
				<div className="md:w-2/4 mx-auto">
					<div className="text-center my-10">
						<Logo className="mx-auto my-5" fill="#101010" />
						<p className="text-gray-400 leading-10">Secure login to your account</p>
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
					{/* <p className="py-1"> {watch("password")} </p> */}
					{errors.password && <span>required</span>}

					<div className="my-5">
						<div className="flex justify-between items-center text-gray-400 ">
							<div className="flex  flex-1 justify-start items-center">
								<TextBox
									type="checkbox"
									name="rememebr_me"
									register={register}
									className=" w-4 mr-2"
								/>
								<label className=" text-sm">Remember me</label>
							</div>
							<div>
								<a href="/#">I forgot my password</a>
							</div>
						</div>
						<button type="submit" className="bg-blue-700 p-5 w-full text-white my-5 rounded">
							LOG IN
						</button>
						<p className="text-center text-blue-700 py-5">
							Don't have an account?{" "}
							<Link to="/signup" className="underline">
								Signup
							</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
