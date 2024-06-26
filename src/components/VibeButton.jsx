"use client";
import Fade from "./Fade";
import {useState} from "react";
const VibeButton = ({trans}) => {
	const [click, setClick] = useState(false);
	return (
		<>
			<div style={{display: "grid", placeContent: "center"}}>
				<br />
				<div className='button' onClick={() => setClick(!click)}>
					Vibe Setter
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
