import Posts from "../../posts.json";

export async function generateMetadata(prams) {
	const queryString = await prams.params.query;
	const foundPost = Posts.posts.find((item) => item.query === queryString);

	return {
		title: foundPost.title,
	};
}

export default function Layout({children}) {
	return <div>{children}</div>;
}
