//importações
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Me from "./pages/Me";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContainerNavBar from "./components/HomeComponents/NavBottomBar/NavBottomBar";

const router = createBrowserRouter([

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
