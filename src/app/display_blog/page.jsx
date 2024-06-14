"use client";
import styles from "./page.module.css";
import {useState} from "react";
import Fade from "@/components/Fade";

const Display = () => {
	const [fade, setFade] = useState(false);

	const [newState, setNewState] = useState(false);

	const clickHandler = () => {
		setFade(!fade);
	};

	return (
		<>
			<h2></h2>

			<div className={styles.enterBtn} onClick={clickHandler}>
				Fade
			</div>
			<div className={styles.enterBtn} onClick={() => setNewState(!newState)}>
				Standard
			</div>
			<Fade transfer={fade}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
				amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</Fade>
			{newState && (
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			)}

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</>
	);
};
export default Display;
