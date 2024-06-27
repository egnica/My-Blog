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
			<path d='M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m5.503 17.308a.747.747 0 0 1-1.028.249c-2.818-1.722-6.365-2.111-10.542-1.157a.748.748 0 1 1-.333-1.457c4.571-1.045 8.492-.595 11.655 1.338a.745.745 0 0 1 .248 1.027m1.469-3.267a.937.937 0 0 1-1.287.308c-3.225-1.982-8.142-2.557-11.958-1.398a.937.937 0 0 1-1.167-.624.937.937 0 0 1 .624-1.167c4.358-1.323 9.776-.682 13.48 1.594.44.271.578.847.308 1.287m.126-3.403C15.23 8.341 8.85 8.13 5.157 9.251a1.123 1.123 0 0 1-.652-2.148C8.744 5.816 15.79 6.065 20.243 8.708a1.123 1.123 0 0 1-1.145 1.93' />
		</svg>
	);
};

export default SVGComponent;
