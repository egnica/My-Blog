import {PostContent} from "./connect/postContent";

export const metadata = {
	title: PostContent().title,
	description: PostContent().description,
};

export default function Layout({children}) {
	return <div>{children}</div>;
}
