import React from 'react';
import Link from 'next/link';

const FirstPost = () => {
  return (
    <>
      <h1>Firt Post</h1>
      <h2>
        <Link href="/"> Home</Link>
      </h2>
    </>
  )
};

export default FirstPost;