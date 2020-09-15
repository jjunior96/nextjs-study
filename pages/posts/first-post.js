import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <h1>Firt Post</h1>
      <h2>
        <Link href="/"> Home</Link>
      </h2>
    </Layout>
  )
};

export default FirstPost;