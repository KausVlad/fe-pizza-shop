import { TPizzaData } from "../store/pizzaApi/pizza.endpoints.types";

type TPizzaCardProps = {
  pizzaData: TPizzaData;
};

export default function PizzaCard({ pizzaData }: TPizzaCardProps) {
  return (
    <div className="flex">
      <img src={"/img/refPizza.webp"} alt="pizza" />
      <div>{pizzaData.pizzaName}</div>
    </div>
  );
}
