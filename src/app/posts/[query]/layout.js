import Posts from "../../posts.json";

export default function Layout(props) {
	const post = props.params.query;
	console.log(post);
	const foundPost = Posts.posts.find((item) => item.query === post);

	title = foundPost.title;

	return <div>{props.children}</div>;
}

let title = "";
let description = "";

export const metadata = {
	title: {title},
	description: "Here are all of the article's within the blog blog",
};
