import React from "react";
import classes from "../Header/Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navItems = [
	{ label: "My Work", path: "/layout/portfolio" },
	{ label: "Experience", path: "/layout/experience" },
	{ label: "Certificates", path: "/layout/certificates" },
	{ label: "About", path: "/layout/about" },
];

export default function Header() {
	const location = useLocation().pathname;
	const navigate = useNavigate();
	const navigation = (link: string) => {
		navigate(link);
	};
	return (
		<div className={classes["root"]}>
			<div className={classes["subRoot"]} onClick={() => navigation("/")}>
				Home
			</div>
			{navItems.map((item) => (
				<div
					key={item.path}
					className={
						location === item.path ? classes["selected"] : classes["subRoot"]
					}
					onClick={() => navigation(item.path)}
				>
					{item.label}
				</div>
			))}
			{/* <div
				className={classes["subRoot"]}
				onClick={() => navigation("/layout/contact")}
			>
				Contact
			</div> */}
		</div>
	);
}
