import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./pages/Home";
import PizzaProduct from "./components/PizzaProduct";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pizza/:pizzaName",
        element: <PizzaProduct />,
      },
    ],
  },
]);
