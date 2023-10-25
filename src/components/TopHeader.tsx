export default function TopHeader() {
  return (
    <header className="bg-neutral-800">
      <nav className="m-auto flex h-20 max-w-7xl items-center justify-between text-base font-bold text-white">
        <div className="flex gap-5">
          <a href="tel:+12345678900">
            <p>call 12345678900</p>
          </a>
          <a href="#">
            <p>City</p>
          </a>
          <a href="#">
            <p className="uppercase">Pizza Tracker</p>
          </a>
          <a href="#">
            <p className="uppercase">News</p>
          </a>
        </div>
        <div className="flex">
          <p>language</p>
          <a href="#">LogIn</a>
        </div>
      </nav>
    </header>
  );
}
