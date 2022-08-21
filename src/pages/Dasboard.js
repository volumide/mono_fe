import { ReactComponent as Lock } from "../assets/padlock.svg";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { ReactComponent as Car } from "../assets/car.svg";
import { ReactComponent as Dot } from "../assets/hambuger.svg";

const Dashboard = () => {
	const [accountLInked, setLinkedAccount] = useState(false);
	const List = ({ icon, purpose, date, amount }) => (
		<>
			<li className="flex justify-between items-center  my-2">
				<div className="flex items-center ">
					{icon}
					<p>
						<span className="font-bold">{purpose}</span>

						<span className="block font-light text-gray-400  text-sm"> {date} </span>
					</p>
				</div>
				<p className="font-bold">{amount}</p>
			</li>
		</>
	);
	return (
		<div className="h-screen w-screen grid grid-cols-5">
			<Sidebar />
			<>
				{!accountLInked ? (
					<div className="h-full w-full col-span-5 md:col-span-4 grid grid-cols-4 p-16 md:px-24">
						<div className=" col-span-2  ">
							<div>
								<img
									src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestprofilepictures.com%2Fwp-content%2Fuploads%2F2021%2F04%2FCool-Profile-Picture-986x1024.jpg&f=1&nofb=1"
									width="50px"
									height="50px"
									alt=""
									className="rounded-full"
								/>
								<p>Good morning Ola</p>
							</div>
							<div className="my-10 text-center">
								<p className="font-bold text-2xl">Expense Tracker</p>
							</div>
							<div>
								<div className="flex py-5 items-center justify-between border-b mb-5">
									<p>Latest Transaction </p>
									<Dot className="cursor-pointer" />
								</div>
								<ul>
									<List
										icon={<Car className="mr-5 w-11" />}
										purpose="Jumia Food"
										date="11-11-2021 . 10:12am . Credit"
										amount="-1800"
									/>
									<List
										icon={<Car className="mr-5 w-11" />}
										purpose="Jumia Food"
										date="11-11-2021 . 10:12am . Credit"
										amount="-1800"
									/>
								</ul>
							</div>
						</div>
						<div></div>
						<div className="px-5 ">
							<div>
								<p>Total Balnce</p>
								<h2>30,000,000</h2>
								<h2>Your account balance</h2>
								<button></button>
							</div>
						</div>
					</div>
				) : (
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
				)}
			</>

			{/* <div className="h-full col-span-5 md:col-span-4 flex justify-center items-center text-white text-center">
				<div className="bg-black w-4/6 md:w-3/12  p-10 rounded-lg">
					<Lock className="mx-auto" />
					<h3 className="text-2xl leading:10 md:leading-10">Final Step</h3>
					<p className=" md:leading-10">Link your bank account in seconds</p>
					<button className="p-4 text-blue-700 bg-white rounded flex mx-auto my-5">
						LINK NOW <Arrow className="mx-2" />
					</button>
				</div>
			</div> */}
		</div>
	);
};

export default Dashboard;
