import React from "react";
import Posts from "../../posts.json";

export async function generateMetadata(prams) {
	const title = prams.params.query;
	const foundPost = Posts.posts.find((item) => item.query === title);

	return {
		title: foundPost.title,
	};
}

const BlogPost = (prams) => {
	const title = prams.params.query;
	const foundPost = Posts.posts.find((item) => item.query === title);
	return (
		<>
			<h1>{foundPost.title}</h1>
			<p>{foundPost.body_1}</p>
		</>
	);
};

export default BlogPost;
