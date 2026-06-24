import React from "react";
import classes from "./skillCards.module.scss";

const SkillCards = (props: any) => {
	const { skillName, icon, exp } = props;

	return (
		<div className={classes.root}>
			<div className={classes.inner}>
				<div className={classes.iconWrap}>
					<img src={icon} alt={skillName} className={classes.icon} />
				</div>
				<div className={classes.info}>
					<div className={classes.skillName}>{skillName}</div>
					<span className={classes.expBadge}>{exp}</span>
				</div>
			</div>
		</div>
	);
};

export default SkillCards;
