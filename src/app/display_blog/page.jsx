"use client";
import styles from "./page.module.css";
import {useState} from "react";
import Fade from "@/components/Fade";
import Posts from "@/app/posts.json";

const Display = () => {
	const [fade, setFade] = useState(false);

	const [newState, setNewState] = useState(false);

	const clickHandler = () => {
		setFade(!fade);
	};

	return (
		<>
			<h1>Blogs</h1>
		</>
	);
};
export default Display;
