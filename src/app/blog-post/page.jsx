"use client";
import {useSearchParams} from "next/navigation";
import Posts from "@/app/posts.json";

export default function Blog_Post() {
	const searchParams = useSearchParams();
	const queryName = searchParams.get("article");
	const post = Posts.posts.filter((post) => post.query === queryName);

	return (
		<>
			<h1>{post[0].title}</h1>
			<p>test test</p>
			{/* <p dangerouslySetInnerHTML={{__html: person.bio}} /> */}
		</>
	);
}
