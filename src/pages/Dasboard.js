import { ReactComponent as Lock } from "../assets/padlock.svg";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import MonoConnect from "@mono.co/connect.js";
import Sidebar from "../components/Sidebar";
import { useMemo, useState, useEffect } from "react";
import { ReactComponent as Car } from "../assets/car.svg";
import { ReactComponent as Dot } from "../assets/hambuger.svg";
import { ReactComponent as Bank } from "../assets/banks.svg";
import { ReactComponent as Stats } from "../assets/Stats.svg";
import Http from "../http";

const splitDate = (date) => {
	const toArr = date.split("T");
	const firstDate = toArr[0];
	const time = toArr[1].split(".")[0];
	return { firstDate, time };
};
// mono/auth?id=1
const Dashboard = () => {
	const [accountLInked, setLinkedAccount] = useState(false);
	const [name, setName] = useState("false");
	const [accountBalance, setAccoungBalance] = useState("");
	const [transaction, setTransactions] = useState("");
	const [nextPage, setNextPage] = useState("");
	const [previousPage, setPreviousPage] = useState("");
	const [paging, setPaging] = useState({});
	const monoConnect = useMemo(() => {
		const monoInstance = new MonoConnect({
			onClose: () => console.log("Widget closed"),
			onLoad: () => console.log("Widget loaded successfully"),
			onSuccess: async ({ code }) => {
				const http = new Http("mono/auth?id=2");
				const { res: id } = await http.post({
					"code": code,
				});
				console.log(id);
				if (id) {
					http.saveId(id);
					setLinkedAccount(true);
					await getLinkedAccounts();
				}
			},
			key: process.env.REACT_APP_MONO_SECRET,
		});

		monoInstance.setup();

		return monoInstance;
	}, []);

	const unlinkAccount = async () => {
		const http = new Http("mono/unlink/account");
		const id = http.getId();
		const res = await http.post({
			"id": id,
		});
		if (res.message) console.log(res.message);
		else setLinkedAccount(true);
		// console.log(res);
	};

	const getLinkedAccounts = async () => {
		const http = new Http("mono/linked");
		const id = http.getId();
		console.log(id);
		if (id) {
			const {
				data: { data },
			} = await http.post({
				"id": id,
			});
			console.log(data);
			if (data.account) {
				setAccoungBalance(data.account.balance);
				setName(data.account.name);
			}
			// if (message) setLinkedAccount(true);
			// else {
			// 	setName(name);
			// 	setAccoungBalance(balance);
			// }
		}
	};

	const getTransctions = async (page = "") => {
		let http;
		if (page !== "") http = new Http("mono/transactions?id" + page);
		else http = new Http("mono/transactions");

		const id = http.getId();
		const res = await http.post({
			"id": id,
		});
		const {
			data: { data, paging },
		} = res;
		// console.log(data);
		console.log(paging);
		if (paging.next) setNextPage(paging.next.split("?page")[1]);
		if (paging.previous) setPreviousPage(paging.previous.split("?page")[1]);
		if (data) {
			setTransactions(data);
			setPaging(paging);
		}
		if (res.message) console.log(res.message);

		// else setLinkedAccount(true);
	};

	useEffect(() => {
		getLinkedAccounts();
		getTransctions();
		// return () => console.clear();
	}, []);

	return (
		// <div className="h-screen w-screen grid grid-cols-5">
		<>
			{!accountLInked ? (
				<div className="h-full w-full col-span-5 md:col-span-4 md:grid grid-cols-3 p-10 md:p-16 md:px-24 overflow-y-auto">
					<div className=" col-span-2  md:pr-36">
						<div className="flex items-center">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestprofilepictures.com%2Fwp-content%2Fuploads%2F2021%2F04%2FCool-Profile-Picture-986x1024.jpg&f=1&nofb=1"
								width="50px"
								height="50px"
								alt=""
								className="rounded-full mr-5"
							/>
							<p>Good morning{`, ${name}` || ""}</p>
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
							<ul className="overflow-y-auto" style={{ maxHeight: "550px" }}>
								{transaction
									? transaction.map((v, i) => (
											<List
												key={v.date + i.toString()}
												icon={<Car className="mr-5" style={{ width: "20px" }} />}
												purpose={v.narration}
												date={`${splitDate(v.date).firstDate} . ${splitDate(v.date).time} . ${
													v.type
												}`}
												amount={`-${v.amount}`}
											/>
									  ))
									: ""}
								<div className="text-center py-3">
									{paging.previous && (
										<button
											className="p-3 border border-gray-200 mr-4"
											onClick={() => getTransctions(previousPage)}
										>
											Previous
										</button>
									)}
									{paging.next && (
										<button
											className="p-3 border border-gray-200"
											onClick={() => getTransctions(nextPage)}
										>
											Next
										</button>
									)}
								</div>
								{/* <List
										icon={<Car className="mr-5 w-11" />}
										purpose="Jumia Food"
										date="11-11-2021 . 10:12am . Credit"
										amount="-1800"
									/> */}
							</ul>
						</div>
					</div>
					{/* <div></div> */}
					<div className="md:pl-24">
						<div className="text-center rounded-lg shadow p-5 mb-10">
							<p className="font-bold">Total Balance</p>
							<h2 className="text-3xl font-bold my-3">
								{accountBalance.toLocaleString("en-US") || 0}
							</h2>
							<h2>Your balance accross all bank</h2>
							<div>
								<Bank className="w-24 mx-auto my-3" />
							</div>
							<button
								onClick={() => unlinkAccount()}
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
				<div className="h-full col-span-5 md:col-span-4 flex justify-center items-center text-white text-center overflow-y-auto">
					<div className="bg-black w-4/6 md:w-3/12  p-10 rounded-lg">
						<Lock className="mx-auto" />
						<h3 className="text-2xl leading:10 md:leading-10">Final Step</h3>
						<p className=" md:leading-10">Link your bank account in seconds</p>
						<button
							onClick={() => monoConnect.open()}
							className="p-4 text-blue-700 bg-white rounded flex mx-auto my-5"
						>
							LINK NOW <Arrow className="mx-2" />
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Dashboard;

const List = ({ icon, purpose, date, amount, amount1 }) => (
	<>
		<li className="flex justify-between items-center w-full  my-5">
			<div className="flex items-center ">
				<div>{icon}</div>
				<p>
					<span className="font-bold">{purpose}</span>

					<span className="block font-light text-gray-400  text-sm py-2"> {date} </span>
				</p>
			</div>
			{amount ? <p className="font-bold">{amount}</p> : <p className="font-light">{amount1}</p>}
		</li>
	</>
);
