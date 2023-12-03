import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export type Product = Readonly<{
  id: string;
  title: string;
  description: string;
  actionText: string;
}>;

const productData: Product[] = [
  {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    actionText: "Action 1",
  },
  {
    id: "2",
    title: "Title 2",
    description: "Description 2",
    actionText: "Action 2",
  },
  {
    id: "3",
    title: "Title 3",
    description: "Description 3",
    actionText: "Action 3",
  },
];

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const res = await new Promise<Product[]>((resolve) =>
        setTimeout(() => resolve(productData), 1000)
      );

      setProducts(res);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return products.map((product) => (
    <ProductCard key={product.id} product={product}>
      <ProductCard.Title />
      <ProductCard.Description />
      <ProductCard.Button />
    </ProductCard>
  ));
}
