import React from "react";
import ProjectCard from "../../components/Cards/projectCard";
import { Box } from "@mui/material";
import url from "../../assets/generalImages/projects.jpg";

export default function Portfolio() {
	const link = "https://c2c.vega-hr.com";
	return (
		<div>
			Portfolio
			<Box display={"flex"} flexGrow={1}>
				<ProjectCard
					url={url}
					name={"C2C"}
					link={link}
					description={"description"}
					techStack="Reactjs / Nodejs"
				/>
				<ProjectCard
					url={url}
					name={"C2C"}
					link={link}
					description={"description"}
					techStack="Reactjs / Nodejs"
				/>
				{/* <ProjectCard url={url} />
				<ProjectCard url={url} />
				<ProjectCard url={url} />
				<ProjectCard url={url} /> */}
			</Box>
		</div>
	);
}
