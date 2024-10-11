import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Socials from "../socials/Socials";

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/featured`, {
    // cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Himanshu here!</b> Welcome to Code Chronicles: A
        Developer&apos;s Diary
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={data[0].img} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.slug}>
            <span className={`${styles.category} ${styles.travel}`}>
              {data[0].catSlug}
            </span>
            <span className={`${styles.category} ${styles.travel}`}>
              {data[0].views} views
            </span>
          </div>
          <h1 className={styles.postTitle}>{data[0].title}</h1>
          <p className={styles.postDesc}>{data[0].desc.substring(0, 250)}...</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
