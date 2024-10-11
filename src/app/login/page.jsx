"use client";

import Image from "next/image";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
            width={20}
            height={20}
            alt="google"
          />{" "}
          Sign in with Google
        </div>
        <div className={styles.socialButton}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width={20}
            height={20}
            alt="google"
          />{" "}
          Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
