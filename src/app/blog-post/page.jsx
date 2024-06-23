"use client";
import {useSearchParams} from "next/navigation";
import Posts from "../posts.json";
import {Suspense, useState} from "react";

export default function Blog_Post() {
	const [post, setPost] = useState({});
	const searchParams = useSearchParams();

	useState(() => {
		const queryName = searchParams.get("article");

		Posts.posts.map((item) => {
			queryName == item.query ? setPost(item) : null;
		});
	}, []);

	// const post = Posts.posts.filter((post) => post.query === queryName);

	return (
		<>
			<Suspense placeholder='Search...'>
				<h1>{post.title}</h1>
				<p>test test</p>
				{/* <p dangerouslySetInnerHTML={{__html: person.bio}} /> */}
			</Suspense>
		</>
	);
}
