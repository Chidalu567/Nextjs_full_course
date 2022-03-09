import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/blog">
            <a>Head to Blog page</a>
          </Link>
        </li>
        <li>
          <Link href="/docs">
            <a>Head to docs page</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Head to product page</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Export default for other file to use
export default Home;
