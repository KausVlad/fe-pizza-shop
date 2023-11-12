import { useGetPizzasQuery } from "../store/pizzaApi/pizza.endpoints";
import PizzaCard from "./PizzaCard";

export default function PizzaList() {
  const { data, error, isLoading } = useGetPizzasQuery(null);
  console.log(data, error, isLoading);
  return (
    <div>
      {data?.map((pizza) => <PizzaCard key={pizza.id} pizzaData={pizza} />)}
    </div>
  );
}
