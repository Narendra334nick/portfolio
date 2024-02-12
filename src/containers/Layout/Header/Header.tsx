import React from "react";
import classes from "../Header/Header.module.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	const navigation = (link: string) => {
		navigate(link);
	};
	return (
		<div className={classes["root"]}>
			<div className={classes["subRoot"]} onClick={() => navigation("/")}>
				Home
			</div>
			<div
				className={classes["subRoot"]}
				onClick={() => navigation("/layout/portfolio")}
			>
				My Work
			</div>
			<div
				className={classes["subRoot"]}
				onClick={() => navigation("/layout/about")}
			>
				About
			</div>
			<div
				className={classes["subRoot"]}
				onClick={() => navigation("/layout/contact")}
			>
				Contact
			</div>
		</div>
	);
}
