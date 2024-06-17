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
			<Fade transfer={fade}>
				Using dangerouslySetInnerHTML in React can be risky if not handled
				properly, but it&apos;s not inherently bad. It&apos;s a method used to
				set HTML content from code directly within a React component, allowing
				developers to inject raw HTML into the DOM. Here are some key points to
				consider
			</Fade>
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
