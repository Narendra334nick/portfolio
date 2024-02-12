import React from "react";
import ProjectCard from "../../components/Cards/projectCard";
import { Box, Grid } from "@mui/material";
import url from "../../assets/generalImages/projects.jpg";
import projects from "../../json/projects.json";
import c2c from "../../assets/projectImages/c2c.png";
import vega from "../../assets/projectImages/vega.png";
import movie from "../../assets/projectImages/movie.png";

export default function Portfolio() {
	const [data, setData] = React.useState<any>([]);

	React.useEffect(() => {
		projects.projects[0].imageUrl = c2c;
		projects.projects[1].imageUrl = vega;
		projects.projects[2].imageUrl = movie;
		setData(projects.projects);
	}, []);

	return (
		<div style={{ padding: "0% 2% 0% 2%" }}>
			<Box fontSize={26} fontWeight={600} pb={2}>
				{/* <u>Projects</u> */}
			</Box>
			<Box>
				<Grid container spacing={2}>
					{data.map((item: any) => {
						return (
							<Grid item xs={12} sm={6} md={4} lg={4}>
								<ProjectCard
									url={item.imageUrl ? item.imageUrl : url}
									name={item.name}
									link={item.projectLink}
									description={item.description}
									techStack={item.techStack}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
}
