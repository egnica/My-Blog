import Posts from "../../posts.json";
import Image from "next/image";
import Vibe from "../../../components/VibeButton";
import BlogJsonLd from "../../../components/BlogJsonLd";
import styles from "./page.module.css";
import BlogPostContent from "../../../components/BlogPostContent";
import { marked } from "marked";

export async function generateStaticParams() {
  return Posts.posts.map((post) => ({
    query: post.query,
  }));
}

export default async function Page({ params }) {
  const queryString = params.query;
  const foundPost = Posts.posts.find((item) => item.query === queryString);

  if (!foundPost) return <div>Post not found.</div>;

  // Convert markdown to HTML server-side
  const body_1_html = marked(foundPost.body_1 || "");
  const body_2_html = marked(foundPost.body_2 || "");
  const body_3_html = marked(foundPost.body_3 || "");
  const body_4_html = marked(foundPost.body_4 || "");

  return (
    <>
      <BlogJsonLd post={foundPost} />
      <div style={{ padding: "10px" }}></div>
      <h1>{foundPost.title}</h1>
      <p>{foundPost.date}</p>
      <div className={styles.featuredImg}>
        <Image
          className={styles.img}
          src={foundPost.article_image}
          alt={foundPost.title}
          width={800}
          height={420}
          priority
          sizes="(max-width: 768px) 90vw, 800px"
        />
      </div>
      <div>
        <Vibe trans={foundPost.vibe_audio} />
      </div>

      <BlogPostContent
        post={foundPost}
        body_1_html={body_1_html}
        body_2_html={body_2_html}
        body_3_html={body_3_html}
        body_4_html={body_4_html}
      />
    </>
  );
}