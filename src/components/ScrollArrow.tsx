import React from "react";
import styles from "@styles/ScrollArrow.module.scss";

interface Props {
  text?: string;
}

const ScrollArrow: React.FC<Props> = (props) => {
  return <div className={styles.arrow}>{props.text || "scroll"}</div>;
};

export default ScrollArrow;
