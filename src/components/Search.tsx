import React from "react";
import styles from "@styles/Search.module.scss";
import Link from "next/link";
import ScrollArrow from "./ScrollArrow";

interface Props {
  text?: string;
  link?: string;
}

const Search: React.FC<Props> = (props) => {
  return (
    <div className={styles.search}>
      <p className={styles.searchRecommendation}>興味が出たら、検索してみよう！</p>
      <Link
        href={
          props.link ||
          "https://www.google.co.jp/search?q=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0+%E9%A2%A8%E6%99%AF&sxsrf=ALiCzsZWzaUZX-w-zvNPxugZJZlB2enTsA%3A1662188137661&source=hp&ei=afoSY4-eJtaloASomIPABg&iflsig=AJiK0e8AAAAAYxMIebGOlaN4Q9usHdpk0suRYTGGJbX6&ved=0ahUKEwjP9virhfj5AhXWEogKHSjMAGgQ4dUDCAk&uact=5&oq=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0+%E9%A2%A8%E6%99%AF&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QDzoHCCMQ6gIQJ1CiAViiAWC7AmgBcAB4AIABZIgBZJIBAzAuMZgBAKABAqABAbABCg&sclient=gws-wiz"
        }
      >
        <a className={styles.searchBox} rel="noopener noreferrer nofollow">
          <span className={styles.searchText}>{`ダイビング　${props.text || "風景"}`}</span>
          <div className={styles.searchIcon}>
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="4" />
              <path d="M26 26L41 41" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </a>
      </Link>
      <ScrollArrow text="他の楽しみを見る" />
    </div>
  );
};

export default Search;
