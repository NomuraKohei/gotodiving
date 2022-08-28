import React from "react";
import { NextPage } from "next/types";
import Layout from "src/components/Layout";
import styles from "@styles/Home.module.scss";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="トップ">
      <section className={styles.heroheader}>
        <h1>海の歩き方</h1>
        <p>スキューバダイビングで海を楽しもう</p>
        <div>
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
          <Image src="" alt="" />
        </div>
        <div>
          <Image src="" alt="" />
          know more
        </div>
      </section>
      <p>ダイビングの楽しみ方は人ぞれぞれ</p>
      <p>幻想的な海中風景を見て感動する？</p>
      <p>個性的な水中生物たちを観察する?</p>
      <p>かっこいい装備を集めて冒険する？</p>
      <p>海鮮グルメを楽しみにしながらダイビングする？</p>
      <section>
        <p>あなたは一番、何を楽しみたい？</p>
      </section>
    </Layout>
  );
};

export default Home;
