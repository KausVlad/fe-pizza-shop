import { Link } from "react-router-dom";
import { TPizzaData } from "../../store/pizzaApi/pizza.endpoints.types";
import Button from "./Button";

type TPizzaCardProps = {
  pizzaData: TPizzaData;
};

export default function PizzaCard({ pizzaData }: TPizzaCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border transition-shadow hover:shadow-2xl">
      <img src={"/img/refPizza.webp"} alt="pizza" />
      <div className="flex flex-col gap-4 p-2">
        <h2>{pizzaData.pizzaName}</h2>
        <p>
          {pizzaData.ingredients
            .map((ingredient) => ingredient.ingredientName)
            .join(", ")}
        </p>
        <Link to={`/pizza/${pizzaData.pizzaName}`}>View</Link>
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <Button variant={"toggle"} selectedStatus={false}>
            Small
          </Button>
          <Button variant={"toggle"} selectedStatus={true}>
            Standard
          </Button>
          <Button variant={"toggle"} selectedStatus={false}>
            Large
          </Button>
          <Button
            className="col-span-3"
            variant={"toggle"}
            selectedStatus={false}
          >
            Huge
          </Button>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
          <p>Dough</p>
          <Button
            className="col-span-2"
            variant={"toggle"}
            selectedStatus={true}
          >
            Thick crust
          </Button>
          <Button
            className="col-span-2"
            variant={"toggle"}
            selectedStatus={false}
          >
            Thin
          </Button>
          <p>Crust</p>
          <Button
            className="col-span-2"
            variant={"toggle"}
            selectedStatus={false}
          >
            Philadelphia
          </Button>
          <Button
            className="col-span-2"
            variant={"toggle"}
            selectedStatus={false}
          >
            Hot-Dog Crust
          </Button>
        </div>
        <div className="flex justify-between pb-4">
          <p className="text-3xl">{pizzaData.priceStandard} &#8372;</p>
          <Button variant={"roundedRed"} paddingSize={"large"}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
