import React, { ReactNode } from "react";
import styles from "@styles/Section.module.scss";

interface SectionProps {
  name: string;
  description: string;
  exDescription?: string;
  isReverse?: boolean;
  children: ReactNode;
  height?: number;
  isCenter?: boolean;
  isGourmet?: boolean;
  isFlexStartSP?: boolean;
  disbleTopPadding?: boolean;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <section
      className={`${styles.enjoyWay} ${props.isReverse ? styles.enjoyWayReverse : ""} ${
        props.isCenter ? styles.enjoyWayCenter : ""
      } ${props.isGourmet ? styles.enjoyWayGourmet : ""} ${
        props.isFlexStartSP ? styles.enjoyWayFlexStartSP : ""
      } ${props.disbleTopPadding ? styles.enjoyWayDisableTopPadding : ""}`}
      style={{ height: props.height }}
    >
      <div className={styles.textContents}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        {props.exDescription && <p>{props.exDescription}</p>}
      </div>
      {props.children}
    </section>
  );
};

export default Section;
