interface ProjectCardPropType {
	url: string;
}
export default function ProjectCard(props: ProjectCardPropType) {
	const { url } = props;
	return (
		<div>
			<img src={url} alt="Project Img" style={{ height: 350, width: 350 }} />
		</div>
	);
}
