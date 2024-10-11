"use client";

import React, { useEffect } from "react";
import styles from "./socials.module.css";

const Socials = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  return (
    <div className={styles.socials}>
      <a
        href="https://www.linkedin.com/in/himanshu-goyal048/"
        rel="noreferrer"
        target="_blank"
        className="cursor-pointer hover:animate-bounce ease-in-out duration-300"
      >
        <img
          alt="linkedin"
          width={20}
          height={20}
          src={
            "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-67bzy852.png"
          }
        />
      </a>

      <a
        href="https://twitter.com/Himanshug048?t=9vklalmnkhi0LYQ2ELEV4w&s=09"
        rel="noreferrer"
        target="_blank"
        className="cursor-pointer hover:animate-bounce ease-in-out duration-300"
      >
        <img
          alt="twitter"
          width={20}
          height={20}
          src={
            "https://www.pngkey.com/png/full/67-671021_twitter-logo-white-vector-facebook-logo-grey-round.png"
          }
        />
      </a>
      <a
        href="https://github.com/himanshugoyal77"
        rel="noreferrer"
        target="_blank"
        className="cursor-pointer hover:animate-bounce ease-in-out duration-300"
      >
        <img
          alt="github"
          width={20}
          height={20}
          src={
            "https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png"
          }
        />
      </a>
      <a
        href="https://leetcode.com/HimanshuGoya048l/"
        rel="noreferrer"
        target="_blank"
        className="cursor-pointer hover:animate-bounce ease-in-out duration-300"
      >
        <img
          alt="leetcode"
          width={20}
          height={20}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/1734px-LeetCode_logo_white_no_text.svg.png"
          }
        />
      </a>
    </div>
  );
};

export default Socials;
