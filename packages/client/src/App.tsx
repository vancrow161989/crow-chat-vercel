import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsLayout from "./components/products/product-layout";
import Layout from "./layout/layout";
import Chat from "./pages/chat";
import Home from "./pages/home";
import ProductDetails from "./pages/product-details";

// import Chatbot from "./components/chat/chatbot";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <Layout />,
    children: [
      { path: "/chat", element: <Chat /> },
      {
        path: "/products",
        element: <ProductsLayout />,
        children: [{ path: ":productId", element: <ProductDetails /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
