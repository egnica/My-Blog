import PostsDisplay from "../../components/PostsDisplay";
import { getBlogPosts } from "../../lib/blogData";

export const revalidate = 60;

export default async function PostsPage() {
  const posts = await getBlogPosts();

  return <PostsDisplay posts={posts} />;
}
