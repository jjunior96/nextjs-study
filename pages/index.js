import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <h2>
        <Link href="/posts/first-post">
          First Post
        </Link>
      </h2>
    </>
  )
}

export default Home;