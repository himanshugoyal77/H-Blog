import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/popular`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      {data.length > 0 &&
        data.map((post) => (
          <MenuPosts key={post.id} data={post} withImage={false} />
        ))}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
    </div>
  );
};

export default Menu;
