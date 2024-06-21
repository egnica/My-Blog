"use client";
import {useEffect, useState} from "react";
import styles from "./page.module.css";

const Fade = ({children, transfer}) => {
	const [fade, setFade] = useState(transfer);
	const [delay, setDelay] = useState(transfer);

	// const fadeFunction = (transfer) => {
	// 	setFade(transfer);
	// 	fade
	// 		? setTimeout(() => {
	// 				setDelay(transfer);
	// 		  }, 1000)
	// 		: setDelay(transfer);
	// };

	// useEffect(() => {
	// 	fadeFunction(transfer);
	// }, [transfer]);

	useEffect(() => {
		let timeoutId;

		const fadeFunction = (transfer) => {
			setFade(transfer);
			fade
				? (timeoutId = setTimeout(() => {
						setDelay(transfer);
				  }, 1000))
				: setDelay(transfer);
		};

		fadeFunction(transfer);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [transfer]);

	const renderStyle = () => {
		return fade ? styles.fade_in : styles.fade_out;
	};

	return (
		<>
			{delay && (
				<div className={renderStyle()}>
					<div style={{overflow: "hidden"}}>{children}</div>
				</div>
			)}
		</>
	);
};
export default Fade;
