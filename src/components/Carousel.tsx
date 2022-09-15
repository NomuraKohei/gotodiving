import styles from "@styles/Carousel.module.scss";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroLandscape from "@images/hero-landscape.webp";
import heroMarineLife from "@images/hero-marinelife.webp";
import heroEquipment from "@images/hero-equipment.webp";
import heroGourmet from "@images/hero-gourmet.webp";
import Link from "next/link";

interface Props {
  defaultPosition: number;
  hiddenText?: boolean;
}

const Carousel: React.FC<Props> = (props) => {
  const [pageWidth, setPageWidth] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [currentSlideNum, setCurrentSlideNum] = useState(props.defaultPosition);
  const CAROUSEL_ITEM_MAX_WIDTH = 944;

  const carouselImages = [
    {
      imageData: heroLandscape,
      title: "風景",
      alt: "崖のような岩礁を下から見上げた海中風景の画像",
      url: "/landscape",
    },
    {
      imageData: heroMarineLife,
      title: "生物",
      alt: "赤いソフトコーラルの中心に白いカエルアンコウが下を見ている画像",
      url: "/marinelife",
    },
    {
      imageData: heroEquipment,
      title: "装備",
      alt: "ウェットスーツなどのダイビングに必要な装備を着て泳ぐ人の画像",
      url: "/equipment",
    },
    {
      imageData: heroGourmet,
      title: "グルメ",
      alt: "夕焼けをバックにイカや貝を食べる画像",
      url: "/gourmet",
    },
  ];

  const resizeHandler = useCallback(() => {
    setPageWidth(window.innerWidth);
  }, []);

  const scrollRight = useCallback(() => {
    const currentScrollRightWidth = scrollAmount + CAROUSEL_ITEM_MAX_WIDTH;
    setScrollAmount(currentScrollRightWidth);
    setCurrentSlideNum(currentScrollRightWidth / CAROUSEL_ITEM_MAX_WIDTH + 1);
  }, [scrollAmount]);

  const scrollLeft = useCallback(() => {
    const currentScrollLeftWidth = scrollAmount - CAROUSEL_ITEM_MAX_WIDTH;
    setScrollAmount(currentScrollLeftWidth);
    setCurrentSlideNum(currentScrollLeftWidth / CAROUSEL_ITEM_MAX_WIDTH + 1);
  }, [scrollAmount]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  useEffect(() => {
    setScrollAmount(CAROUSEL_ITEM_MAX_WIDTH * (props.defaultPosition - 1));
  }, [props.defaultPosition]);

  return (
    <section className={styles.carouselWrap}>
      {!props.hiddenText && <p className={styles.question}>あなたは一番、何を楽しみたい？</p>}
      <div className={styles.carouselWrapInner} id="myCarousel-items">
        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.previous} ${currentSlideNum === 1 ? styles.hidden : ""}`}
            aria-controls="myCarousel-items"
            aria-label="前のリンクへ"
            onClick={scrollLeft}
          />
          <button
            type="button"
            className={`${styles.next} ${
              currentSlideNum === carouselImages.length ? styles.hidden : ""
            }`}
            aria-controls="myCarousel-items"
            aria-label="次のリンクへ"
            onClick={scrollRight}
          />
          {carouselImages.map((item, index) => (
            <div
              role="group"
              aria-roledescription="slide"
              aria-label={`${carouselImages.length}枚中${index + 1}枚目`}
              key={index}
              className={`${styles.carouselItemWrap} ${
                index !== currentSlideNum - 1 ? styles.disable : ""
              }`}
              style={{
                transform:
                  pageWidth >= 904
                    ? `translate3d(${
                        (pageWidth - CAROUSEL_ITEM_MAX_WIDTH) / 2 - scrollAmount
                      }px,0,${index !== currentSlideNum - 1 ? "-200px" : "0"})`
                    : undefined,
              }}
            >
              <div className={styles.carouselItem}>
                <Link href={item.url}>
                  <a className={styles.carouselItemInner}>
                    <Image alt={item.alt} src={item.imageData} layout="fill" priority />
                  </a>
                </Link>
              </div>
              <section className={styles.pageTitle}>
                <h2>{item.title}</h2>
                <span className={styles.sub}>を楽しむ</span>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
