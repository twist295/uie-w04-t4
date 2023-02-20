import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './routes/Cart'
import Complete from './routes/Complete'

const router = createBrowserRouter([
  { path: "/order/cart/", element: <Cart /> },
  { path: "/order/complete/", element: <Complete /> }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
