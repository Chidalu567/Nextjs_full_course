import { useRouter } from "next/router";

//////////////////////////////// Next component to handle dynamic routing
const pId = () => {
  const router = useRouter();
  const { product_id } = router.query;
  return (
    <div>
      <h3>Product list {product_id}</h3>
    </div>
  );
};

export default pId;
