import Button from "./ui/Button";

export default function TopHeader() {
  return (
    <header className="bg-neutral-800">
      <nav
        className="m-auto flex h-20 max-w-screen-2xl items-center justify-between px-4"
        role="navigation"
      >
        <div className="flex gap-8">
          <Button variant={"ghostWhite"}>
            <a className="font-semibold" href="tel:+12345678900">
              call 12345678900
            </a>
          </Button>
          <Button variant={"ghostWhite"}>
            <a href="#">City</a>
          </Button>
          <Button variant={"ghostWhite"}>
            <a className="uppercase" href="#">
              Pizza Tracker
            </a>
          </Button>
          <Button variant={"ghostWhite"}>
            <a className="uppercase" href="#">
              News
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-8">
          <Button variant={"ghostWhite"} className="font-semibold">
            <p>language</p>
          </Button>
          <Button
            variant={"roundedGray"}
            paddingSize={"medium"}
            className="text-white"
          >
            <a href="#">LogIn</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
