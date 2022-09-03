import React from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Landscape.module.scss";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import heroMarinelife from "@images/hero-marinelife.webp";
import Light from "@images/landscape-light.webp";
import Reef from "@images/landscape-reef.webp";
import Artifact from "@images/landscape-artifact.webp";
import HeroHeader from "@/components/HeroHeader";

const Landscape: NextPage = () => {
  const sectionItems = [
    {
      title: "光",
      description:
        "スキューバダイビングで魅力的なのはなんといっても光の美しさ。光があってこそ、海の中が神秘的に見えるものです。光の強さや色は、海水の成分や水深により色や強さが変化します。水分子や海水の成分により太陽の光が吸収・散乱されるため、水深に応じて暗くなります。特に水分子は、赤い光を吸収するので海は青々しく見えます。このような化学的な変化により、海中の光は魅力が増します。",
      image: Light,
      alt: "６枚の光の美しい海中風景の画像",
    },
    {
      title: "岩礁",
      description:
        "スキューバダイビングで欠かせないものが岩礁です。岩礁は、海の中の岩や崖を表しています。この岩礁の成分は、溶岩が冷えたものやサンゴの死骸が積み上がったものなど様々です。日本では、伊豆諸島などの活火山の付近において、崖のような岩礁の隆起があるため、とてもダイナミックな地形を体験できます。このような岩礁は、冒険心をくすぐると共に、植物や動物のすみかとなっているので、近づいて見ると数え切れないほどの生物が住んでいるところも特徴です。",
      image: Reef,
      alt: "６枚のダイナミックな岩礁が写った海中風景の画像",
    },
    {
      title: "人工物",
      description:
        "海の中にあるのは、自然的に出来たものだけでなく人工物もあります。フィリピンでは太平洋戦争時の戦闘機、タイでは巨大な旅客船、八丈島では海底ケーブルなどと様々です。見慣れない海底風景に突如現れる人工物は、とてもワクワクするものです。しかし、人工物は以前の姿とは大きく異なります。これは、海水により鉄が著しく腐食してしまうためです。鉄でなくともプラスチックはバラバラになったり、フジツボに寄生されたりなど、以前とは姿の違う点が特徴です。",
      image: Artifact,
      alt: "６枚の風化した人工物が写った海中風景の画像",
    },
  ];

  return (
    <Layout title="風景" hasBackgroundColor>
      <HeroHeader
        title="生物"
        titleSub="を楽しむ"
        titlePos={{ left: 160, bottom: 80 }}
        titleAlignment="left"
        image={heroMarinelife}
        alt="赤いソフトコーラルの中心に白いカエルアンコウが下を見ている画像"
      />
      <>
        {sectionItems.map((item, index) => (
          <section className={styles.enjoyWay} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.images}>
              <Image src={item.image} layout="responsive" alt={item.alt} />
            </div>
          </section>
        ))}
      </>
      <Carousel defaultPosition={1} />
    </Layout>
  );
};

export default Landscape;
