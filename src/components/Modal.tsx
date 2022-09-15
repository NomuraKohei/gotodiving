import React from "react";
import styles from "@styles/Modal.module.scss";

interface Props {
  currentVideo: string;
  toggleModaClose: () => void;
}

const Modal: React.FC<Props> = (props) => {
  return (
    <div className={styles.videoWrapper}>
      <div className={styles.videoWrapInner}>
        <div className={styles.video}>
          <video controls autoPlay muted width={1280}>
            <source src={props.currentVideo} type="video/webm" />
            お使いのブラウザは、動画を再生できません。chrome, edge, safariの最新版をご利用ください。
          </video>
        </div>
        <button className={styles.close} onClick={props.toggleModaClose}>
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
