import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
