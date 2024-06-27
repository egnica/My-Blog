import styles from "./page.module.css";
import Github from "./Logos/Github";
import Linkedin from "./Logos/Linkedin";
import Spotify from "./Logos/Spotify";
import Twitter from "./Logos/Twitter";
import Link from "next/link";
import Youtube from "./Logos/Youtube";
const Footer = () => {
	const d = new Date();
	let year = d.getFullYear();

	return (
		<div className={styles.footer_logo_container}>
			<div>
				<Link href='https://github.com/egnica' target='_blank'>
					<Github />
				</Link>

				<Link
					href='https://www.linkedin.com/in/nicholas-egner/'
					target='_blank'
				>
					<Linkedin />
				</Link>
				<Link href='https://open.spotify.com/user/1224553002?si=c3d54db378354cf5'>
					<Spotify />
				</Link>
				<Link href='https://x.com/NicholasEgner' target='_blank'>
					<Twitter />
				</Link>
				<Link href='https://www.youtube.com/@NickEgnerVideo' target='_blank'>
					<Youtube />
				</Link>
			</div>

			<div className={styles.footer_text_container}>
				<p>
					I created this blog using Next JS. I am currently hosting on AWS
					Amplify. Are you someone who wants to chat? I can tell you more about
					it all, just hit me up!
				</p>
				<p>
					<a href='mailto:nick@nicholasegner.com'>My Email Address</a>
				</p>
				<p> &copy; Nicholas Egner {year}</p>
			</div>
		</div>
	);
};
export default Footer;
