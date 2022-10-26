import React from "react";
import styles from "@styles/HeroHeader.module.scss";
// import Image, { StaticImageData } from "next/image";
import ScrollArrow from "./ScrollArrow";

interface Props {
  image: string;
  alt: string;
  title: string;
  titleSub: string;
  titleAlignment?: "left" | "right";
  type?: "marineLife" | "equipment" | "gourmet";
}

const HeroHeader: React.FC<Props> = (props) => {
  const isTitlePos = !!props.type;

  return (
    <section className={styles.heroHeader}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        // layout="fill"
        // objectFit="cover"
        // priority
      />
      <h2
        className={`${styles.title} ${isTitlePos ? styles.titleInitialPos : ""}  ${
          isTitlePos ? styles.titleInitialPos : ""
        } ${props.type === "marineLife" ? styles.titleMarineLife : ""} ${
          props.type === "equipment" ? styles.titleEquipment : ""
        } ${props.type === "gourmet" ? styles.titleGourmet : ""}`}
        style={{
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
