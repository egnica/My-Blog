import styles from "./page.module.css";

import Image from "next/image";

export default function Home() {
	const timeAsDev = () => {
		const date = new Date();

		let month = date.getMonth();
		let year = date.getFullYear();

		const startMonth = 4;
		const startYear = 2020;

		return;
	};

	return (
		<>
			<h1>Late Start Dev</h1>

			<div className={styles.picture_text_contain}>
				<Image
					style={{borderRadius: "20px"}}
					className={styles.image_contain}
					width={1825}
					height={2499}
					alt='Picture of Nicholas Egner'
					layout='responsive'
					priority={true}
					src='https://latestartbucket.s3.us-east-2.amazonaws.com/nick-pic.png'
				/>
				<div className={styles.text_button_contain}>
					<h2>Welcome to my blog</h2>
					<br />
					<p>
						Hello! My name is
						<a href='https://www.linkedin.com/in/nicholas-egner/'>
							Nicholas Egner
						</a>
						. I have been a profesional web developer for {timeAsDev()}
						<br />
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<button>TEST</button>
				</div>
			</div>
		</>
	);
}
