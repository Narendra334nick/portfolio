import classes from "../LandingPage/LandingPage.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import filler from "../../assets/backgrounds/filler.png";

export default function LandingPage() {
	const navigate = useNavigate();
	const viewMyWorks = () => {
		navigate("/layout/portfolio");
	};

	return (
		<div
			className={classes["container"]}
			style={{
				backgroundImage: `url(${filler})`,
			}}
		>
			<Box p={1}>
				<Box p={1}>
					Hello, I'm{" "}
					<Box
						component="span"
						fontWeight="bold"
						sx={{
							background:
								"linear-gradient(90deg, #FF0000, #0066FF, #FFA500, #FF69B4, #00FF00)",
							backgroundSize: "200% auto",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
							animation: "gradient 5s linear infinite",
							"@keyframes gradient": {
								"0%": {
									backgroundPosition: "0% center",
								},
								"100%": {
									backgroundPosition: "200% center",
								},
							},
						}}
					>
						Narendra Pratap Singh
					</Box>
					.
				</Box>
				<Box p={1}>I'm a fullstack web-developer.</Box>
				<Box p={0.5} m={1}>
					<span
						className={classes["buttonContainer"]}
						onClick={() => viewMyWorks()}
					>
						View my works <ArrowForwardIcon />
					</span>
				</Box>
			</Box>
		</div>
	);
}
