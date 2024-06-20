import styles from "./page.module.css";
import Posts from "@/app/posts.json";
import Image from "next/image";

const Display = () => {
	const lastP = Posts.posts.slice(-1)[0];

	return (
		<>
			<h1>LATE START DEV</h1>
			<div className={styles.latestCont}>
				<div className={styles.latestImg}>
					<Image
						src={lastP.article_image}
						width={1200}
						height={630}
						alt={lastP.title}
						priority
						layout='responsive'
					/>
				</div>
				<div className={styles.latestContent}>
					<>
						<h2>{lastP.title}</h2>
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
