import React, { useEffect, useState } from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Equipment.module.scss";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import maskImage from "@images/equipment/mask.webp";
import wetsuitsImage from "@images/equipment/wetsuits.webp";
import finImage from "@images/equipment/fin.webp";
import equipmentsImage from "@images/equipment/equipments.webp";
import heroEquipment from "@images/hero-equipment.webp";

import HeroHeader from "@/components/HeroHeader";
import Search from "@/components/Search";
import Section from "@/components/Section";

const Equipment: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener(`resize`, updateWidth);

    return () => window.removeEventListener(`resize`, updateWidth);
  }, []);

  const equipments = [
    {
      name: "マスク",
      decription:
        "水中を見るためのマスク。画像のように一枚のガラスになっていたり、２枚に分かれていたり、海女さんのように円形のガラスになっていたりと様々です。好きな形や性能のマスクを是非探してみましょう。",
      isReverse: false,
      image: maskImage,
      alt: "黄色いシュノーケルがついた縁がオレンジ色のダイビングマスク",
      width: 414,
      height: 489,
    },
    {
      name: "ウェットスーツ",
      decription:
        "体温や危険物から体を保護するための道具です。色の組み合わせは無限にあり、オリジナリティのある道具の一つです。",
      isReverse: true,
      image: wetsuitsImage,
      alt: "オレンジ色のラインが入った黒のウェットスーツ",
      width: 508,
      height: 871,
    },
    {
      name: "フィン",
      decription:
        "水中での推進力をあげる道具です。バタ足が苦手で泳げないひとでも簡単に進むようになります。得意な人でも、このフィンがないとなかなか進めません。",
      isReverse: false,
      image: finImage,
      alt: "オレンジ色のダイビングフィン",
      width: 391,
      height: 491,
    },
  ];

  return (
    <Layout title="装備" hasBackgroundColor>
      <HeroHeader
        title="装備"
        titleSub="を楽しむ"
        titlePos={{ right: 160, top: 240 }}
        titleAlignment="right"
        image={heroEquipment}
        alt="ウェットスーツなどのダイビングに必要な装備を着て泳ぐ人の画像"
      />
      {equipments.map((item, index) => (
        <Section
          name={item.name}
          description={item.decription}
          key={index}
          height={item.height}
          isReverse={item.isReverse}
        >
          <div className={styles.equipment} style={{ left: (windowWidth - item.width) / 2 }}>
            <Image src={item.image} alt={item.alt} width={item.width} height={item.height} />
          </div>
        </Section>
      ))}
      <Section
        name="他にもいろいろ"
        description="装備はいろいろあります。ウェットスーツに追加し、体を保護するためのフードベストや手袋、タンクを背負い息をすうためのBCDやレギュレータ、海をさらに楽しむためのカメラやダイブコンピュータなど。"
        isCenter
      >
        <Image src={equipmentsImage} alt="様々なダイビング器材" />
      </Section>
      <Search
        text="装備"
        link="https://www.google.co.jp/search?q=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0%E3%80%80%E8%A3%85%E5%82%99&sxsrf=ALiCzsbecaMAS8k3W9Zr6UAmSYyXmp8_sw%3A1662501349709&source=hp&ei=5cEXY7KwKMWTr7wP0JansA0&iflsig=AJiK0e8AAAAAYxfP9UjF0EYXybPaGpx9kcRDiytRbSH9&ved=0ahUKEwjytoqTlIH6AhXFyYsBHVDLCdYQ4dUDCAk&uact=5&oq=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0%E3%80%80%E8%A3%85%E5%82%99&gs_lcp=Cgdnd3Mtd2l6EAMyCQgAEIAEEAQQJTIJCAAQgAQQBBAlMgkIABCABBAEECUyCQgAEIAEEAQQJTIECAAQHjIECAAQHjoHCCMQ6gIQJ1DKA1jKA2D8BGgBcAB4AIABV4gBV5IBATGYAQCgAQKgAQGwAQo&sclient=gws-wiz"
      />
      <Carousel defaultPosition={4} hiddenText />
    </Layout>
  );
};

export default Equipment;
