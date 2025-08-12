import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import classes from "./skillCards.module.scss";
import StarRateIcon from "@mui/icons-material/StarRate";
import { yellow } from "@mui/material/colors";

const SkillCards = (props: any) => {
	const { skillName, rating, exp } = props;

	const MyComponent = (props: any) => {
		const { rating } = props;
		const renderTags = () => {
			const tags = [];
			for (let i = 0; i < rating; i++) {
				tags.push(<StarRateIcon style={{ color: `${yellow[600]}` }} />);
			}
			return tags;
		};

		return <div>{renderTags()}</div>;
	};

	return (
		<Card
			sx={{
				display: "flex",
				p: 2,
				height: "100%",
				minHeight: "120px",
				boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
				"&:hover": {
					boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
					transform: "translateY(-2px)",
				},
				transition: "all 0.3s ease",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					width: "30%",
					justifyContent: "center",
				}}
			>
				<img
					src={props.icon}
					alt={props.skillName}
					style={{
						width: "60px",
						height: "60px",
						objectFit: "contain",
					}}
				/>
			</Box>

			<CardContent
				sx={{
					flex: "1",
					p: "8px !important",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="h6"
					sx={{
						fontSize: { xs: "1rem", sm: "1.1rem" },
						fontWeight: 600,
						mb: 1,
					}}
				>
					{props.skillName}
				</Typography>

				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						fontSize: { xs: "0.8rem", sm: "0.9rem" },
					}}
				>
					Experience: {props.exp}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default SkillCards;
