import classes from "./experienceCard.module.scss";

interface ExperienceCardPropType {
	role: string;
	company: string;
	employmentType: string;
	duration: string;
	location: string;
	bullets?: string[];
	skills?: string[];
}

export default function ExperienceCard(props: ExperienceCardPropType) {
	const { role, company, employmentType, duration, location, bullets, skills } = props;

	return (
		<div className={classes["root"]}>
			<div className={classes["logoWrap"]}>{company.charAt(0)}</div>
			<div className={classes["info"]}>
				<div className={classes["title"]}>{role}</div>
				<div className={classes["subTitle"]}>
					{company} · {employmentType}
				</div>
				<div className={classes["meta"]}>{duration}</div>
				<div className={classes["meta"]}>{location}</div>

				{bullets && bullets.length > 0 && (
					<ul className={classes["bullets"]}>
						{bullets.map((bullet, index) => (
							<li key={index}>{bullet}</li>
						))}
					</ul>
				)}

				{skills && skills.length > 0 && (
					<div className={classes["skills"]}>
						{skills.map((skill, index) => (
							<span key={index} className={classes["skillTag"]}>
								{skill}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
