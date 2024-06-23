"use client";
import {useSearchParams} from "next/navigation";
import Posts from "../posts.json";
import {Suspense, useEffect, useState} from "react";

function BlogPostComponent() {
	const [post, setPost] = useState(null);
	const searchParams = useSearchParams();

	useEffect(() => {
		const queryName = searchParams.get("article");

		const foundPost = Posts.posts.find((item) => item.query === queryName);
		if (foundPost) {
			setPost(foundPost);
		}
	}, [searchParams]);

	return post ? (
		<>
			<h1>{post.title}</h1>
			{/* <p dangerouslySetInnerHTML={{ __html: post.bio }} /> */}
		</>
	) : (
		<p>No post found</p>
	);
}

export default function Blog_Post() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BlogPostComponent />
		</Suspense>
	);
}
