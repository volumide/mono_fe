import { ReactComponent as Lock } from "../assets/padlock.svg";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { ReactComponent as Car } from "../assets/car.svg";
import { ReactComponent as Dot } from "../assets/hambuger.svg";
import { ReactComponent as Bank } from "../assets/banks.svg";
import { ReactComponent as Stats } from "../assets/Stats.svg";

const Dashboard = () => {
	const [accountLInked, setLinkedAccount] = useState(false);
	const List = ({ icon, purpose, date, amount, amount1 }) => (
		<>
			<li className="flex justify-between items-center w-full  my-2">
				<div className="flex items-center ">
					{icon}
					<p>
						<span className="font-bold">{purpose}</span>

						<span className="block font-light text-gray-400  text-sm"> {date} </span>
					</p>
				</div>
				{amount ? <p className="font-bold">{amount}</p> : <p className="font-light">{amount1}</p>}
			</li>
		</>
	);
	return (
		<div className="h-screen w-screen grid grid-cols-5">
			<Sidebar />
			<>
				{!accountLInked ? (
					<div className="h-full w-full col-span-5 md:col-span-4 md:grid grid-cols-3 p-10 md:p-16 md:px-24">
						<div className=" col-span-2  md:pr-36">
							<div className="flex items-center">
								<img
									src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestprofilepictures.com%2Fwp-content%2Fuploads%2F2021%2F04%2FCool-Profile-Picture-986x1024.jpg&f=1&nofb=1"
									width="50px"
									height="50px"
									alt=""
									className="rounded-full mr-5"
								/>
								<p>Good morning, Ola</p>
							</div>
							<div className="my-10 ">
								<p className="font-bold text-2xl text-center mb-8">Expense Tracker</p>
								<Stats className="w-full" />
							</div>
							<div className="mb-11">
								<div className="flex py-5 items-center justify-between border-b mb-5">
									<p>Latest Transaction </p>
									<Dot className="cursor-pointer w-6 md:w-8" />
								</div>
								<ul className="">
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
						{/* <div></div> */}
						<div className="md:pl-24">
							<div className="text-center rounded-lg shadow p-5 mb-10">
								<p className="font-bold">Total Balance</p>
								<h2 className="text-3xl font-bold my-3">30,000,000</h2>
								<h2>Your balance accross all bank</h2>
								<div>
									<Bank className="w-24 mx-auto my-3" />
								</div>
								<button
									className="bg-pink-300 p-5 rounded text-pink-800 font-extrabold my-3 w-full"
									style={{ background: "#FFF4F4", color: "#F22828" }}
								>
									UNLINK BANK ACCOUNT
								</button>
							</div>
							<div className="flex py-5 items-center justify-between border-b mb-5">
								<p>Where your money go </p>
								<Dot className="cursor-pointer w-6 md:w-8" />
							</div>
							<ul>
								<List purpose="Food and Drinks" amount1="827,400" />
								<div className="w-full py-1 bg-gray-200 rounded-md relative">
									<div
										className="w-2/5 h-full rounded-md absolute left-0 top-0"
										style={{ background: "#FFB1B1" }}
									></div>
								</div>
							</ul>
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
