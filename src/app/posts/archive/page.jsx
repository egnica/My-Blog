import React from "react";
import Posts from "../../posts.json";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

function page() {
  const PostsObject = Posts.posts.map;

  return (
    <div>
      <h1>Post Archive</h1>
      <div className={styles.postWrapper}>
        {Posts.posts.map((post, index) => {
          return (
            <Link key={index} href={post.query}>
              <div className={styles.articleRow}>
                <Image
                  style={{ paddingRight: "10px" }}
                  src={post.article_image}
                  height={100}
                  width={200}
                  alt={post.title}
                />
                <div className={styles.textWrap}>
                  <p>
                    {" "}
                    <em>{post.date}</em>
                  </p>

                  <h2>{post.title}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default page;
