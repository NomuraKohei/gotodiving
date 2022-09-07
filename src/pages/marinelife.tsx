import React from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Marinelife.module.scss";
import Image, { StaticImageData } from "next/image";
import Carousel from "@/components/Carousel";
import heroMarinelife from "@images/hero-marinelife.webp";
import HeroHeader from "@/components/HeroHeader";
import ShirowaniImage from "@images/marinlife/shirowani.webp";
import SakataImage from "@images/marinlife/sakatazame.webp";
import NemuribukaImage from "@images/marinlife/nemuribuka.webp";
import TotautusboImage from "@images/marinlife/torautsubo.webp";
import HanagigeutsuboImage from "@images/marinlife/hanahigeutsubo.webp";
import NisegoishiutsuboImage from "@images/marinlife/nisegoishiutsubo.webp";
import TatsunoitokoImage from "@images/marinlife/tatsunoitoko.webp";
import HanatatsuImage from "@images/marinlife/hanatatsu.webp";
import OumiumaImage from "@images/marinlife/oumiuma.webp";
import OtohimeebiImage from "@images/marinlife/otohimeebi.webp";
import FurisodeebiImage from "@images/marinlife/furisodeebi.webp";
import isokonpeitouganiImage from "@images/marinlife/isokonpeitougani.webp";
import Search from "@/components/Search";
import Section from "@/components/Section";

interface BalloonProps {
  name: string;
  distribution?: React.ReactNode;
  discoverable?: React.ReactNode;
  description: React.ReactNode;
  cite: string[];
}

const Balloon: React.FC<BalloonProps> = (props) => {
  return (
    <section className={styles.balloon}>
      <div className={styles.details}>
        <h4>{props.name}</h4>
        {props.distribution && (
          <p>
            <span className={styles.key}>分布：</span>
            {props.distribution}
          </p>
        )}
        {props.discoverable && (
          <p>
            <span className={styles.key}>発見できる場所：</span>
            {props.discoverable}
          </p>
        )}
        <p className={styles.balloonDescription}>
          <span className={styles.key}>特徴：</span>
          {props.description}
        </p>
      </div>
      <p className={styles.cite}>
        <span>参考文献：</span>
        {props.cite.map((item, index) => (
          <cite key={index}>
            {index > 0 ? "," : ""}
            {item}
          </cite>
        ))}
      </p>
    </section>
  );
};

interface LifeImage {
  src: StaticImageData;
  name: string;
  width: number;
  height: number;
  pos: { top?: number; right?: number; bottom?: number; left?: number };
  description: React.ReactNode;
  useMapObj: { name: string; shape: string; coords: string };
  cite: string[];
  distribution?: React.ReactNode;
  discoverable?: React.ReactNode;
}
interface SectionItemProps {
  name: string;
  description: string;
  height?: number;
  width?: number;
  images: LifeImage[];
  isReverse?: boolean;
}

const SectionItem: React.FC<SectionItemProps> = (props) => {
  return (
    <Section name={props.name} description={props.description} isReverse={props.isReverse}>
      <div className={styles.imageContents} style={{ height: props.height, width: props.width }}>
        <div className={styles.images}>
          {props.images.map((item, index) => (
            <div
              className={styles.image}
              key={index}
              style={{
                top: item.pos.top,
                right: item.pos.right,
                bottom: item.pos.bottom,
                left: item.pos.left,
              }}
            >
              <map name={item.useMapObj.name} className={styles.imageMap}>
                <area shape={item.useMapObj.shape} coords={item.useMapObj.coords} alt={item.name} />
              </map>
              <Image
                src={item.src}
                alt={item.name}
                width={item.width}
                height={item.height}
                useMap={`#${item.useMapObj.name}`}
              />
              <Balloon
                name={item.name}
                distribution={item.distribution}
                discoverable={item.discoverable}
                description={item.description}
                cite={item.cite}
              />
            </div>
          ))}
        </div>
        <p className={styles.operation}>生き物をタップ または ホバーして説明を見る</p>
      </div>
    </Section>
  );
};

