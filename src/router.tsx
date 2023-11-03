import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
