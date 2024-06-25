import React from "react";
import Posts from "../../posts.json";

const BlogPost = (prams) => {
	console.log(prams);
	const title = prams.params.query;
	console.log(title);
	const foundPost = Posts.posts.find((item) => item.query === title);
	console.log(foundPost);
	return (
		<>
			<h1>{foundPost.title}</h1>
			<p>{foundPost.body_1}</p>
		</>
	);
};
export default BlogPost;
