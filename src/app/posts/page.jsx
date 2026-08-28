import PostsDisplay from "../../components/PostsDisplay";
import {
  BLOG_REVALIDATE_SECONDS,
  getBlogPosts,
} from "../../lib/blogData";

export const revalidate = BLOG_REVALIDATE_SECONDS;

export default async function PostsPage() {
  const posts = await getBlogPosts();

  return <PostsDisplay posts={posts} />;
}
