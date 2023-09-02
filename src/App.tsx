import "./App.css";
import LandingPage from "./containers/LandingPage/LandingPage";
//import ErrorPage from "./containers/Core/Error";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import colors from "./themes/colors";

function App() {
	return (
		<div className="App" style={{ background: colors.backGround }}>
			{/* <LandingPage /> */}
			<HashRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					{/* 👈 Renders at /#/app/ */}
					<Route path="/layout/*" element={<Layout />} />
					{/* 👈 Renders at /#/app/ */}
				</Routes>
			</HashRouter>
			{/* <RouterProvider router={router} /> */}
		</div>
	);
}

export default App;
