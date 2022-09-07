import React from "react";
import styles from "@styles/HeroHeader.module.scss";
import Image, { StaticImageData } from "next/image";
import ScrollArrow from "./ScrollArrow";

interface Props {
  image: StaticImageData;
  alt: string;
  title: string;
  titleSub: string;
  titlePos?: { top?: number; right?: number; bottom?: number; left?: number };
  titleAlignment?: "left" | "right";
}

const HeroHeader: React.FC<Props> = (props) => {
  const isTitlePos = !!(
    props.titlePos?.top ||
    props.titlePos?.right ||
    props.titlePos?.bottom ||
    props.titlePos?.left
  );

  return (
    <section className={styles.heroHeader}>
      <Image src={props.image} alt={props.alt} layout="fill" objectFit="cover" priority />
      <h2
        className={`${styles.title} ${isTitlePos ? styles.titleInitialPos : ""}`}
        style={{
          top: props.titlePos?.top || undefined,
          right: props.titlePos?.right || undefined,
          bottom: props.titlePos?.bottom || undefined,
          left: props.titlePos?.left || undefined,
          textAlign: props.titleAlignment || undefined,
        }}
      >
        <span className={styles.titleMain}>{props.title}</span>
        <span className={styles.titleSub}>{props.titleSub}</span>
      </h2>
      <ScrollArrow />
    </section>
  );
};

export default HeroHeader;
