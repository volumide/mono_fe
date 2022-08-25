// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dasboard";
import Setting from "./pages/Setting";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import Signup from "./pages/SignUp";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/dashboard" element={<Sidebar />}>
						<Route path="view" key="dasboard" element={<Dashboard />} />
						<Route path="profile" key="profile" element={<Setting />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
