"use client";
import React from "react";

const error = ({error, reset}) => {
	return (
		<>
			<div>
				<p>{error.message}</p>
				<button onClick={reset}>Reset</button>
			</div>
		</>
	);
};

export default error;
