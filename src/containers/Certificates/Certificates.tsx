import classes from "./Certificates.module.scss";
import CertificateCard from "../../components/Cards/certificateCard";
import certificates from "../../json/certificates.json";

export default function Certificates() {
	return (
		<div className={classes["root"]}>
			<div className={classes["panel"]}>
				<div className={classes["heading"]}>Certificates</div>
				{certificates.certificates.map((item, index) => (
					<CertificateCard
						key={index}
						title={item.title}
						issuer={item.issuer}
						issuedDate={item.issuedDate}
						expiryDate={item.expiryDate}
						credentialId={item.credentialId}
						skills={item.skills}
						badge={item.badge}
						badgeColor={item.badgeColor}
					/>
				))}
			</div>
		</div>
	);
}
