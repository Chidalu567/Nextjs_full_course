import Link from "next/link";

//////////////////////////////// Next component defintion
const Blog = () => {
  return (
    <div>
      <h1>The Blog page</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/post">
        <a>User Post</a>
      </Link>
    </div>
  );
};

// export for other files to use'
export default Blog;
