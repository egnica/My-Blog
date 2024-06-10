import React from "react";
import Image from "next/image";

const layout = ({children}) => {
	const divStyle = () => {
		return {padding: "0 100px"};
	};
	return (
		<>
			<div style={divStyle()}>
				<Image
					width={2500}
					height={1667}
					layout='responsive'
					alt='picture of a bar'
					src='https://images.squarespace-cdn.com/content/v1/60146ec5ca0b337ce6a69312/131df8be-46ff-426f-9d93-723afe05a95a/dtp_roxy2019_186.jpg'
				/>
			</div>
			<h1>Welcome to the Bar</h1>
			<div></div>
			{children}
		</>
	);
};

export default layout;
