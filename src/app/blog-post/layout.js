import Posts from "../posts.json";

export const metadata = {
	title: "test1",
	description: "test2",
};
export default function Layout({children}) {
	return <div>{children}</div>;
}
