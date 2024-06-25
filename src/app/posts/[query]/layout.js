import Posts from "../../posts.json";

let title = "";
let description = "";

export const metadata = {
	title: "test This",
	description: "Here are all of the article's within the blog blog",
};
export default function Layout(props) {
	const post = props.params.query;
	const foundPost = Posts.posts.find((item) => item.query === post);
	title = foundPost.title;
	return <div>{props.children}</div>;
}
