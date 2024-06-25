import Link from "next/link";
export const metadata = {
	title: "Article Section",
	description: "Here are all of the article's within the blog blog",
};

export default function Layout({children}) {
	return <div>{children}</div>;
}
