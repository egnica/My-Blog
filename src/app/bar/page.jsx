import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";

const Bar = async () => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("failed API request");
	}

	const data = await response.json();

	return (
		<>
			<h1>Bar</h1>
		</>
	);
};

export default Bar;
