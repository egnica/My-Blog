import React from "react";
import Image from "next/image";
import Posts from "../../posts.json";
import styles from "./page.module.css";

const BlogPost = (params) => {
	const queryString = params.params.query;
	const foundPost = Posts.posts.find((item) => item.query === queryString);

	return (
		<>
			<h1>{foundPost.title}</h1>
			<div className={styles.featuredImg}>
				<Image
					src={foundPost.article_image}
					width={869}
					height={400}
					alt={foundPost.title}
					priority={true}
					layout='responsive'
				/>
			</div>
			<div className={styles.content_container}>
				<div
					dangerouslySetInnerHTML={{
						__html: foundPost.body_1,
					}}
				></div>
			</div>
		</>
	);
};

export default BlogPost;
