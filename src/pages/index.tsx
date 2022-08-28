import React from 'react';
import { NextPage } from 'next/types';
import Layout from 'src/components/Layout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout title="Seawater Temperature Data Visualization">
      <div className={styles.main}>
        a
      </div>
    </Layout>
  );
}

export default Home