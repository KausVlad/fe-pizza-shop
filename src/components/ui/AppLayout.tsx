import { Outlet } from "react-router-dom";
import TopHeader from "../TopHeader";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto]">
      <TopHeader />
      <header className="sticky top-0 bg-gray-100">main header</header>
      <main>
        <Outlet />
      </main>
      <footer>some footer</footer>
    </div>
  );
}
