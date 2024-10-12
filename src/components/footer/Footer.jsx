"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Socials from "../socials/Socials";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  //return <div className={styles.container}></div>;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/pen-white.png"
            alt="logo"
            width={40}
            height={40}
            style={{
              filter: theme === "light" ? "invert(1)" : "invert(0)",
            }}
          />
          H-Blog
        </div>
        <p className={styles.p}> By Himanshu Goyal</p>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <div className={styles.social}>
            <span className={styles.listTitle}>Social Link</span>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
