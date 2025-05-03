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
import { useEffect, useRef } from "react";
import BlogJsonLd from "../../../components/BlogJsonLd";

marked.setOptions({
  highlight: function (code, lang) {
    const language = Prism.languages[lang] || Prism.languages.javascript;
    return Prism.highlight(code, language, lang);
  },
  langPrefix: "language-", // required for Prism CSS to apply
});

const Page = ({ params }) => {
  const queryString = params.query;
  const foundPost = Posts.posts.find((item) => item.query === queryString);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef4 = useRef(null);

  const handleEnded = (ref) => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.pause = true;
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!foundPost) {
    return <div>Post not found.</div>;
  }

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
          fill
          alt={foundPost.title}
          priority={true}
          sizes="(max-width: 768px) 90vw, 800px"
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
            <video
              ref={videoRef1}
              style={{ width: "80%" }}
              controls
              onEnded={() => handleEnded(videoRef1)}
              playsInline
              preload="metadata"
            >
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
            <video
              ref={videoRef2}
              style={{ width: "80%" }}
              controls
              onEnded={() => handleEnded(videoRef2)}
              playsInline
              preload="metadata"
            >
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
            <video
              ref={videoRef4}
              style={{ width: "80%" }}
              controls
              onEnded={() => handleEnded(videoRef4)}
              playsInline
              preload="metadata"
            >
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

export default Page;
