"use client";
import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import styles from "../app/posts/[query]/page.module.css";
import Image from "next/image";

export default function BlogPostContent({
  post,
  body_1_html,
  body_2_html,
  body_3_html,
  body_4_html,
}) {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef4 = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleEnded = (ref) => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.pause = true;
    }
  };

  return (
    <div className={styles.full_cont}>
      <div
        className={styles.content_container}
        dangerouslySetInnerHTML={{ __html: body_1_html }}
      ></div>

      {post.video_1 && (
        <div className={styles.video_container}>
          <video
            ref={videoRef1}
            style={{ width: "80%" }}
            controls
            onEnded={() => handleEnded(videoRef1)}
            preload="metadata"
          >
            <source src={post.video_1} type="video/mp4" />
          </video>
        </div>
      )}
      {post.image_1 && (
        <div className={styles.image_container}>
          <Image className="img" src={post.image_1} fill alt={post.title} />
        </div>
      )}
      {body_2_html && (
        <div
          className={styles.content_container}
          dangerouslySetInnerHTML={{ __html: body_2_html }}
        ></div>
      )}
      {post.video_2 && (
        <div className={styles.video_container}>
          <video
            ref={videoRef2}
            style={{ width: "80%" }}
            controls
            onEnded={() => handleEnded(videoRef2)}
            preload="metadata"
          >
            <source src={post.video_2} type="video/mp4" />
          </video>
        </div>
      )}
      {post.image_2 && (
        <div className={styles.image_container}>
          <Image className="img" src={post.image_2} fill alt={post.title} />
        </div>
      )}
      {body_3_html && (
        <div
          className={styles.content_container}
          dangerouslySetInnerHTML={{ __html: body_3_html }}
        ></div>
      )}
      {post.image_3 && (
        <div className={styles.image_container}>
          <Image className="img" src={post.image_3} alt={post.title} fill />
        </div>
      )}
      {post.video_4 && (
        <div className={styles.video_container}>
          <video
            ref={videoRef4}
            style={{ width: "80%" }}
            controls
            onEnded={() => handleEnded(videoRef4)}
            preload="metadata"
          >
            <source src={post.video_4} type="video/mp4" />
          </video>
        </div>
      )}
      {body_4_html && (
        <div
          className={styles.content_container}
          dangerouslySetInnerHTML={{ __html: body_4_html }}
        ></div>
      )}
    </div>
  );
}
