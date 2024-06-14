"use client";
import {useEffect, useState} from "react";
import styles from "./page.module.css";
import {useRef} from "react";

const Fade = ({children, transfer}) => {
	const [fade, setFade] = useState(transfer);
	const [delay, setDelay] = useState(transfer);
	const [divHeight, setDivHeight] = useState();
	const thisDiv = useRef();

	const fadeFunction = (transfer) => {
		setFade(transfer);
		fade
			? setTimeout(() => {
					setDelay(transfer);
			  }, 900)
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
			<p>{divHeight}</p>
			<div ref={thisDiv} id='myDiv'>
				{delay && (
					<div className={renderStyle()}>
						<p>{children}</p>
					</div>
				)}
			</div>
		</>
	);
};
export default Fade;
