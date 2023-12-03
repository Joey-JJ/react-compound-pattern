import { useProductCardContext } from "../useProductCardContext";

export function ProductCardDescription() {
  const { description } = useProductCardContext();
  return <p>{description}</p>;
}
