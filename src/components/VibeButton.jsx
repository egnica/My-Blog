"use client";
import Fade from "./Fade";
import {useState} from "react";
const VibeButton = ({trans}) => {
	const [click, setClick] = useState(false);
	return (
		<>
			<div style={{display: "grid", placeContent: "center"}}>
				<br />
				<div
					style={{padding: " 20px 40px"}}
					className='button'
					onClick={() => setClick(!click)}
				>
					Get The Vibe Right
				</div>
				<br />
			</div>
			<div style={{display: "grid", placeContent: "center"}}>
				<Fade transfer={click}>
					<audio controls>
						<source src={trans} type='audio/mpeg' />
					</audio>
				</Fade>
			</div>

			<br />
		</>
	);
};
export default VibeButton;
