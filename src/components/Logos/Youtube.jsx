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
			viewBox='-1 -3 50 50'
			xmlSpace='preserve'
			width={85}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={styleHover}
			{...props}
		>
			<path d='M44.898 14.5c-.398-2.2-2.296-3.8-4.5-4.3C37.102 9.5 31 9 24.398 9c-6.597 0-12.796.5-16.097 1.2-2.2.5-4.102 2-4.5 4.3C3.398 17 3 20.5 3 25s.398 8 .898 10.5c.403 2.2 2.301 3.8 4.5 4.3 3.5.7 9.5 1.2 16.102 1.2s12.602-.5 16.102-1.2c2.199-.5 4.097-2 4.5-4.3.398-2.5.898-6.102 1-10.5-.204-4.5-.704-8-1.204-10.5M19 32V18l12.2 7Z' />
		</svg>
	);
};

export default SVGComponent;
