import { useGetPizzaByNameQuery } from "../store/pizzaApi/pizza.endpoints";

export default function PizzaProduct() {
  const {} = useGetPizzaByNameQuery;
  return <div>PizzaProduct</div>;
}
