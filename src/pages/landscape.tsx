import React from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Landscape.module.scss";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import heroLandscape from "@images/hero-landscape.webp";

const Landscape: NextPage = () => {
  return (
    <Layout title="風景">
      <section className={styles.heroHeader}>
        <Image
          src={heroLandscape}
          alt="赤いソフトコーラルの中心に白いカエルアンコウが下を見ている画像"
          layout="fill"
        />
        <h2 className={styles.title}>
          <span className={styles.titleMain}>風景</span>
          <span className={styles.titleSub}>を楽しむ</span>
        </h2>
      </section>
      <Carousel defaultPosition={2} />
    </Layout>
  );
};

export default Landscape;
