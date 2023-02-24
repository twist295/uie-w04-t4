import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './routes/Cart'
import Complete from './routes/Complete'
import Root from './routes/Root'
import Shop from './routes/Shop'

const router = createBrowserRouter([{ 
  path: "/", 
  element: <Root />,
  children: [
    { path: "/order/cart/", element: <Cart /> },
    { path: "/order/complete/", element: <Complete /> },
    { path: "/shop", element: <Shop /> }
  ]
}]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
