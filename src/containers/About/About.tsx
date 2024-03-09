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
import NextJsLogo from "../../assets/generalImages/nextjs.png";

export default function About(props: any) {
	const skillArray: any = [
		{
			skillName: "Javascript",
			icon: JavaScriptLogo,
			rating: 4,
			exp: "4+ years",
		},
		{
			skillName: "ReactJS",
			icon: ReactLogo,
			rating: 4,
			exp: "4+ years",
		},
		{
			skillName: "NodeJS",
			icon: NodeJSLogo,
			rating: 4,
			exp: "4+ years",
		},
		{
			skillName: "Typescript",
			icon: TypeScriptLogo,
			rating: 4,
			exp: "4+ years",
		},
		{
			skillName: "Mysql",
			icon: MySqlLogo,
			rating: 4,
			exp: "4+ years",
		},
		{
			skillName: "NextJS",
			icon: NextJsLogo,
			rating: 3,
			exp: "4+ years",
		},
	];
	return (
		<div className={classes[`root`]}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6} md={4} lg={4}>
					<div className={classes[`left-header`]}>
						<h2>About Me</h2>
						<h3>
							<Box style={{ textAlign: "right" }}>Narendra Pratap Singh</Box>
							<Box style={{ textAlign: "right" }}>
								npratapsingh999@gmail.com
							</Box>
							<Box style={{ textAlign: "right" }}>8439723546</Box>
						</h3>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={8} lg={8}>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={3} md={3} lg={3}>
							{/* <div></div> */}
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
							<Box textAlign={"left"}>
								"Hello, I'm <b>Narendra,</b> a passionate and dedicated
								professional with a profound interest in technology and
								innovation. With a solid background in ReactJS, Node.js, and
								MySQL, I thrive in dynamic environments where creativity and
								problem-solving are paramount. Whether it's developing
								cutting-edge software solutions, crafting compelling content, or
								driving strategic initiatives, I approach each challenge with
								enthusiasm and a commitment to excellence.
								<Box>
									My journey in Software Engineering has equipped me with a
									diverse skill set encompassing HTML, CSS, ReactJS, Node.js,
									JavaScript, TypeScript, MySQL, and MongoDB. I leverage these
									skills to deliver impactful results and drive projects
									forward. I am particularly excited about exploring
									technologies like Docker, CI/CD, and more, to further enhance
									my expertise and contribute to innovative solutions.
								</Box>{" "}
								Let's connect and explore how we can collaborate to achieve our
								goals together."
							</Box>
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
										exp={item.exp}
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
