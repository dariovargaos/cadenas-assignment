import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages and layouts
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
