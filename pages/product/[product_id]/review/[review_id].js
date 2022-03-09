import { useRouter } from "next/router";

const rId = () => {
  const router = useRouter();
  const { product_id, review_id } = router.query;
  return (
    <div>
      <h1>
        Product{product_id} review page is Review{review_id}
      </h1>
    </div>
  );
};

export default rId;
