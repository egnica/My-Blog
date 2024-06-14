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
				The warning you're encountering, Warning: Extra attributes from the
				server: class., typically occurs when there is a mismatch between the
				HTML rendered on the server and the HTML rendered on the client. This
				can happen in server-side rendering (SSR) environments like Next.js or
				Gatsby.
			</Fade>
			{newState && (
				<div>
					<p>
						By ensuring that the initial render values are consistent and
						considering the client-side only updates with useEffect, you can
						mitigate the hydration mismatch warning.
					</p>
				</div>
			)}

			<p>
				W3Schools is optimized for learning and training. Examples might be
				simplified to improve reading and learning. Tutorials, references, and
				examples are constantly reviewed to avoid errors, but we cannot warrant
				full correctness of all content. While using W3Schools, you agree to
				have read and accepted our terms of use, cookie and privacy policy.
			</p>
		</>
	);
};
export default Display;
