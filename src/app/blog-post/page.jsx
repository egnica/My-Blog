"use client";
import {useSearchParams} from "next/navigation";
import Posts from "../posts.json";
import {Suspense, useEffect, useState} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import metaTransfer from "./metaTransfer.js";

function BlogPostComponent() {
	const [post, setPost] = useState(null);
	const searchParams = useSearchParams();

	useEffect(() => {
		const queryName = searchParams.get("article");

		const foundPost = Posts.posts.find((item) => item.query === queryName);
		if (foundPost) {
			setPost(foundPost);
		}
		metaTransfer(post);
	}, [searchParams]);

	return post ? (
		<>
			<h1>{post.title}</h1>
			<p>{post.date}</p>
			<br />
			<div className=''>
				<Image
					src={post.article_image}
					alt={post.title}
					width={560}
					height={315}
					sizes='(max-width: 900px) 100vw, 900px'
					priority
				/>
			</div>

			<br />
			<p>{post.description}</p>

			{/* <p dangerouslySetInnerHTML={{ __html: post.bio }} /> */}
		</>
	) : (
		<p></p>
	);
}

export default function Blog_Post() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BlogPostComponent />
		</Suspense>
	);
}
