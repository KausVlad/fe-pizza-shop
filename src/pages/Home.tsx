import PizzaList from "../components/PizzaList";
import PromoCarousel from "../components/PromoCarousel";

export default function Home() {
  return (
    <div className="m-auto max-w-7xl">
      <PromoCarousel />
      <PizzaList />
    </div>
  );
}
