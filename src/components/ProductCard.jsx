import { useGetProductsQuery } from "../store/api";

export function ProducCard() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="Products">
    {data.map((product)=>(
      <div className="Product" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <h2>{product.price}$</h2>
      <button>Подробнее</button>
    </div>
    ))}
    </div>
  );
}