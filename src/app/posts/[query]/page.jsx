import React from "react";
import Image from "next/image";
import Posts from "../../posts.json";
import styles from "./page.module.css";
import Vibe from "../../../components/VibeButton";
import Footer from "../../../components/Footer";
import Link from "next/link";

const BlogPost = ({ params }) => {
  const queryString = params.query;
  const foundPost = Posts.posts.find((item) => item.query === queryString);

  return (
    <>
      <div style={{ padding: "10px" }}></div>
      <h1>{foundPost.title}</h1>
      <p>{foundPost.date}</p>
      <div className={styles.featuredImg}>
        <Image
          src={foundPost.article_image}
          width={869}
          height={400}
          alt={foundPost.title}
          priority={true}
          layout="responsive"
        />
      </div>
      <div>
        <Vibe trans={foundPost.vibe_audio} />
      </div>
      <div
        className={styles.content_container}
        dangerouslySetInnerHTML={{
          __html: foundPost.body_1,
        }}
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
            src={foundPost.image_1}
            width={869}
            height={400}
            alt={foundPost.title}
            layout="responsive"
          />
        </div>
      )}
      {foundPost.body_2 != null && (
        <div
          className={styles.content_container}
          dangerouslySetInnerHTML={{ __html: foundPost.body_2 }}
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
            src={foundPost.image_2}
            width={869}
            height={400}
            alt={foundPost.title}
            layout="responsive"
          />
        </div>
      )}
      {foundPost.body_3 != null && (
        <div
          className={styles.content_container}
          dangerouslySetInnerHTML={{ __html: foundPost.body_3 }}
        ></div>
      )}
      {foundPost.image_3 != null && (
        <div className={styles.image_container}>
          <Image
            src={foundPost.image_3}
            width={869}
            height={400}
            alt={foundPost.title}
            layout="responsive"
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
          dangerouslySetInnerHTML={{ __html: foundPost.body_4 }}
        ></div>
      )}
    </>
  );
};

export default BlogPost;
