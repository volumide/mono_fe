import { Outlet } from "react-router";
import { ReactComponent as Logo } from "../assets/monologo.svg";
// fill="#101010"
const Sidebar = ({ ...prp }) => {
	return (
		<div className="h-screen w-screen grid grid-cols-5">
			<div className=" hidden md:block h-full bg-black text-gray-400 py-16 sticky top-0">
				<Logo className="mb-11 ml-24" fill="#fff" />
				<ul>
					<a href="/#" className="block py-5 pl-24 text-white mb-1">
						Dashboard
					</a>
					<a href="/#" className="block py-5 pl-24 mb-1">
						Expensses
					</a>
					<a href="/#" className="block py-5 pl-24 mb-1">
						Wallet
					</a>
					<a href="/#" className="block py-5 pl-24 mb-1">
						Summary
					</a>
					<a href="/#" className="block py-5 pl-24 mb-1">
						Account
					</a>
					<a href="/#" className="block py-5 pl-24 mb-1">
						Settings
					</a>
				</ul>
			</div>
			<Outlet />
		</div>
	);
};

export default Sidebar;
