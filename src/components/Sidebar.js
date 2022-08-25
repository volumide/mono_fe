import { useEffect, useState, useMemo, useRef } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/monologo.svg";
import { ReactComponent as Menu } from "../assets/menu.svg";
// fill="#101010"

const Sidebar = ({ ...prp }) => {
	let logedIn = localStorage.getItem("isLoggedIn");
	const ref = useRef(null);
	const [sideBar, setSideBar] = useState(false);
	const navigate = useNavigate();
	const Auth = () => !logedIn && navigate("/signin", { replace: true });
	const activeStyle = {
		color: "#fff",
	};
	useEffect(() => {
		Auth();
	}, []);

	const toggleSideBar = () => {
		console.log("working");
		setSideBar(!sideBar);
	};

	useEffect(() => {}, []);

	return (
		<div className="h-screen w-screen grid grid-cols-5">
			<Menu
				className="absolute right-10 top-10 cursor-pointer md:hidden"
				onClick={() => toggleSideBar()}
			/>
			<div
				className={`${
					sideBar ? "hidden" : "block"
				} absolute md:static md:block h-full bg-black text-gray-400 py-16`}
			>
				<div className="mb-10 mx-24 ">
					<Logo className="w-full place-items-start" fill="#fff" />
				</div>
				<ul className=" px-1">
					<NavLink
						to="/dashboard/view"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						className=" block py-5 px-24 mb-1"
					>
						Dasboard
					</NavLink>
					<NavLink to="/dashboard/view" className="block py-5 px-24 mb-1">
						Expenses
					</NavLink>
					<NavLink to="/dashboard/view" className="block py-5 px-24 mb-1">
						Wallet
					</NavLink>
					<NavLink to="/dashboard/view" className="block py-5 px-24 mb-1">
						Summary
					</NavLink>
					<NavLink to="/dashboard/view" className="block py-5 px-24 mb-1">
						Account
					</NavLink>
					<NavLink
						to="/dashboard/profile"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						className="block py-5 px-24 mb-1"
					>
						Settings
					</NavLink>
				</ul>
			</div>
			<Outlet />
		</div>
	);
};

export default Sidebar;
