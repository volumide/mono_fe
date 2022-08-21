import { ReactComponent as Lock } from "../assets/padlock.svg";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
	return (
		<div className="h-screen w-screen grid grid-cols-5">
			<Sidebar />
			<div className="h-full col-span-5 md:col-span-4 flex justify-center items-center text-white text-center">
				<div className="bg-black w-4/6 md:w-3/12  p-10 rounded-lg">
					<Lock className="mx-auto" />
					<h3 className="text-2xl leading:10 md:leading-10">Final Step</h3>
					<p className=" md:leading-10">Link your bank account in seconds</p>
					<button className="p-4 text-blue-700 bg-white rounded flex mx-auto my-5">
						LINK NOW <Arrow className="mx-2" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
