import {url} from "inspector";
import Posts from "../../posts.json";

export async function generateMetadata(prams) {
	const queryString = await prams.params.query;
	const foundPost = Posts.posts.find((item) => item.query === queryString);

	return {
		title: foundPost.title,
		description: foundPost.description,
		keywords: foundPost.keywords,
		openGraph: {
			title: foundPost.title,
			site_name: "Late Start Dev",
			description: foundPost.description,
			url: `https://latestartdev.com/posts/${foundPost.query}`,
			images: [
				{
					url: foundPost.article_image,
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

export default function Layout({children}) {
	return <div>{children}</div>;
}
