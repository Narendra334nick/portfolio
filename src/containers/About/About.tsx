import React from "react";
import profile from "../../assets/generalImages/dp.jpeg";
import classes from "../About/About.module.scss";
import { Grid } from "@mui/material";
import SkillCards from "../../components/Cards/skillCards";
import { Box } from "@mui/material";
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
			<Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
				{/* Main content grid */}
				<Grid item xs={12} md={8}>
					{/* Profile and Bio section */}
					<Grid
						container
						spacing={{ xs: 2, sm: 3 }}
						alignItems="center"
					>
						{/* Profile Image */}
						<Grid
							item
							xs={12}
							sm={4}
							md={3}
							sx={{
								display: "flex",
								justifyContent: { xs: "center", sm: "flex-start" },
							}}
						>
							<div className={classes[`imageContainer`]}>
								<img
									src={profile}
									alt="Profile"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</div>
						</Grid>

						{/* Bio Text */}
						<Grid item xs={12} sm={8} md={9}>
							<Box
								sx={{
									textAlign: { xs: "center", sm: "left" },
									padding: { xs: "16px", sm: "0" },
									fontSize: { xs: "0.9rem", sm: "1rem" },
									color: "text.primary",
									"& b": { fontWeight: 600 },
								}}
							>
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

					{/* Skills Section */}
					<Box sx={{ mt: { xs: 4, sm: 5 } }}>
						<Box
							component="h2"
							sx={{
								mb: 3,
								fontSize: { xs: "1.5rem", sm: "1.75rem" },
								textAlign: { xs: "center", sm: "left" },
								fontWeight: 600,
								background: 'linear-gradient(90deg, #FF0000, #0066FF, #FFA500, #FF69B4, #00FF00)',
								backgroundSize: '200% auto',
								backgroundClip: 'text',
								WebkitBackgroundClip: 'text',
								color: 'transparent',
								textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
								letterSpacing: '0.5px',
								animation: 'gradient 5s linear infinite',
								'@keyframes gradient': {
									'0%': {
										backgroundPosition: '0% center'
									},
									'100%': {
										backgroundPosition: '200% center'
									}
								}
							}}
						>
							Key Skills
						</Box>
						<Grid
							container
							spacing={{ xs: 2, sm: 2.5, md: 3 }}
						>
							{skillArray.map((item: any, index: number) => (
								<Grid
									item
									xs={12}
									sm={6}
									key={index}
								>
									<SkillCards
										skillName={item.skillName}
										icon={item.icon}
										rating={item.rating}
										exp={item.exp}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</Grid>

				{/* Right Sidebar */}
				<Grid
					item
					xs={12}
					md={4}
					sx={{
						display: { xs: "none", md: "block" }, // Hide on mobile and tablet
					}}
				>
					<div className={classes[`left-header`]}>
						<h2>About Me</h2>
						<h3>
							<Box sx={{ textAlign: "right" }}>
								Narendra Pratap Singh
							</Box>
							<Box sx={{ textAlign: "right" }}>
								npratapsingh999@gmail.com
							</Box>
							<Box sx={{ textAlign: "right" }}>
								8439723546
							</Box>
						</h3>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
