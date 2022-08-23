// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dasboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import Signup from "./pages/SignUp";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/dasboard" element={<Sidebar />}>
						<Route index element={<Dashboard />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