const Landscape: NextPage = () => {
  const citeTemplate1 =
    "[1] 海中生物図鑑―ダイバー・スノーケラーのための、誠文堂新光社、小林安雅、2005年8月1日、p";
  const citeTemplate2 =
    "[2] 山溪ハンディ図鑑　改訂版　日本の海水魚、山と溪谷社、吉野雄輔、2018年9月17日、p";
  const citeTemplate3 = "[3] 海洋生物ガイドブック、東海大学出版会、益田一、1999年3月20日、p";

  const sectionItems: SectionItemProps[] = [
    // サメ
    {
      name: "サメ",
      description:
        "危険なイメージを彷彿とさせる生物です。様々なサメがおり、襲ってくるような種類はほとんどいません。ほとんどは、地面や岩陰で休んでおり、非常にキュートです。しかし、ハンマーヘッドシャークなど、潜るポイントによっては危険な種もいるので油断は大敵です。",
      images: [
        {
          src: ShirowaniImage,
          name: "シロワニ",
          description: (
            <span>
              2.5m<sup>1</sup>にもなる大型のサメの一種。特徴は鋭い歯だが、見かけほど凶暴ではない
              <sup>2</sup>。写真は、小笠原の父島で撮影したもので、暗い岩穴で観測した。
            </span>
          ),
          width: 756,
          height: 248,
          pos: { top: 0, right: -100 },
          distribution: (
            <span>
              世界の温帯・熱帯の海域<sup>1, 2</sup>
            </span>
          ),
          discoverable: (
            <span>
              主に岩穴<sup>1, 2</sup>
            </span>
          ),
          cite: [`${citeTemplate1}16`, `${citeTemplate2}19`],
          useMapObj: {
            name: "shirowaniImage",
            shape: "poly",
            coords:
              "4,210,134,219,257,204,367,245,351,189,461,171,521,200,536,146,564,146,626,183,636,129,695,167,695,126,755,68,751,27,636,86,612,82,595,28,543,67,456,61,439,2,365,52,225,90,67,162,67,162",
          },
        },
        {
          src: SakataImage,
          name: "サカタザメ",
          description: (
            <span>
              昼は砂底に潜っているサメ。と思いきや実はエイの仲間である<sup>1</sup>
              。伊豆半島の大瀬崎や伊豆海洋公園で観測できる。
            </span>
          ),
          distribution: (
            <span>
              海底の砂地<sup>1, 2, 3</sup>
            </span>
          ),
          discoverable: (
            <span>
              南日本、南シナ海<sup>1, 2</sup>
            </span>
          ),
          width: 374,
          height: 161,
          pos: { bottom: 0, left: 0 },
          cite: [`${citeTemplate1}16`, `${citeTemplate2}24`, `${citeTemplate3}163`],
          useMapObj: {
            name: "sakatazameImage",
            shape: "poly",
            coords:
              "2,120,4,128,140,160,162,144,176,124,204,116,224,97,263,88,323,59,353,34,372,18,372,5,363,8,350,29,322,41,241,55,215,59,192,48,165,54,147,40,114,29,84,51,51,77,21,104,21,104",
          },
        },
        {
          src: NemuribukaImage,
          name: "ネムリブカ",
          description: (
            <span>
              性格はおとなしく<sup>2</sup>
              、第一背びれと尾びれの先端が白くなっていることが特徴<sup>2, 3</sup>
              。写真は小笠原諸島の父島で観測したもの。
            </span>
          ),
          distribution: (
            <span>
              インド洋・太平洋のサンゴ礁のある海域<sup>2, 3</sup>
            </span>
          ),
          discoverable: (
            <span>
              岩穴やサンゴ礁の下<sup>2, 3</sup>
            </span>
          ),
          width: 453,
          height: 282,
          pos: { bottom: 0, right: 0 },
          cite: [`${citeTemplate2}20`, `${citeTemplate3}162`],
          useMapObj: {
            name: "nemuribukaImage",
            shape: "poly",
            coords:
              "34,3,11,11,0,25,12,51,31,76,49,105,106,147,147,172,200,192,219,204,206,225,195,227,193,235,200,249,201,277,451,279,450,112,443,112,429,122,375,124,381,107,339,102,316,107,289,106,203,61,142,23,92,6,92,6",
          },
        },
      ],
    },
    // ウツボ
    {
      name: "ウツボ",
      description:
        "サメほど大型ではないものの、噛みつかれたら最後、無事では済まない。という認識は真実かもしれませんが、サメと同様ちょっかいをかけない限り攻撃してくることはありません。様々なバリエーションのウツボが存在し、中には青と黄色の細めのスタイルを持つウツボが存在します。常に口を開けており、口の中を掃除するエビを観察することも出来ます。",
      images: [
        {
          src: TotautusboImage,
          name: "トラウツボ",
          description: (
            <span>
              オレンジ色の体と白い斑点が特徴。また、突き出た鼻孔がチャームポイントである。顎は湾曲しているため完全に閉じることは出来ない
              <sup>1</sup>。
            </span>
          ),
          distribution: (
            <span>
              南日本、インド・太平洋<sup>1, 2</sup>
            </span>
          ),
          discoverable: (
            <span>
              主に沿岸の浅瀬における岩礁<sup>1</sup>
            </span>
          ),

          width: 456,
          height: 273,
          pos: { top: 0, left: 0 },
          cite: [`${citeTemplate1}18`, `${citeTemplate2}30-31`],
          useMapObj: {
            name: "totautusboImage",
            shape: "poly",
            coords:
              "2,271,268,269,261,245,259,217,242,221,239,228,233,228,247,204,251,203,261,180,272,172,299,151,324,141,422,132,452,113,450,101,438,96,427,100,322,97,326,92,339,95,330,85,332,84,341,87,336,81,349,81,346,75,359,80,354,69,370,65,376,70,383,59,388,47,384,34,395,26,391,22,375,30,366,28,317,33,298,4,294,8,299,19,304,36,277,36,244,37,185,60,171,68,163,81,116,79,100,78,105,68,95,64,87,70,67,47,29,42,2,43,2,43",
          },
        },
        {
          src: HanagigeutsuboImage,
          name: "ハナヒゲウツボ",
          description: (
            <span>
              生育具合で色の変わる魚で、幼魚のときは黒と黄、成魚のときは青と黄になる
              <sup>1, 2, 3</sup>
              。常に口を開けているが、威嚇しているわけではなく呼吸しているだけである<sup>2</sup>。
            </span>
          ),
          distribution: (
            <span>
              和歌山県以南の太平洋<sup>2</sup>
            </span>
          ),
          discoverable: (
            <span>
              砂礫（砂や小石）底や岩礁の穴<sup>1, 2, 3</sup>
            </span>
          ),
          width: 413,
          height: 356,
          pos: { top: 50, right: 0 },
          cite: [`${citeTemplate1}18`, `${citeTemplate2}29`, `${citeTemplate3}165`],
          useMapObj: {
            name: "hanagigeutsuboImage",
            shape: "poly",
            coords:
              "2,355,218,355,205,344,195,330,188,328,185,332,171,327,184,290,196,271,218,254,235,219,243,184,252,167,264,160,302,162,348,165,377,162,389,162,380,146,353,144,317,142,307,124,309,110,323,95,358,62,379,44,389,36,407,22,408,13,397,11,381,17,358,3,358,33,316,61,269,87,257,89,224,116,189,156,162,203,146,238,141,229,139,218,130,214,122,219,114,219,102,208,84,208,68,214,60,220,29,217,2,207,2,207",
          },
        },
        {
          src: NisegoishiutsuboImage,
          name: "ニセゴイシウツボ",
          description: (
            <span>
              体中や口の中まで黒点があることが特徴で、ウツボの中では大型である。<sup>2</sup>
            </span>
          ),
          distribution: (
            <span>
              八丈島、南日本の太平洋、インド洋や西太平洋<sup>2</sup>
            </span>
          ),
          discoverable: (
            <span>
              岩礁の穴<sup>2</sup>
            </span>
          ),
          width: 416,
          height: 350,
          pos: { bottom: 0, left: 0 },
          cite: [`${citeTemplate2}33`],
          useMapObj: {
            name: "nisegoishiutsuboImage",
            shape: "poly",
            coords:
              "3,330,17,336,34,334,69,347,155,337,210,318,232,306,270,288,332,281,356,269,414,243,414,215,405,211,410,204,413,180,391,159,335,144,296,110,193,72,132,62,81,29,56,12,3,5,3,5",
          },
        },
      ],
      isReverse: true,
    },
    // ウツボ
    {
      name: "ヨウジウオ",
      description:
        "有名なタツノオトシゴはこのヨウジウオ（科）に分類されます。他の生物にはない奇妙な形がポイントです。普段は岩や草かげに隠れており、尻尾をよく海藻に巻きつけています。体調が1cmほどしかないジャパニーズピグミーシーホースは、珍しさからとても人気な生物です。",
      images: [
        {
          src: TatsunoitokoImage,
          name: "タツノイトコ",
          description: (
            <span>
              海藻に尾を巻きつけている、ヨウジウオ科の魚<sup>1, 2</sup>。
            </span>
          ),
          distribution: (
            <span>
              南日本の太平洋、インド・太平洋<sup>1, 2</sup>
            </span>
          ),
          discoverable: (
            <span>
              岩礁、小石、砂底の海藻<sup>1, 2</sup>
            </span>
          ),
          width: 631,
          height: 169,
          pos: { top: 0, right: -50 },
          cite: [`${citeTemplate1}29`, `${citeTemplate2}75`],
          useMapObj: {
            name: "tatsunoitokoImage",
            shape: "poly",
            coords:
              "5,71,14,86,32,87,22,99,30,101,19,109,23,115,33,103,40,103,44,86,71,85,86,85,85,98,82,106,93,95,95,87,111,86,161,79,186,100,183,108,198,129,192,144,214,136,228,135,236,130,232,120,272,125,284,131,314,133,293,139,307,143,305,164,322,156,322,149,317,131,377,115,377,105,405,111,397,121,414,123,418,113,473,122,480,138,484,123,627,117,626,89,496,91,480,81,428,78,419,68,335,46,329,54,282,45,281,39,273,44,270,44,262,37,252,42,249,42,250,31,220,20,221,38,195,30,190,24,173,14,181,30,158,16,165,30,131,36,108,25,93,31,81,22,84,36,75,29,59,23,47,26,68,35,70,46,61,48,60,37,46,37,45,39,25,28,31,44,47,56,48,65,36,69,17,71,17,71",
          },
        },
        {
          src: OumiumaImage,
          name: "オオウミウマ",
          description: (
            <span>
              大きいものでは20~30cmほどになる<sup>1, 2</sup>
              。体の色は決まっていなく、黄色、焦げ茶、黒、まだら模様など様々である。<sup>2</sup>
            </span>
          ),
          distribution: (
            <span>
              南日本の太平洋や伊豆半島以南<sup>1, 2</sup>
            </span>
          ),
          discoverable: (
            <span>
              岩礁の海藻近くや石のある砂底<sup>1, 2</sup>
            </span>
          ),
          width: 333,
          height: 222,
          pos: { bottom: 0, right: 0 },
          cite: [`${citeTemplate1}28`, `${citeTemplate2}77`],
          useMapObj: {
            name: "oumiumaImage",
            shape: "poly",
            coords:
              "16,132,40,138,134,69,145,82,127,110,130,177,179,209,264,204,329,166,330,126,311,158,267,180,224,151,238,138,191,43,176,23,97,3,66,2,60,27,61,50,38,87,38,87",
          },
        },
        {
          src: HanatatsuImage,
          name: "ハナタツ",
          description: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          distribution: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          discoverable: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          width: 387,
          height: 333,
          pos: { bottom: 0, left: 0 },
          cite: ["fuga", ""],
          useMapObj: {
            name: "hanatatsuImage",
            shape: "poly",
            coords:
              "32,165,52,180,74,162,96,156,119,141,151,256,139,283,162,313,209,322,220,332,234,319,258,321,285,309,284,284,315,285,349,285,385,231,350,206,308,244,217,182,203,191,202,153,170,119,182,99,172,68,172,98,161,101,133,78,135,50,111,79,77,52,54,60,2,-1,57,96,54,101,31,84,54,123,5,95,6,116,48,134,54,152,50,158",
          },
        },
      ],
    },
    // エビ・カニ
    {
      name: "エビ・カニ",
      description:
        "一般的に身近な伊勢海老やタラバガニのような大型な種だけではなく、小型で特徴的なエビ・カニを発見できることはダイビングならではです。奇妙な歩き方をするフリソデエビは、ダイバーにとても人気です。基本的には、物陰に隠れているので見つけづらいですが、その分見つけがいがあるといえるでしょう。",
      height: 700,
      width: 600,
      images: [
        {
          src: OtohimeebiImage,
          name: "オトヒメエビ",
          description: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          distribution: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          discoverable: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          width: 343,
          height: 345,
          pos: { top: 0, left: 0 },
          cite: ["fuga", ""],
          useMapObj: {
            name: "otohimeebiImage",
            shape: "poly",
            coords:
              "9,114,32,136,64,148,76,162,84,183,96,201,107,218,122,226,113,230,84,229,53,274,33,300,26,313,21,332,36,310,49,288,61,274,87,238,111,235,126,229,141,228,139,254,133,289,129,314,135,345,138,283,144,244,152,226,152,245,148,278,149,301,147,318,149,342,167,344,158,311,159,287,159,255,161,232,164,229,170,248,179,273,193,300,204,313,214,320,229,317,209,310,196,296,180,267,171,241,169,225,173,225,184,245,198,261,218,274,231,288,251,301,253,295,222,267,192,243,180,221,199,210,205,190,220,185,218,179,258,146,262,137,331,127,330,123,294,122,253,135,230,150,262,119,295,96,274,106,241,129,224,149,225,82,217,122,214,156,204,159,149,81,79,3,72,5,113,51,157,104,196,159,179,172,134,185,109,162,89,155,73,131,34,114,22,111,22,111",
          },
        },
        {
          src: FurisodeebiImage,
          name: "フリソデエビ",
          description: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          distribution: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          discoverable: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          width: 312,
          height: 278,
          pos: { top: 200, right: 0 },
          cite: ["fuga", ""],
          useMapObj: {
            name: "furisodeebiImage",
            shape: "poly",
            coords:
              "11,100,13,109,38,84,51,102,46,115,60,121,52,151,61,156,85,151,84,160,50,162,49,169,91,170,113,168,131,160,140,167,121,191,93,213,102,228,107,217,150,169,173,172,192,209,211,218,230,233,245,235,264,241,290,225,300,179,279,124,269,89,245,78,229,93,223,70,216,81,191,56,188,39,181,34,177,38,182,52,169,62,170,81,194,95,192,102,153,90,143,45,133,44,145,89,91,55,67,51,59,42,48,44,41,54,28,63,20,81,20,81",
          },
        },
        {
          src: isokonpeitouganiImage,
          name: "イソコンペイトウガニ",
          description: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          distribution: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          discoverable: (
            <span>
              hoge<sup>1</sup>
            </span>
          ),
          width: 454,
          height: 446,
          pos: { bottom: 0, left: 0 },
          cite: ["fuga", ""],
          useMapObj: {
            name: "isokonpeitouganiImage",
            shape: "poly",
            coords:
              "69,249,92,260,145,200,112,339,141,354,165,243,179,242,188,341,208,341,217,248,197,217,207,212,237,241,263,247,303,273,322,322,337,319,324,274,331,223,342,201,330,194,270,204,260,194,307,170,305,195,328,190,326,158,302,147,293,154,280,136,326,117,327,129,339,127,343,99,327,109,217,60,151,107,126,144,142,172,103,195,105,210,84,238,84,238",
          },
        },
      ],
      isReverse: true,
    },
  ];

  return (
    <Layout title="風景" hasBackgroundColor>
      <HeroHeader
        title="生物"
        titleSub="を楽しむ"
        titlePos={{ left: 240, bottom: 160 }}
        titleAlignment="left"
        image={heroMarinelife}
        alt="赤いソフトコーラルの中心に白いカエルアンコウが下を見ている画像"
      />
      {sectionItems.map((item, index) => (
        <SectionItem
          name={item.name}
          description={item.description}
          height={item.height}
          width={item.width}
          images={item.images}
          isReverse={item.isReverse}
          key={index}
        />
      ))}
      <Search
        text="生物"
        link="https://www.google.co.jp/search?q=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0%E3%80%80%E7%94%9F%E7%89%A9&sxsrf=ALiCzsZ7qYDneXe6wcfS_Ud3gDSffHzJGQ%3A1662293739899&source=hp&ei=65YUY82lNKLLmAXis4TwAw&iflsig=AJiK0e8AAAAAYxSk-7I4TzkWW_q1Yzk1_r2H7CesZMpG&ved=0ahUKEwiNx4Hfjvv5AhWiJaYKHeIZAT4Q4dUDCAk&uact=5&oq=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0%E3%80%80%E7%94%9F%E7%89%A9&gs_lcp=Cgdnd3Mtd2l6EANQiQNYjR9giSFoAHAAeACAAQCIAQCSAQCYAQCgAQGwAQA&sclient=gws-wiz"
      />
      <Carousel defaultPosition={3} hiddenText />
    </Layout>
  );
};

export default Landscape;
