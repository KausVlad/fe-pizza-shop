import { useParams } from "react-router-dom";
import { useGetPizzaByNameQuery } from "../store/pizzaApi/pizza.endpoints";

export default function PizzaProduct() {
  const { pizzaName } = useParams();
  const { data } = useGetPizzaByNameQuery(pizzaName || "");
  console.log(data, pizzaName);
  return <div>PizzaProduct</div>;
}
