"use client";
import styles from "./page.module.css";
import {useState, useEffect} from "react";
import Fade from "@/components/Fade";
import Posts from "@/app/posts.json";
import Image from "next/image";
import Link from "next/link";

const Display = () => {
	const [lastPost, setLastPost] = useState([]);

	useEffect(() => {
		const lastIndex = Posts.posts.length;

		setLastPost({
			title: Posts.posts[lastIndex - 1].title,
			description: Posts.posts[lastIndex - 1].description,
			articleImage: Posts.posts[lastIndex - 1].article_image,
		});
	}, []);
	console.log(lastPost);
	return (
		<>
			<h1>Blogs</h1>
			<div className={styles.latestCont}>
				<div className={styles.latestImg}>
					<Image
						src={lastPost.articleImage}
						width={1200}
						height={630}
						alt={lastPost.title}
						priority={true}
						layout='responsive'
					/>
				</div>
				<div>
					<h2>{lastPost.title}</h2>
					<p>{lastPost.description}</p>
				</div>
			</div>
			<div>
				{Posts.posts.map((post) => {
					return <p key={post.id}>{post.title}</p>;
				})}
			</div>
		</>
	);
};
export default Display;
