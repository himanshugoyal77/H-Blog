import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage, data }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            {data.catSlug}
          </span>
          <h3 className={styles.postTitle}>{data.title}</h3>
          <div className={styles.detail}>
            <span className={styles.username}>
              {data?.user?.name || "unknown"}
            </span>
            <span className={styles.date}> - {data.createdAt}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
