import React from "react";
import ProjectCard from "../../components/Cards/projectCard";
import { Box } from "@mui/material";
import url from "../../assets/generalImages/projects.jpg";

export default function Portfolio() {
	return (
		<div>
			Portfolio
			<Box display={"flex"} flexGrow={1}>
				<ProjectCard url={url} />
				<ProjectCard url={url} />
				<ProjectCard url={url} />
				<ProjectCard url={url} />
				<ProjectCard url={url} />
			</Box>
		</div>
	);
}
