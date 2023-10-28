import Button from "./ui/Button";

export default function MainHeader() {
  return (
    <header className="sticky top-0 bg-gray-100">
      <nav className="m-auto flex h-20 max-w-7xl items-center justify-between px-4 text-base font-semibold">
        <div className="flex gap-8 capitalize">
          <Button variant={"ghost"} className="text-3xl">
            <a href="#">dream pizza</a>
          </Button>

          <Button variant={"ghost"}>
            <a href="#">promo</a>
          </Button>

          <Button variant={"ghost"}>
            <a href="#">pizza</a>
          </Button>

          <Button variant={"ghost"}>
            <a href="#">drinks</a>
          </Button>

          <Button variant={"ghost"}>
            <a href="#">sides</a>
          </Button>

          <Button variant={"ghost"}>
            <a href="#">desert</a>
          </Button>
        </div>
        <Button variant={"roundedRed"} paddingSize={"large"}>
          <a href="#">Basket</a>
        </Button>
      </nav>
    </header>
  );
}
