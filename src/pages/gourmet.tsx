import React, { useEffect, useState } from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Gourmet.module.scss";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import heroGourmet from "@images/hero-gourmet.webp";
import kaisendonUmasouImage from "@images/gourmet/kaisendon-umaso.webp";
import kaisendonWithAosaImage from "@images/gourmet/kaisendon-withaosa.webp";
import tendonGoldImage from "@images/gourmet/tendon-gold.webp";
import tendonAnagoImage from "@images/gourmet/tendon-anago.webp";
import sushiOneImage from "@images/gourmet/sushi-one.webp";
import sushiTableImage from "@images/gourmet/sushi-table.webp";
import sashimiNanikaImage from "@images/gourmet/sashimi-nanika.webp";
import sashimiTableImage from "@images/gourmet/sashimi-tai.webp";
import HeroHeader from "@/components/HeroHeader";
import Search from "@/components/Search";
import Section from "@/components/Section";

const Equipment: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const updateHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener(`resize`, updateHeight);

    return () => window.removeEventListener(`resize`, updateHeight);
  }, []);

  const imageWidth = 1680;
  const imageHeight = 945;

  const equipments = [
    {
      name: "海鮮丼",
      decription: "海の近くで食べれるものと言ったら海鮮丼。",
      exDescription: "地元でしか取れない新鮮な魚の盛り合わせを味わう事ができます。",
      image: kaisendonUmasouImage,
      image2: kaisendonWithAosaImage,
      alt: "黄色いシュノーケルがついた縁がオレンジ色のダイビングマスク",
      width: imageWidth,
      height: imageHeight,
    },
    {
      name: "天丼",
      decription: "ダイビングが終わると、お腹がへるものです。",
      exDescription: "このようなガッツリ食べたいときは、天丼がおすすめです。",
      image: tendonGoldImage,
      image2: tendonAnagoImage,
      alt: "黄色いシュノーケルがついた縁がオレンジ色のダイビングマスク",
      width: imageWidth,
      height: imageHeight,
    },
    {
      name: "寿司",
      decription:
        "日本の代表的な寿司ですが、海の近くだと安価かつ新鮮でおいしい寿司を食べることができます。",
      exDescription: "もう回転寿司にはいけなくなるかも？",
      image: sushiOneImage,
      image2: sushiTableImage,
      alt: "黄色いシュノーケルがついた縁がオレンジ色のダイビングマスク",
      width: imageWidth,
      height: imageHeight,
    },
    {
      name: "刺し身",
      decription: "魚本来の食感や味を楽しみたい場合は、刺し身が最適です。",
      exDescription: "船上にて、採れたての魚を食べることも出来ます。",
      image: sashimiNanikaImage,
      image2: sashimiTableImage,
      alt: "黄色いシュノーケルがついた縁がオレンジ色のダイビングマスク",
      width: imageWidth,
      height: imageHeight,
    },
  ];

  return (
    <Layout title="グルメ" hasBackgroundColor>
      <HeroHeader
        title="グルメ"
        titleSub="を楽しむ"
        titleAlignment="left"
        image={heroGourmet}
        alt="夕焼けをバックにイカや貝を食べる画像"
        type="gourmet"
      />
      {equipments.map((item, index) => (
        <Section
          name={item.name}
          description={item.decription}
          exDescription={item.exDescription}
          key={index}
          isGourmet
        >
          <div className={styles.imagesWrapper}>
            <div className={styles.images}>
              <div className={styles.image}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  layout="fill"
                />
              </div>
              <div className={styles.image}>
                <Image
                  src={item.image2}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}
      <Search
        text="グルメ"
        link="https://www.google.co.jp/search?q=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0%E3%80%80%E3%82%B0%E3%83%AB%E3%83%A1+%E7%94%BB%E5%83%8F&sxsrf=ALiCzsbTWpyXgll-X-DyJB2qg0wh_TgvIg%3A1662501392657&ei=EMIXY8rkJ9eGmAWglqGIBA&ved=0ahUKEwjKrMqnlIH6AhVXA6YKHSBLCEEQ4dUDCA4&uact=5&oq=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0%E3%80%80%E3%82%B0%E3%83%AB%E3%83%A1+%E7%94%BB%E5%83%8F&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEMgcIABAeEKIEMgUIABCiBDIFCAAQogQ6CggAEEcQ1gQQsAM6BAgjECc6CQgAEIAEEAQQJToFCAAQsQM6BwgAEIAEEAQ6CAgAELEDEIMBOggIABAeEA8QBDoGCAAQHhAPOggIABAeEAgQBDoKCAAQHhAPEAgQCjoKCAAQHhAPEAgQBDoFCCEQoAE6BAghEBVKBAhBGABKBAhGGABQ2wRYxh5gyiJoAXABeAGAAa0BiAGlDpIBBDMuMTOYAQCgAQHIAQrAAQE&sclient=gws-wiz"
      />
      <Carousel defaultPosition={1} hiddenText />
    </Layout>
  );
};

export default Equipment;
