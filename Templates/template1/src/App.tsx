//importações
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Me from "./pages/Me";
import Location from "./pages/Location";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContainerNavBar from "./components/HomeComponents/NavBottomBar/NavBottomBar";

const router = createBrowserRouter([
  { path: "/Location", element: <Location /> },

  { path: "/", element: <Home /> },

  { path: "/Cart", element: <Cart /> },

  { path: "/Me", element: <Me /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
