import Image from "next/image";
import { notFound } from "next/navigation";
import Vibe from "../../../components/VibeButton";
import BlogJsonLd from "../../../components/BlogJsonLd";
import styles from "./page.module.css";
import BlogPostContent from "../../../components/BlogPostContent";
import { getBlogPost, getBlogPosts } from "../../../lib/blogData";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    query: post.slug,
  }));
}

function PrimaryVideo({ post }) {
  const video = post.primaryVideo;

  if (!video) return null;

  const sources =
    typeof video.src === "string"
      ? { mp4: video.src }
      : video.src || {};

  if (!sources.mp4 && !sources.webm) return null;

  return (
    <>
      <div className={styles.primaryVideo}>
        <video
          controls
          preload="metadata"
          playsInline
          poster={video.thumbnail}
          aria-label={`Video: ${video.title || post.title}`}
        >
          {sources.webm && (
            <source src={sources.webm} type="video/webm" />
          )}
          {sources.mp4 && <source src={sources.mp4} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      </div>

      {video.youtube?.url && (
        <a
          className={styles.primaryVideoLink}
          href={video.youtube.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {video.youtube.label || "Watch on YouTube"}
        </a>
      )}
    </>
  );
}

export default async function Page({ params }) {
  const queryString = params.query;
  const foundPost = await getBlogPost(queryString);

  if (!foundPost) notFound();

  return (
    <>
      <BlogJsonLd post={foundPost} />

      <div style={{ padding: "10px" }} />

      <h1>{foundPost.title}</h1>
      <p>{foundPost.date}</p>

      {foundPost.primaryVideo ? (
        <PrimaryVideo post={foundPost} />
      ) : (
        foundPost.hero_image && (
          <div className={styles.featuredImg}>
            <Image
              className={styles.img}
              src={foundPost.hero_image}
              alt={foundPost.title}
              width={1200}
              height={630}
              priority
              sizes="(max-width: 768px) 94vw, 900px"
            />
          </div>
        )
      )}

      {foundPost.vibe_audio && (
        <div>
          <Vibe trans={foundPost.vibe_audio} />
        </div>
      )}

      <BlogPostContent post={foundPost} />
    </>
  );
}
