import React from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Home.module.scss";
import Image from "next/image";
import bg from "@images/background-top.webp";
import Carousel from "@/components/Carousel";

const Home: NextPage = () => {
  return (
    <Layout title="トップ" isAnimation>
      <div className={styles.backgroundWrapper}>
        <Image
          alt="この背景画像は、宮古島の魔王の宮殿というポイント"
          src={bg}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <section className={styles.heroheader}>
        <h1 className={styles.title}>海の歩き方</h1>
        <p className={styles.subTitle}>スキューバダイビングで海を楽しもう</p>
        <div className={styles.arrow}>know more</div>
      </section>
      <div className={styles.introduction}>
        <p>ダイビングの楽しみ方は人ぞれぞれ</p>
        <p>幻想的な海中風景を見て感動する？</p>
        <p>個性的な水中生物たちを観察する?</p>
        <p>かっこいい装備を集めて冒険する？</p>
        <p>海鮮グルメを楽しみにしながらダイビングする？</p>
      </div>
      <Carousel defaultPosition={1} />
    </Layout>
  );
};

export default Home;
