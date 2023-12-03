import { useContext } from "react";
import { ProductCardContext } from ".";

const errorMessage =
  "useProductCardContext must be used within a child of ProductCard.";

export const useProductCardContext = () => {
  const context = useContext(ProductCardContext);

  if (context === undefined) throw new Error(errorMessage);

  return context;
};
