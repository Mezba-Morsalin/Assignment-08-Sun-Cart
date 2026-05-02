import data from "@/lib/data.json";
import ProductUI from "../ProductUI";

const SingleProducts = async ({ params }) => {
  const { id } = await params;

  const product = data.find(
    (item) => item.id.toString() === id.toString()
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return <ProductUI product={product} />;
};

export default SingleProducts;