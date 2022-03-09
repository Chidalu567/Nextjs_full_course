import Link from "next/link";

// ////////////////////////////// Next component definition
const Product = () => {
  return (
    <div>
      <h1>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h1>
    </div>
  );
};

// export for external file to use
export default Product;
