"use client";
import styles from "./page.module.css";
import Posts from "../posts.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Display = () => {
  const lastP = Posts.posts.slice(-1)[0];

  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.08, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 1,
        bounce: 0.3,
        restSpeed: 0.01,
        restDelta: 0.01,
      },
    },
    hover: {
      scale: 1.03,
      transition: { type: "spring", stiffness: 100 },
      boxShadow: "5px 5px 10px grey",
      cursor: "pointer",
    },
    tap: {
      scale: 0.99,
      boxShadow: "inset 2px 2px 5px 0px grey",
      transition: { duration: 0.3 },
      backgroundColor: "rgb(232, 232, 232)",
    },
    selected: {
      opacity: 1,
      scale: 1.02,
      borderRadius: "12px",
      boxShadow: "0px 4px 8px rgb(192, 185, 255)",
      transition: { duration: 0.3, stiffness: 300 },
    },
  };

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.main_h1}
      >
        LATE START DEV
      </motion.h1>
      <div className={styles.divide}>
        <div>
          <Link href={`posts/${lastP.query}`}>
            <motion.div
              className={styles.latestCont}
              variants={boxVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.7 }}
            >
              <div className={styles.latestImg}>
                <Image
                  src={lastP.article_image}
                  width={1200}
                  height={630}
                  alt={lastP.title}
                  priority
                  layout="responsive"
                />
              </div>
              <div className={styles.latestContent}>
                <>
                  <h2>{lastP.title}</h2>

                  <p>{lastP.description}</p>
                  <p className={styles.latestDate}>{lastP.date}</p>
                </>
              </div>
            </motion.div>
          </Link>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{ paddingTop: "10px" }}
          >
            Featured Articles
          </motion.h2>
          <div className={styles.featuredContain}>
            {Posts.posts.map((post) => {
              return (
                post.featured && (
                  <Link key={post.id} href={`posts/${post.query}`}>
                    <motion.div
                      variants={boxVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap="tap"
                      className={styles.featureItem}
                    >
                      <div className={styles.feature_image}>
                        <Image
                          src={post.article_image}
                          width={1200}
                          height={630}
                          alt={post.title}
                          priority={true}
                          layout="responsive"
                        />
                      </div>
                      <div className={styles.featuredTitle}>
                        <h4>{post.title}</h4>
                        <p className={styles.latestDate}>{post.date}</p>
                      </div>
                    </motion.div>
                  </Link>
                )
              );
            })}
          </div>

          <div style={{ display: "grid" }}>
            <div style={{ padding: "10px" }}></div>
            <Link href="./posts/archive">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  margin: "auto",
                  maxWidth: "300px",
                  textAlign: "center",
                }}
                className={styles.btn}
              >
                View All Posts
              </motion.div>
            </Link>
            <div style={{ padding: "10px" }}></div>
          </div>
        </div>
        <motion.aside
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeIn" }}
          className={styles.all_posts}
          style={{ overflow: "hidden" }}
        >
          <h3>Posts</h3>
          {[...Posts.posts]
            .reverse()
            .slice(0, 5)
            .map((item) => {
              return (
                <Link key={item.id} href={`posts/${item.query}`}>
                  <div className={styles.post_item}>
                    <p>{item.title}</p>
                    <em>
                      <p style={{ fontSize: "0.7em" }}>{item.date}</p>
                    </em>
                  </div>
                </Link>
              );
            })}
          <Link href="./posts/archive">
            <div className={styles.btn}>MORE</div>
          </Link>
        </motion.aside>
      </div>
    </>
  );
};
export default Display;
