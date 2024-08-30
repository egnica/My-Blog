import Link from "next/link";
import Header from "../../components/Header";
export const metadata = {
  title: "Article Section",
  description: "Here are all of the article's within the blog blog",
};

export default function Layout({ children }) {
  return (
    <>
      <Link href="./">
        <Header />
      </Link>
      <>{children}</>
    </>
  );
}
