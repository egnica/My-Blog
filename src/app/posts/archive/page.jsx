import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { getBlogPosts } from "../../../lib/blogData";

export const revalidate = 60;

export default async function ArchivePage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1>Post Archive</h1>

      <div className={styles.postWrapper}>
        {[...posts].reverse().map((post) => (
          <Link key={post.id || post.slug} href={`/posts/${post.slug}`}>
            <div className={styles.articleRow}>
              <Image
                style={{ paddingRight: "10px" }}
                src={post.hero_image}
                height={100}
                width={200}
                alt={post.title}
              />

              <div className={styles.textWrap}>
                <p>
                  <em>{post.date}</em>
                </p>
                <h2>{post.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
