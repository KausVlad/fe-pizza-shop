import PizzaList from "../components/PizzaList";
import PromoCarousel from "../components/PromoCarousel";

export default function Home() {
  return (
    <div className="m-auto max-w-screen-2xl px-4">
      <PromoCarousel />
      <PizzaList />
    </div>
  );
}
