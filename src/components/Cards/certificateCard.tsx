import classes from "./certificateCard.module.scss";

interface CertificateCardPropType {
	title: string;
	issuer: string;
	issuedDate: string;
	expiryDate?: string;
	credentialId?: string;
	credentialUrl?: string;
	skills?: string[];
	badge: string;
	badgeColor: string;
}

export default function CertificateCard(props: CertificateCardPropType) {
	const {
		title,
		issuer,
		issuedDate,
		expiryDate,
		credentialId,
		credentialUrl,
		skills,
		badge,
		badgeColor,
	} = props;

	return (
		<div className={classes["root"]}>
			<div className={`${classes["logoWrap"]} ${classes[badgeColor]}`}>{badge}</div>
			<div className={classes["info"]}>
				<div className={classes["title"]}>{title}</div>
				<div className={classes["subTitle"]}>{issuer}</div>
				<div className={classes["meta"]}>
					{issuedDate}
					{expiryDate ? ` · ${expiryDate}` : ""}
				</div>
				{credentialId && (
					<div className={classes["meta"]}>Credential ID {credentialId}</div>
				)}

				<a
					className={classes["credentialBtn"]}
					href={credentialUrl || undefined}
					target="_blank"
					rel="noopener noreferrer"
					aria-disabled={!credentialUrl}
					onClick={(e) => {
						if (!credentialUrl) e.preventDefault();
					}}
				>
					Show credential ↗
				</a>

				{skills && skills.length > 0 && (
					<div className={classes["skills"]}>
						<span className={classes["skillsLabel"]}>Skills:</span>
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
