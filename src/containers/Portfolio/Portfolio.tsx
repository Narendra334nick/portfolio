import React from "react";
import ProjectCard from "../../components/Cards/projectCard";
import { Box, Grid } from "@mui/material";
import url from "../../assets/generalImages/projects.jpg";
import projects from "../../json/projects.json";
import c2c from "../../assets/projectImages/c2c.png";
import vega from "../../assets/projectImages/vega.png";
import movie from "../../assets/projectImages/movie.png";
import portfolio from "../../assets/projectImages/portfolio.png";
import Divider from "@mui/material/Divider";

export default function Portfolio() {
	const [data, setData] = React.useState<Array<any>>([]);

	React.useEffect(() => {
		projects.projects[0].imageUrl = c2c;
		projects.projects[1].imageUrl = vega;
		projects.projects[2].imageUrl = movie;
		projects.projects[3].imageUrl = portfolio;
		setData(projects.projects);
	}, []);

	return (
		<div style={{ padding: "0% 2% 0% 2%" }}>
			<Box fontSize={26} fontWeight={600} pb={2} pt={1}>
				<h3>Projects</h3>
				<Divider />
			</Box>
			<Box display={"flex"} justifyContent={"center"}>
				<Grid
					container
					spacing={0}
					width={"80%"}
					display={"flex"}
					justifyContent={"center"}
				>
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
