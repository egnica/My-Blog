import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1>Late Start Dev</h1>
			<h2>test</h2>
			<p>Testing this stufffff</p>
			<div style={{position: "relative", width: "100%", height: "auto"}}>
				<Image
					alt='garden tree'
					width={"500"}
					height={"400"}
					src='https://latestartbucket.s3.us-east-2.amazonaws.com/park-tree.png'
				/>
			</div>
		</>
	);
}
