import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [],
  },
]);
