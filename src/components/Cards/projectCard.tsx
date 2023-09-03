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
					className={classes["image"]}
					onClick={handleClick}
				/>
				<div className={classes["overlay"]}>
					<div className={classes["overlay-text"]}>
						<div className={classes["techStack"]}>{techStack}</div>
						<div className={classes["name"]}>{name && name}</div>
						<div className={classes["description"]}>
							{description && description.slice(0, 50)}
						</div>
						<div onClick={handleClick} className={classes["learnMore"]}>
							LEARN MORE
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
