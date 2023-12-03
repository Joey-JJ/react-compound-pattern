import { createContext } from "react";
import { Product } from "../../App";
import {
  ProductCardButton,
  ProductCardDescription,
  ProductCardTitle,
} from "./subcomponents";

export const ProductCardContext = createContext<Product | undefined>(undefined);

type ProductCardProps = Readonly<{
  children?: React.ReactNode;
  product: Product;
}>;

ProductCard.Title = ProductCardTitle;
ProductCard.Description = ProductCardDescription;
ProductCard.Button = ProductCardButton;

export default function ProductCard({ children, product }: ProductCardProps) {
  return (
    <ProductCardContext.Provider value={product}>
      <div>{children}</div>
    </ProductCardContext.Provider>
  );
}
