import React, { useCallback, useContext, useEffect } from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Home.module.scss";
import Image from "next/image";
import bg from "@images/background-top.webp";
import Carousel from "@/components/Carousel";
import ScrollArrow from "@/components/ScrollArrow";
import { AnimationState } from "./_app";

const Home: NextPage = () => {
  const { isTopAnimation, setTopAnimation } = useContext(AnimationState);

  const disableAnimation = useCallback(() => {
    if (!setTopAnimation) {
      return;
    }
    if (!isTopAnimation) {
      return;
    }
    setTopAnimation(false);
  }, [setTopAnimation, isTopAnimation]);

  useEffect(() => {
    window.addEventListener("scroll", disableAnimation);
    return () => {
      window.removeEventListener("scroll", disableAnimation);
    };
  }, [disableAnimation]);

  return (
    <Layout title="トップ" isAnimation>
      <div
        className={`${styles.backgroundWrapper} ${
          isTopAnimation ? "" : styles.backgroundWrapperNonAnimetion
        }`}
      >
        <Image
          alt="この背景画像は、宮古島の魔王の宮殿というポイント"
          src={bg}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <section
        className={`${styles.heroheader} ${isTopAnimation ? "" : styles.heroheaderNonAnimation}`}
      >
        <h1 className={styles.title}>海の歩き方</h1>
        <p className={styles.subTitle}>
          スキューバダイビングで
          <br className={styles.newLine} />
          海を楽しもう
        </p>
        <ScrollArrow isTopHeader />
      </section>
      <div className={styles.introduction}>
        <p>ダイビングの楽しみ方は人それぞれ</p>
        <p>
          幻想的な<span className={styles.accent}>海中風景</span>を見て感動する？
        </p>
        <p>
          個性的な<span className={styles.accent}>水中生物</span>たちを観察する?
        </p>
        <p>
          かっこいい<span className={styles.accent}>装備</span>を集めて冒険する？
        </p>
        <p>
          ダイビング後の<span className={styles.accent}>海鮮グルメ</span>を楽しむ？
        </p>
      </div>
      <Carousel defaultPosition={1} />
    </Layout>
  );
};

export default Home;
