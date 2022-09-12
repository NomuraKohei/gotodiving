import React from "react";
import styles from "@styles/ScrollArrow.module.scss";

interface Props {
  text?: string;
  isTopHeader?: boolean;
}

const ScrollArrow: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.arrow} ${props.isTopHeader ? styles.arrowTopHeader : ""}`}>
      {props.text || "scroll"}
    </div>
  );
};

export default ScrollArrow;
