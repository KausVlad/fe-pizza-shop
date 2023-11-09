type PizzaCardProps = {
  pizzaName: string;
  size: "SMALL" | "STANDARD" | "LARGE" | "HUGE";
  weightStandard: number;
  priceStandard: number;
  doughCrust: "THIN" | "THICK_CRUST" | "PHILADELPHIA" | "HOT_DOG_CRUST";
  ingredients: {
    id: number;
    ingredientName: string;
  };
  pizzaAttributes: {
    id: number;
    attributeName: "CHEESE" | "VEGETARIAN" | "SPICY" | "NEW" | "NONE";
  };
};
export default function PizzaCard({}: PizzaCardProps) {
  return <div></div>;
}
