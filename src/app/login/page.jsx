"use client"

import { signIn } from "next-auth/react";
import styles from "./LoginPage.module.css";


const Loginpage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <>
        <div className={styles.socialButton}>Sign in with Google</div>
        <button onClick={()=>signIn()} className={styles.socialButton}>Sign in with Github</button>
        <div className={styles.socialButton}>Sign in with Facebook</div>
        </>
      </div>
    </div>
  );
};

export default Loginpage;