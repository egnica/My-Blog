"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

export default function Home() {
	const [reveal, setReveal] = useState(false);
	const [ageReveal, setAgeReveal] = useState(false);
	const [secondAgeReveal, setSecondAgeReveal] = useState(false);
	const [response, setResponse] = useState("");
	const [age, setAge] = useState(0);

	const timeAsDev = () => {
		const date = new Date();

		let diffMonth = 0;
		let diffYear = 0;
		let monthString;

		const month = date.getMonth();
		const year = date.getFullYear();
		console.log(date);
		const startMonth = 4;
		const startYear = 2020;
		month < startMonth
			? (diffYear = year - startYear - 1) && (diffMonth = month + 9)
			: (diffYear = year - startYear) && (diffMonth = month - startMonth + 1);

		diffMonth = 1 ? (monthString = "month") : (monthString = "months");
		return `${diffYear} years and ${diffMonth} ${monthString}`;
	};

	const ageHandler = () => {
		setSecondAgeReveal(!secondAgeReveal);
		age < 43
			? setResponse(".... yeah, I'm older than you")
			: age > 43
			? setResponse("DAMN! You are older than me")
			: setResponse("Are we the same age? Did we just become best friends?!");

		document.getElementById("userAge").value = "";
		setAge("0");
	};

	return (
		<>
			<div className={styles.picture_text_contain}>
				<Image
					className={styles.image_contain}
					width={1825}
					height={2499}
					alt='Picture of Nicholas Egner'
					layout='responsive'
					priority={true}
					src='https://latestartbucket.s3.us-east-2.amazonaws.com/nick-pic.png'
				/>
				<div className={styles.text_button_contain}>
					<h2>Welcome to my blog</h2>
					<br />
					<p>
						Hello! My name is{" "}
						<a
							href='https://www.linkedin.com/in/nicholas-egner/'
							target='_blank'
						>
							Nicholas Egner.
						</a>
					</p>
					<br />
					<p>
						I have been earning a paycheck as a web developer for {timeAsDev()}.
						I even created an overly complicated function to make that last line
						dynamic.
						<br />
						<br />
					</p>
					<p onClick={() => setReveal(!reveal)} className={styles.reveal}>
						Wanna see??
					</p>
					<br />
					<p>
						{reveal && (
							<div className={styles.code}>
								<code style={{color: "white"}}>
									<p
										className={styles.x_out}
										onClick={() => setReveal(!reveal)}
										style={{color: "white"}}
									>
										x
									</p>
									let diffMonth = 0; <br />
									let diffYear = 0; <br />
									let monthString;
									<br />
									<br />
									const month = date.getMonth();
									<br />
									const year = date.getFullYear();
									<br />
									<br />
									const startMonth = 4; <br />
									const startYear = 2020;
									<br />
									<br />
									month &lt; startMonth ? (diffYear = year - startYear - 1) &&
									(diffMonth = month + 9)
									<br /> : (diffYear = year - startYear) && (diffMonth = month -
									startMonth + 1);
									<br />
									<br /> diffMonth = 1 ? (monthString = &quot;month&quot;) :
									(monthString = &quot;months&quot;);
								</code>
								<br />
								<br />
								<h2 style={{textAlign: "center"}}>Told You!</h2>
							</div>
						)}
						The purpose of this blog is to experiment with various web
						development techniques and share my experiences as an older guy
						starting over in a new career.
					</p>
					<br />
					<p onClick={() => setAgeReveal(!ageReveal)} className={styles.reveal}>
						How old am I you ask?
					</p>
					{ageReveal && (
						<div className={styles.age}>
							<br />
							<p>
								Well, if we are getting to know each other like that, how old
								are you?
							</p>

							<br />
							{!secondAgeReveal && (
								<>
									<input
										type='number'
										onChange={(event) => setAge(event.target.value)}
										id='userAge'
										value={age}
									/>
									<button onClick={ageHandler}>Enter</button>
								</>
							)}

							{secondAgeReveal && <p className={styles.age}>{response}</p>}
						</div>
					)}

					<br />

					<p>If you are interested in checking out more...</p>
					<Link href={"/display_blog"}>CLICK HERE</Link>
				</div>
			</div>
		</>
	);
}
