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
			date: Posts.posts[lastIndex - 1].date,
		});
	}, []);

	return (
		<>
			<h1>LATE START DEV</h1>
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
				<div className={styles.latestContent}>
					<h2>{lastPost.title}</h2>
					<p>{lastPost.description}</p>
					<p className={styles.latestDate}>{lastPost.date}</p>
				</div>
			</div>
			<h2 style={{paddingTop: "10px"}}>Featured Articles</h2>
			<div className={styles.featuredContain}>
				{Posts.posts.map((post) => {
					return (
						post.featured && (
							<div className={styles.featureItem}>
								<div className=''>
									<Image
										src={post.article_image}
										width={1200}
										height={630}
										alt={post.title}
										priority={true}
										layout='responsive'
									/>
								</div>
								<div className={styles.featuredTitle}>
									<h4>{post.title}</h4>
									<p className={styles.latestDate}>{post.date}</p>
								</div>
							</div>
						)
					);
				})}
			</div>
			{Posts.posts.map((post) => {
				return <p key={post.id}>{post.title}</p>;
			})}
		</>
	);
};
export default Display;
