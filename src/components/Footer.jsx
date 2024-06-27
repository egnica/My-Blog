import styles from "./page.module.css";
import Github from "./Logos/Github";
import Linkedin from "./Logos/Linkedin";
const Footer = () => {
	return (
		<>
			<div className={styles.footer_logo_container}>
				<Github />
				<Linkedin fill='red' />
			</div>
		</>
	);
};
export default Footer;
