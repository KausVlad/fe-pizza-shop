import { useGetPizzasQuery } from "../store/pizzaApi/pizza.endpoints";
import PizzaCard from "./ui/PizzaCard";

export default function PizzaList() {
  const { data, error, isLoading } = useGetPizzasQuery(null);
  console.log(data, error, isLoading);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {data?.map((pizza) => <PizzaCard key={pizza.id} pizzaData={pizza} />)}
    </div>
  );
}
