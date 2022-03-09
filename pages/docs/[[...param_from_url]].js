import { useRouter } from "next/router";
import Link from "next/link";

//////////////////////////////// Next component for docs page
const DocsPage = () => {
  const router = useRouter();

  const { param_from_url = [] } = router.query; // We get the params that are passed to the url after /docs
  console.log(param_from_url);

  if (param_from_url.length > 0) {
    // Works if there exist a path after /feature1 like /feature1/example1
    if (param_from_url[1]) {
      return (
        <div>
          <h3>This is the {param_from_url[1]} after the feature page</h3>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>
      );
    }

    // Return if there is only one path /feature1
    return (
      <div>
        <h3>This is the {param_from_url[0]} from the docs</h3>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
    );
  }

  // Return if there is no routing from the docs /docs
  return (
    <div>
      <h2>Docs page for brand</h2>
      <ul>
        <li>
          <Link href="/docs/feature1">
            <a>Feature 1</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/feature2">
            <a>Feature 2</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/feature3">
            <a>Feature 3</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default DocsPage;
