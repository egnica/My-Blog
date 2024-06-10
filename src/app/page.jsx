import styles from "./page.module.css";

import Image from "next/image";

export default function Home() {
	const coverImage =
		"https://latestartbucket.s3.us-east-2.amazonaws.com/park-tree.png";

	return (
		<>
			<h1>Late Start Dev</h1>
			<h2>test</h2>
			<p>Testing this stufffff</p>
			<div
				style={{
					position: "relative",
					width: "500px",
					height: "375px",
				}}
			>
				<Image alt='garden tree' fill priority={true} src={coverImage} />
			</div>
		</>
	);
}
