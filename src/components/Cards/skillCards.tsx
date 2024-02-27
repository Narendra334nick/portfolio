import React from "react";
import { Grid } from "@mui/material";
import classes from "./skillCards.module.scss";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Box } from "@material-ui/core";

const SkillCards = (props: any) => {
	const { skillName, rating } = props;

	const MyComponent = (props: any) => {
		const { rating } = props;
		const renderTags = () => {
			const tags = [];
			for (let i = 0; i < rating; i++) {
				tags.push(<StarRateIcon />);
			}
			return tags;
		};

		return <div>{renderTags()}</div>;
	};

	return (
		<div className={classes["root"]}>
			<Grid container spacing={2} p={2}>
				<Grid sm={2} md={2} lg={2} p={2}>
					<img src={props.icon} width={80} height={80} />
				</Grid>
				<Grid
					sm={10}
					md={10}
					lg={10}
					textAlign={"left"}
					p={1}
					display={"flex"}
					justifyContent={"flex-start"}
				>
					<Box>
						<h3>
							<b>{skillName}</b>
						</h3>
					</Box>
					<Box>
						<MyComponent rating={rating} />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
export default SkillCards;
