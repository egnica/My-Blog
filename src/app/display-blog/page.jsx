import styles from "./page.module.css";
import Posts from "@/app/posts.json";
import Image from "next/image";
import Link from "next/link";

const Display = () => {
	const lastP = Posts.posts.slice(-1)[0];

	return (
		<>
			<h1>LATE START DEV</h1>
			<div className={styles.latestCont}>
				<div className={styles.latestImg}>
					{/* <Link
						href={{
							pathname: "blog-post",
							query: {article: lastP.query},
						}}
					> */}
					<Image
						src={lastP.article_image}
						width={1200}
						height={630}
						alt={lastP.title}
						priority
						layout='responsive'
					/>
					{/* </Link> */}
				</div>
				<div className={styles.latestContent}>
					<>
						{/* <Link
							href={{
								pathname: "blog-post",
								query: {article: lastP.query},
							}}
						> */}
						<h2>{lastP.title}</h2>
						{/* </Link> */}
						<p>{lastP.description}</p>
						<p className={styles.latestDate}>{lastP.date}</p>
					</>
				</div>
			</div>
			<h2 style={{paddingTop: "10px"}}>Featured Articles</h2>
			<div className={styles.featuredContain}>
				{Posts.posts.map((post) => {
					return (
						post.featured && (
							<div key={post.id} className={styles.featureItem}>
								<div>
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
		</>
	);
};
export default Display;
