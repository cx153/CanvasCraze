// pages/bio.js

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Bio.module.css';

export default function Bio() {
  return (
    <>
      <Head>
        <title>Cindy Bio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.breadcrumb}>
        <a href="/">首页</a> > <span>Bio</span>
      </div>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <Image 
            src="/bio-uk-mirror.jpg" 
            alt="Cindy Image" 
            width={400} 
            height={600} 
            className={styles.image}
          />
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Cindy</h1>
          <h2 className={styles.subtitle}>GRAPHIC DESIGNER</h2>
          <p className={styles.description}>
            As a graphic designer with expertise in both visual arts and technical design, I create work that resonates both visually aesthetics and functionality. My paintings capture the fleeting emotions and hidden beauty woven into the fabric of New York City, revealing the city's soul through its everyday moments.
          </p>
          <p className={styles.description}>
            I welcome the chance to collaborate on meaningful and innovative projects.
          </p>
        </div>
      </div>
    </>
  );
}
