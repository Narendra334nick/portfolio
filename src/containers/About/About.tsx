import React from "react";
import profile from "../../assets/generalImages/narendra.jpeg";
import classes from "../About/About.module.scss";

export default function About(props: any) {
	return (
		<div className={classes[`root`]}>
			<div className={classes[`imageContainer`]}>
				<img src={profile} height={"100%"} width={"100%"} />
			</div>
		</div>
	);
}
