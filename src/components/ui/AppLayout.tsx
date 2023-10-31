import { Outlet } from "react-router-dom";
import TopHeader from "../TopHeader";
import MainHeader from "../MainHeader";
import Footer from "../Footer";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto]">
      <TopHeader />
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
