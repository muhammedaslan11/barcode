import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  );
};

export default ProductDetail;
