import React from "react";
import Posts from "../../posts.json";

const BlogPost = (prams) => {
	const queryString = prams.params.query;
	const foundPost = Posts.posts.find((item) => item.query === queryString);
	return (
		<>
			<h1>{foundPost.title}</h1>
			<p>{foundPost.body_1}</p>
		</>
	);
};

export default BlogPost;
