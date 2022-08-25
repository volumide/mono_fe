import TextBox from "../components/TextBox";
import { useForm } from "react-hook-form";
import Http from "../http";
import { ReactComponent as Logo } from "../assets/monologo.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import { data } from "autoprefixer";

const Setting = () => {
	const navigate = useNavigate();
	const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")).data);
	const {
		handleSubmit,
		watch,
		register,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});

	const updateProfile = async (data) => {
		const http = new Http("update-profile");
		const res = await http.put(data);
		if (res.data.message.message === "user updated created") {
			console.log("profile updaed successfuly");
		}
	};

	const updateAccount = async (data) => {
		data.id = profile.id;
		if (data.password) {
			await updatePassword(data);
		}
		if (profile.first_name !== data.first_name || profile.last_name !== data.last_name) {
			await updateProfile(data);
		}
	};

	const deleteAccount = async () => {
		const http = new Http(`delete-user?id=${profile.id}`);
		const res = await http.delete();
		console.log(res);
		console.log(res);
	};

	const logout = () => {
		localStorage.removeItem("isLoggedIn");
		navigate("/signin", { replace: true });
	};

	const updatePassword = async (data) => {
		data.id = profile.id;
		const http = new Http("update-password");
		const res = await http.put(data);
		console.log(res);
	};

	return (
		<>
			<div className="h-full w-full col-span-5 md:col-span-4 flex justify-center items-center overflow-y-auto">
				<form
					className="w-4/5  md:w-3/5 bg-white p-5 rounded-lg"
					onSubmit={handleSubmit(updateAccount)}
				>
					<div className="md:w-2/4 mx-auto">
						<div className="text-center my-10">
							<Logo className="mx-auto my-5" fill="#101010" />
						</div>
						<div className="md:grid gap-10 grid-cols-2 grid-rows-1	">
							<div>
								<TextBox
									error={errors}
									name="first_name"
									type="text"
									defaultValue={profile.first_name}
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
									defaultValue={profile.last_name}
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
							defaultValue={profile.email}
							placeholder="Email"
							disabled
						/>
						{errors.email && errors.email.type === "required" && <span>required</span>}
						{errors.email && errors.email.type === "pattern" && <span>Invalid email format</span>}

						<TextBox name="password" type="password" register={register} placeholder="Password" />
						<p className="py-1"> {watch("password")} </p>
						{errors.password && <span>required</span>}

						<div className="my-5">
							<button type="submit" className="bg-blue-700 p-5 w-full text-white my-5 rounded">
								Update Account
							</button>
							<p className="flex justify-between items-center text-blue-700 py-4">
								<button className="text-red-500" onClick={deleteAccount}>
									Delete Account
								</button>
								<button
									type="button"
									onClick={logout}
									className="text-white p-3 px-7 bg-red-700 rounded"
								>
									logout
								</button>
							</p>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Setting;
