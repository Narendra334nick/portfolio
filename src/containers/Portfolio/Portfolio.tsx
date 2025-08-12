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
		<Box sx={{
			padding: { xs: "16px", sm: "24px", md: "32px" },
			marginTop: "24px",
			width: "100%",
			overflow: "hidden"
		}}>
			<Box
				component="h3"
				sx={{
					fontSize: { xs: 24, sm: 26 },
					fontWeight: 600,
					pb: 3,
					pt: 1,
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
				Projects
			</Box>
			<Divider />

			<Box
				display="flex"
				justifyContent="center"
				sx={{
					width: "100%",
					maxWidth: "100vw" // Ensure content doesn't exceed viewport width
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, sm: 2.5, md: 3 }} // Reduced spacing
					sx={{
						width: "100%",
						margin: "0",
						padding: "0 8px" // Add some padding on the sides
					}}
				>
					{data.map((item: any, index: number) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={index}
							sx={{
								display: "flex",
								justifyContent: "center",
								width: "100%", // Added width
							}}
						>
							<ProjectCard
								url={item.imageUrl ? item.imageUrl : url}
								name={item.name}
								link={item.projectLink}
								description={item.description}
								techStack={item.techStack}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
