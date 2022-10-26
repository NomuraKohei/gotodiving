import Head from "next/head";
import styles from "@styles/Layout.module.scss";
import React, { ReactNode, useContext } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimationState } from "@/pages/_app";

interface Props {
  children: ReactNode;
  title: string;
  isAnimation?: boolean;
  hasBackgroundColor?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const menu = [
    { text: "トップ", url: "index.html" },
    { text: "風景", url: "landscape.html" },
    { text: "生物", url: "marinelife.html" },
    { text: "装備", url: "equipment.html" },
    { text: "グルメ", url: "gourmet.html" },
  ];
  const router = useRouter();
  const { isTopAnimation } = useContext(AnimationState);

  return (
    <div className={styles.container}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
                `}
      </Script>
      <Head>
        <title>{props.title === "トップ" ? "海の歩き方" : `海の歩き方 | ${props.title}`}</title>
        <meta
          name="description"
          content="ダイビング楽しみ方はなにか？ダイビングは何が楽しいのか？それを発見するためのWebサイト「海の歩き方」"
        />
        <link rel="icon" href="./favicon.ico" />
        <meta property="og:title" content="海の歩き方" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="ダイビング楽しみ方はなにか？ダイビングは何が楽しいのか？それを発見するためのWebサイト「海の歩き方」"
        />
        <meta property="og:url" content="https://gotodiving.vercel.app/" />
        <meta property="og:image" content="https://gotodiving.vercel.app/ogp.jpg" />
        <meta property="og:site_name" content="海の歩き方" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="海の歩き方" />
        <meta
          name="twitter:description"
          content="ダイビング楽しみ方はなにか？ダイビングは何が楽しいのか？それを発見するためのWebサイト「海の歩き方」"
        />
        <meta name="twitter:image" content="https://gotodiving.vercel.app/ogp.jpg" />
        <meta name="twitter:url" content="https://gotodiving.vercel.app/" />
      </Head>
      <header
        className={`${styles.header} ${
          props.isAnimation ? (isTopAnimation ? styles.headerAnimation : "") : ""
        }`}
      >
        <nav aria-label="海の歩き方">
          <ul aria-label="海の歩き方" className={styles.menubar}>
            {menu.map((item) => (
              <li key={item.text} className={styles.menulist}>
                <a href={item.url} aria-current={router.asPath === item.url ? "page" : undefined}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={`${styles.main} ${props.hasBackgroundColor ? styles.mainBackground : ""}`}>
        {props.children}
      </main>
      <footer className={styles.footer}>
        <small>© D214038 Kohei Nomura All right reserved</small>
      </footer>
    </div>
  );
};

export default Layout;
