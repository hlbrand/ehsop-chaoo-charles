interface IParams {
  productId?: string;
}

const ProductDetailPage = ({ params }: { params: IParams }) => {
  console.log("params", params);

  return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
