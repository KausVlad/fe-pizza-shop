import { useGetPizzasQuery } from "../store/pizzaApi/pizza.endpoints";

export default function PizzaList() {
  const { data, error, isLoading } = useGetPizzasQuery(null);
  console.log(data, error, isLoading);
  return (
    <div>
      {data?.map((pizza) => <div key={pizza.id}>{pizza.pizzaName}</div>)}
    </div>
  );
}
