"use client";
import {useEffect, useState} from "react";
import styles from "./page.module.css";

const Fade = ({children, transfer}) => {
	const [fade, setFade] = useState(transfer);
	const [delay, setDelay] = useState(transfer);

	const fadeFunction = (transfer) => {
		setFade(transfer);
		fade
			? setTimeout(() => {
					setDelay(transfer);
			  }, 1000)
			: setDelay(transfer);
	};

	useEffect(() => {
		fadeFunction(transfer);
	}, [transfer]);

	const renderStyle = () => {
		return fade ? styles.fade_in : styles.fade_out;
	};

	return (
		<>
			{delay && (
				<div className={renderStyle()}>
					<p style={{overflow: "hidden"}}>{children}</p>
				</div>
			)}
		</>
	);
};
export default Fade;