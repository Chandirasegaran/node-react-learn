import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chandirasegaran</h1>
        <p className={styles.description}>I'm a Full Stack Developer. Reach out if you'd like to learn more!</p>
        <a href="mailto:chandirasegaransegar@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/me-full.png")} alt="hero" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
