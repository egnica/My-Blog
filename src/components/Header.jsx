"use client";
import React from "react";
import styles from "./page.module.css";
import {useState, useEffect} from "react";

const Header = () => {
	const [buttonName, setButtonName] = useState("");
	const backButton = [
		"Back",
		" <----- ",
		"Previous Page",
		"Backward",
		"Return",
		"Backtrack",
		"Revert",
		"Back Up",
		"Last Page",
	];

	useEffect(() => {
		const num = Math.floor(Math.random() * backButton.length);
		setButtonName(backButton[num]);
	}, []);
	return (
		<div className={styles.header}>
			<div className={styles.header_btn}>{buttonName}</div>
		</div>
	);
};

export default Header;
