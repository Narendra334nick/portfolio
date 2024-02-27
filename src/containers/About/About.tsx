import React from "react";
import profile from "../../assets/generalImages/narendra.jpeg";
import classes from "../About/About.module.scss";
import { Grid } from "@mui/material";
import SkillCards from "../../components/Cards/skillCards";
import { Box } from "@material-ui/core";
import ReactLogo from "../../assets/generalImages/react2.png";
import JavaScriptLogo from "../../assets/generalImages/JavaScript-logo.png";
import NodeJSLogo from "../../assets/generalImages/node-js-icon-454x512-nztofx17.png";
import TypeScriptLogo from "../../assets/generalImages/typescript.png";
import MySqlLogo from "../../assets/generalImages/Database-mysql.svg.png";

export default function About(props: any) {
	const skillArray: any = [
		{
			skillName: "Javascript",
			icon: JavaScriptLogo,
			rating: 4,
		},
		{
			skillName: "ReactJS",
			icon: ReactLogo,
			rating: 4,
		},
		{
			skillName: "NodeJS",
			icon: NodeJSLogo,
			rating: 4,
		},
		{
			skillName: "Typescript",
			icon: TypeScriptLogo,
			rating: 4,
		},
		{
			skillName: "Mysql",
			icon: MySqlLogo,
			rating: 4,
		},
	];
	return (
		<div className={classes[`root`]}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6} md={4} lg={4}>
					<div className={classes[`left-header`]}>
						<h2>About Me</h2>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={8} lg={8}>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={3} md={3} lg={3}>
							<div className={classes[`imageContainer`]}>
								<img src={profile} height={"100%"} width={"100%"} />
							</div>
						</Grid>
						<Grid
							item
							xs={12}
							sm={9}
							md={9}
							lg={9}
							display={"flex"}
							alignItems={"center"}
							justifyContent={"flex-start"}
						>
							<p>
								"Hello, <b>I'm Narendra,</b> a passionate and dedicated
								professional with a deep interest in technology and innovation.
								With a background in <b>ReactJS,NodeJD,MySql</b>. I thrive in
								dynamic environments where creativity and problem-solving are
								key. Whether it's developing cutting-edge software solutions,
								crafting compelling content, or driving strategic initiatives, I
								approach each challenge with enthusiasm and a commitment to
								excellence. My journey in [Your Field] has equipped me with a
								diverse skill set, including [mention any relevant skills or
								expertise], which I leverage to deliver impactful results. I am
								excited about the opportunity to [mention what you're looking
								forward to, such as collaborating on new projects, contributing
								to a team, etc.]. Let's connect and explore how we can work
								together to achieve our goals."
							</p>
						</Grid>
					</Grid>
					<h2>Key Skills</h2>
					<Grid container spacing={1}>
						{skillArray.map((item: any) => {
							return (
								<Grid item xs={12} sm={6} md={6} lg={6}>
									<SkillCards
										skillName={item.skillName}
										icon={item.icon}
										rating={item.rating}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
