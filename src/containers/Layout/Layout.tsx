import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import Certificates from "../Certificates/Certificates";
import Experience from "../Experience/Experience";

export default function Layout() {
	return (
		<div style={{ background: "white", height: "100%" }}>
			<Header />
			<div style={{ color: "black", marginTop: "4%" }}>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route path="/experience" element={<Experience />} />
					{/* <Route path="/layout" element={<Contact />}> */}
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</div>
		</div>
	);
}
