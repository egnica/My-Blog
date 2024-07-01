"use client";
import React from "react";
import styles from "./page.module.css";
import {useState, useEffect} from "react";

const Header = () => {
	const [buttonName, setButtonName] = useState("");
	const backButton = [
		"Back",
		"Watch My ___",
		"Got My ___",
		"___ to the Future",
		"Get Off My ___",
		"Don't Look ___",
		"___ in Black",
		" <----- ",
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
