"use client";

import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
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
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link
          href="https://himanshu-goyal-delta.vercel.app/#contact"
          className={styles.link}
        >
          Contact
        </Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
