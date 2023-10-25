export default function TopHeader() {
  return (
    <header className="bg-neutral-800">
      <nav
        className="m-auto flex h-20 max-w-7xl items-center justify-between px-4 text-base font-extrabold text-white"
        role="navigation"
      >
        <div className="flex gap-8">
          <a className="font-semibold" href="tel:+12345678900">
            call 12345678900
          </a>
          <a href="#">City</a>
          <a className="uppercase" href="#">
            Pizza Tracker
          </a>
          <a className="uppercase" href="#">
            News
          </a>
        </div>
        <div className="flex items-center gap-8">
          <p>language</p>
          <a
            role="button"
            className="rounded-full bg-neutral-600  px-8 py-3 hover:bg-neutral-500"
            href="#"
          >
            LogIn
          </a>
        </div>
      </nav>
    </header>
  );
}
