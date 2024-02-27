import React from "react";
import classes from "../Header/Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
			<div
				className={
					location == "/layout/portfolio"
						? classes["selected"]
						: classes["subRoot"]
				}
				onClick={() => navigation("/layout/portfolio")}
			>
				My Work
			</div>
			<div
				className={
					location == "/layout/about" ? classes["selected"] : classes["subRoot"]
				}
				onClick={() => navigation("/layout/about")}
			>
				About
			</div>
			{/* <div
				className={classes["subRoot"]}
				onClick={() => navigation("/layout/contact")}
			>
				Contact
			</div> */}
		</div>
	);
}
