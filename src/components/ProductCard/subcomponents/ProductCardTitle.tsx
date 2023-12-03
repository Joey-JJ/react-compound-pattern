import { useProductCardContext } from "../useProductCardContext";

export function ProductCardTitle() {
  const { title } = useProductCardContext();
  return <h1>{title}</h1>;
}
