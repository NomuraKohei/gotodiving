import React from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Home.module.scss";
import Image from "next/image";
import iconLandscape from "@images/icon-landscape.webp";
import iconMarineLife from "@images/icon-marinelife.webp";
import iconEquipment from "@images/icon-equipment.webp";
import iconGourmet from "@images/icon-gourmet.webp";
import bg from "@images/background-top.webp";
import iconArrow from "@images/icon-arrow.webp";

const Home: NextPage = () => {
  const images = [
    { imageData: iconLandscape, alt: "風景のアイコン" },
    { imageData: iconMarineLife, alt: "生物のアイコン" },
    { imageData: iconEquipment, alt: "装備のアイコン" },
    { imageData: iconGourmet, alt: "グルメのアイコン" },
  ];
  return (
    <Layout title="トップ">
      <div className={styles.backgroundWrapper}>
        <Image alt="魔王の宮殿の画像" src={bg} layout="fill" objectFit="cover" quality={100} />
      </div>
      <section className={styles.heroheader}>
        <h1 className={styles.title}>海の歩き方</h1>
        <p className={styles.subTitle}>スキューバダイビングで海を楽しもう</p>
        <div className={styles.icons}>
          {images.map((item, index) => (
            <div className={styles.icon} key={index}>
              <Image src={item.imageData} alt={item.alt} width={148} height={148} />
            </div>
          ))}
        </div>
        <div className={styles.arrow}>
          <Image src={iconArrow} alt="矢印アイコン" width={8} height={40} />
          {/* know more */}
        </div>
      </section>
      <p>ダイビングの楽しみ方は人ぞれぞれ</p>
      <p>幻想的な海中風景を見て感動する？</p>
      <p>個性的な水中生物たちを観察する?</p>
      <p>かっこいい装備を集めて冒険する？</p>
      <p>海鮮グルメを楽しみにしながらダイビングする？</p>
      <section>
        <p>あなたは一番、何を楽しみたい？</p>
      </section>
    </Layout>
  );
};

export default Home;
