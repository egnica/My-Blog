"use client";
import React, {useState} from "react";

const SVGComponent = (props) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	const styleHover = {
		transition: "fill 0.5s ease, width 0.5s ease, height 0.5s ease",
		fill: isHovered ? "#4cb553" : "black",
		stroke: isHovered ? "#484ea1" : "none",
		strokeWidth: isHovered ? "1" : "none",
	};

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='-1 -1 26 26'
			xmlSpace='preserve'
			width={70}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={styleHover}
			{...props}
		>
			<path d='M18.9 1.153h3.682l-8.042 9.189L24 22.848h-7.405l-5.804-7.583-6.634 7.583H.469l8.6-9.831L0 1.153h7.593l5.241 6.931zm-1.293 19.494h2.039L6.482 3.239h-2.19z' />
		</svg>
	);
};

export default SVGComponent;
