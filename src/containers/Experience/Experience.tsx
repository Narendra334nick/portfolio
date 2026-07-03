import classes from "./Experience.module.scss";
import ExperienceCard from "../../components/Cards/experienceCard";
import experience from "../../json/experience.json";

export default function Experience() {
	return (
		<div className={classes["root"]}>
			<div className={classes["panel"]}>
				<div className={classes["heading"]}>Experience</div>
				{experience.experience.map((item, index) => (
					<ExperienceCard
						key={index}
						role={item.role}
						company={item.company}
						employmentType={item.employmentType}
						duration={item.duration}
						location={item.location}
						bullets={item.bullets}
						skills={item.skills}
					/>
				))}
			</div>
		</div>
	);
}
