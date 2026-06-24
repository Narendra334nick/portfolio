import classes from "./projectCard.module.scss";
interface ProjectCardPropType {
	url: string;
	name: string;
	link?: string;
	description?: string;
	techStack?: string;
}
export default function ProjectCard(props: ProjectCardPropType) {
	const { url, name, link, description, techStack } = props;
	const handleClick = () => {
		window.open(link, "_blank");
	};
	return (
		<div className={classes["root"]}>
			<div className={classes["inner"]}>
				<div className={classes["imageConainer"]}>
					<img
						src={url}
						alt="Project Img"
						className={classes["image"]}
						onClick={handleClick}
					/>
					<div className={classes["overlay"]}>
						<div className={classes["overlay-text"]}>
							{techStack && (
								<div className={classes["techStack"]}>{techStack}</div>
							)}
							<div className={classes["name"]}>{name}</div>
							{description && (
								<div className={classes["description"]}>
									{description.slice(0, 80)}
								</div>
							)}
							<div onClick={handleClick} className={classes["learnMore"]}>
								Learn More
							</div>
						</div>
					</div>
				</div>

				<div className={classes["cardFooter"]}>
					<div className={classes["footerName"]}>{name}</div>
					{techStack && (
						<div className={classes["footerTech"]}>{techStack}</div>
					)}
				</div>
			</div>
		</div>
	);
}
