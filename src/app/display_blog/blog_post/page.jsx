"use client";

import Fade from "@/components/Fade";
import {useState} from "react";

const Blog_Post = () => {
	const [stateChange, setStateChange] = useState(false);

	return (
		<>
			<h1>Posts</h1>
			<p>test test</p>

			<button
				onClick={() => {
					setStateChange(!stateChange);
				}}
			>
				Click Here
			</button>
			<Fade transfer={stateChange}>
				In this example, the ChatRoom component uses an Effect to stay connected
				to an external system defined in chat.js. Press “Open chat” to make the
				ChatRoom component appear. This sandbox runs in development mode, so
				there is an extra connect-and-disconnect cycle, as explained here. Try
				changing the roomId and serverUrl using the dropdown and the input, and
				see how the Effect re-connects to the chat. Press “Close chat” to see
				the Effect disconnect one last time.
			</Fade>
			<p>
				Effects are an “escape hatch”: you use them when you need to “step
				outside React” and when there is no better built-in solution for your
				use case. If you find yourself often needing to manually write Effects,
				it’s usually a sign that you need to extract some custom Hooks for
				common behaviors your components rely on.
			</p>
		</>
	);
};
export default Blog_Post;
