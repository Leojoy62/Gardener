import { createBrowserRouter } from "react-router-dom";

import Products from "../pages/Products";
import Manage from "../pages/Manage";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/manage",
        element: <Manage></Manage>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default router;
