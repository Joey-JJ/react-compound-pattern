import { useProductCardContext } from "../useProductCardContext";

type ProductCardButtonProps = Readonly<{
  onClick?: () => void;
}>;

export function ProductCardButton({ onClick }: ProductCardButtonProps) {
  const { actionText } = useProductCardContext();
  return <button onClick={onClick}>{actionText}</button>;
}
