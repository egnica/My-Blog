"use client";
import React from "react";
import Image from "next/image";
import Posts from "../../posts.json";
import styles from "./page.module.css";
import Vibe from "../../../components/VibeButton";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import { useEffect } from "react";

const BlogPost = ({ params }) => {
  const queryString = params.query;
  const foundPost = Posts.posts.find((item) => item.query === queryString);

  useEffect(() => {
    // Highlight all code blocks dynamically after each render
    Prism.highlightAll();
  }, [params]); // Runs every time `content` changes

  marked.setOptions({
    langPrefix: "language-", // Add 'language-' prefix to code block classes
    highlight: (code, lang) => {
      if (Prism.languages[lang]) {
        return Prism.highlight(code, Prism.languages[lang], lang);
      }
      return code; // If no language is specified, return unhighlighted code
    },
  });
  return (
    <>
      <div style={{ padding: "10px" }}></div>
      <h1>{foundPost.title}</h1>
      <p>{foundPost.date}</p>
      <div className={styles.featuredImg}>
        <Image
          className={styles.img}
          src={foundPost.article_image}
          fill
          alt={foundPost.title}
          priority={true}
        />
      </div>
      <div>
        <Vibe trans={foundPost.vibe_audio} />
      </div>

      <div className={styles.full_cont}>
        <div
          className={styles.content_container}
          dangerouslySetInnerHTML={{ __html: marked(foundPost.body_1) }}
        ></div>

        {foundPost.video_1 != null && (
          <div className={styles.video_container}>
            <video style={{ width: "80%" }} controls>
              <source src={foundPost.video_1} type="video/mp4" />
            </video>
          </div>
        )}
        {foundPost.image_1 != null && (
          <div className={styles.image_container}>
            <Image
              className="img"
              src={foundPost.image_1}
              fill
              alt={foundPost.title}
            />
          </div>
        )}
        {foundPost.body_2 != null && (
          <div
            className={styles.content_container}
            dangerouslySetInnerHTML={{ __html: marked(foundPost.body_2) }}
          ></div>
        )}
        {foundPost.video_2 != null && (
          <div className={styles.video_container}>
            <video controls>
              <source src={foundPost.video_2} type="video/mp4" />
            </video>
          </div>
        )}
        {foundPost.image_2 != null && (
          <div className={styles.image_container}>
            <Image
              className="img"
              src={foundPost.image_2}
              fill
              alt={foundPost.title}
            />
          </div>
        )}
        {foundPost.body_3 != null && (
          <div
            className={styles.content_container}
            dangerouslySetInnerHTML={{ __html: marked(foundPost.body_3) }}
          ></div>
        )}
        {foundPost.image_3 != null && (
          <div className={styles.image_container}>
            <Image
              className="img"
              src={foundPost.image_3}
              alt={foundPost.title}
              fill
            />
          </div>
        )}

        {foundPost.video_4 != null && (
          <div className={styles.video_container}>
            <video style={{ width: "80%" }} controls>
              <source src={foundPost.video_4} type="video/mp4" />
            </video>
          </div>
        )}
        {foundPost.body_4 != null && (
          <div
            className={styles.content_container}
            dangerouslySetInnerHTML={{ __html: marked(foundPost.body_4) }}
          ></div>
        )}
      </div>
    </>
  );
};

export default BlogPost;
