import React from "react";
import profile from "../../assets/generalImages/dp.jpeg";
import classes from "../About/About.module.scss";
import { Grid, Box } from "@mui/material";
import SkillCards from "../../components/Cards/skillCards";
import ReactLogo from "../../assets/generalImages/react2.png";
import JavaScriptLogo from "../../assets/generalImages/JavaScript-logo.png";
import NodeJSLogo from "../../assets/generalImages/node-js-icon-454x512-nztofx17.png";
import TypeScriptLogo from "../../assets/generalImages/typescript.png";
import MySqlLogo from "../../assets/generalImages/Database-mysql.svg.png";
import NextJsLogo from "../../assets/generalImages/nextjs.png";

const gradientText = {
	background: 'linear-gradient(135deg, #667eea, #764ba2, #eb4560, #f093fb, #4facfe, #667eea)',
	backgroundSize: '300% auto',
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	color: 'transparent',
	animation: 'gradientShift 5s ease infinite',
	'@keyframes gradientShift': {
		'0%':   { backgroundPosition: '0% 50%' },
		'50%':  { backgroundPosition: '100% 50%' },
		'100%': { backgroundPosition: '0% 50%' },
	},
};

export default function About() {
	const skillArray = [
		{ skillName: "Javascript", icon: JavaScriptLogo, exp: "4+ years" },
		{ skillName: "ReactJS",    icon: ReactLogo,      exp: "4+ years" },
		{ skillName: "NodeJS",     icon: NodeJSLogo,     exp: "4+ years" },
		{ skillName: "Typescript", icon: TypeScriptLogo, exp: "4+ years" },
		{ skillName: "MySQL",      icon: MySqlLogo,      exp: "4+ years" },
		{ skillName: "NextJS",     icon: NextJsLogo,     exp: "4+ years" },
	];

	return (
		<div className={classes.root}>
			<Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>

				{/* ── Left / Main column ── */}
				<Grid item xs={12} md={8}>

					{/* Profile hero */}
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							alignItems: { xs: "center", sm: "flex-start" },
							gap: { xs: 3, sm: 4 },
							mb: 4,
						}}
					>
						{/* Gradient ring profile image */}
						<div className={classes.profileRing}>
							<img
								src={profile}
								alt="Narendra Pratap Singh"
								className={classes.profileImage}
							/>
						</div>

						{/* Name + title + tagline */}
						<Box
							sx={{
								textAlign: { xs: "center", sm: "left" },
								pt: { sm: 1 },
							}}
						>
							<Box
								component="h1"
								sx={{
									fontSize: { xs: "1.6rem", sm: "2rem" },
									fontWeight: 800,
									m: 0,
									mb: 0.5,
									...gradientText,
								}}
							>
								Narendra Pratap Singh
							</Box>

							<Box
								component="p"
								sx={{
									m: 0,
									mb: 1.5,
									fontSize: { xs: "0.9rem", sm: "1rem" },
									fontWeight: 600,
									letterSpacing: "1.5px",
									textTransform: "uppercase",
									color: "rgba(102,126,234,0.75)",
								}}
							>
								Full Stack Developer
							</Box>

							<Box
								sx={{
									display: "flex",
									gap: 1,
									flexWrap: "wrap",
									justifyContent: { xs: "center", sm: "flex-start" },
								}}
							>
								{["ReactJS", "Node.js", "TypeScript", "MySQL"].map((tag) => (
									<Box
										key={tag}
										sx={{
											fontSize: "0.72rem",
											fontWeight: 700,
											letterSpacing: "1px",
											textTransform: "uppercase",
											color: "#667eea",
											background: "rgba(102,126,234,0.1)",
											border: "1px solid rgba(102,126,234,0.4)",
											borderRadius: "20px",
											px: 1.5,
											py: 0.4,
										}}
									>
										{tag}
									</Box>
								))}
							</Box>
						</Box>
					</Box>

					{/* Bio card */}
					<div className={classes.bioCard}>
						I'm a passionate full-stack developer with a solid background in{" "}
						<b>ReactJS, Node.js, and MySQL</b>, thriving in dynamic environments
						where creativity and problem-solving go hand in hand. My journey in
						software engineering has equipped me with a diverse skill set spanning{" "}
						<b>HTML, CSS, ReactJS, Node.js, JavaScript, TypeScript, MySQL, and
						MongoDB</b>. I deliver impactful results and am particularly excited
						about exploring technologies like <b>Docker and CI/CD</b> to further
						enhance my expertise. Let's connect and build something great together.
					</div>

					{/* Key Skills */}
					<Box sx={{ mt: { xs: 5, sm: 6 } }}>
						<Box
							component="h2"
							sx={{
								mb: 3,
								fontSize: { xs: "1.4rem", sm: "1.6rem" },
								fontWeight: 800,
								letterSpacing: "2px",
								textTransform: "uppercase",
								textAlign: { xs: "center", sm: "left" },
								...gradientText,
							}}
						>
							Key Skills
						</Box>

						<Grid container spacing={{ xs: 2, sm: 2.5 }}>
							{skillArray.map((item, index) => (
								<Grid item xs={12} sm={6} key={index} sx={{ display: "flex" }}>
									<SkillCards
										skillName={item.skillName}
										icon={item.icon}
										exp={item.exp}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</Grid>

				{/* ── Right sidebar ── */}
				<Grid
					item
					xs={12}
					md={4}
					sx={{ display: { xs: "none", md: "block" } }}
				>
					<div className={classes.sidebarPanel}>
						<div className={classes.sidebarTitle}>About Me</div>
						<div className={classes.sidebarInfo}>
							<div className={classes.sidebarName}>Narendra Pratap Singh</div>
							<div className={classes.sidebarDetail}>npratapsingh999@gmail.com</div>
							<div className={classes.sidebarDetail}>+91 8439723546</div>
						</div>
					</div>
				</Grid>

			</Grid>
		</div>
	);
}
