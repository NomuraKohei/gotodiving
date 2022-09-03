import React from "react";
import styles from "@styles/Search.module.scss";
import Link from "next/link";
import searchIcon from "@images/icon-search.svg";
import Image from "next/image";

const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <p className={styles.searchRecommendation}>興味が出たら、検索してみよう！</p>
      <Link href="https://www.google.co.jp/search?q=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0+%E9%A2%A8%E6%99%AF&sxsrf=ALiCzsZWzaUZX-w-zvNPxugZJZlB2enTsA%3A1662188137661&source=hp&ei=afoSY4-eJtaloASomIPABg&iflsig=AJiK0e8AAAAAYxMIebGOlaN4Q9usHdpk0suRYTGGJbX6&ved=0ahUKEwjP9virhfj5AhXWEogKHSjMAGgQ4dUDCAk&uact=5&oq=%E3%83%80%E3%82%A4%E3%83%93%E3%83%B3%E3%82%B0+%E9%A2%A8%E6%99%AF&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QDzoHCCMQ6gIQJ1CiAViiAWC7AmgBcAB4AIABZIgBZJIBAzAuMZgBAKABAqABAbABCg&sclient=gws-wiz">
        <a className={styles.searchBox}>
          <span>ダイビング　風景</span>
          <div className={styles.searchIcon}>
            <Image src={searchIcon} alt="検索アイコン" width={43} height={43} />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Search;
