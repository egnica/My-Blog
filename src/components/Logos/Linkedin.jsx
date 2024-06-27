"use client";
import React, {useState} from "react";

const SVGComponent = (props) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const styleHover = {
		transition: "fill 0.5s ease",
		transition: "width 0.5s ease",

		fill: isHovered ? "#484ea1" : "black",
		width: isHovered ? "150px" : "100px",
		stroke: isHovered ? "black" : "none",
		strokeWidth: isHovered ? ".5" : "none",
	};

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			xmlSpace='preserve'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={styleHover}
			{...props}
		>
			<path d='M17.291 19.073h-3.007v-4.709c0-1.123-.02-2.568-1.564-2.568-1.566 0-1.806 1.223-1.806 2.487v4.79H7.908V9.389h2.887v1.323h.04a3.17 3.17 0 0 1 2.848-1.564c3.048 0 3.609 2.005 3.609 4.612zM4.515 8.065a1.745 1.745 0 1 1 0-3.49 1.745 1.745 0 0 1 0 3.49m1.503 11.008h-3.01V9.389h3.01zM18.79 1.783H1.497A1.48 1.48 0 0 0 0 3.246V20.61c.01.818.68 1.473 1.497 1.464H18.79a1.485 1.485 0 0 0 1.503-1.464V3.245a1.484 1.484 0 0 0-1.503-1.463' />
		</svg>
	);
};

export default SVGComponent;
