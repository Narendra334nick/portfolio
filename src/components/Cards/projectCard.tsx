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
			<div className={classes["imageConainer"]}>
				<img
					src={url}
					alt="Project Img"
					style={{ height: 350, width: 350 }}
					onClick={handleClick}
				/>
				<div className={classes["overlay"]}>
					<div className={classes["overlay-text"]}>
						<div className={classes["techStack"]}>{techStack}</div>
						<div onClick={handleClick} className={classes["learnMore"]}>
							LEARN MORE
						</div>
					</div>
				</div>
				<div>{name && name}</div>
				<div>{description && description}</div>
			</div>
		</div>
	);
}
