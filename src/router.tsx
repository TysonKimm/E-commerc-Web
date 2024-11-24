import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage  from "./pages/Contact";
import LoginPage from "./pages/Login";
import ProductPages from "./pages/Product";
import ItemsCart from "./pages/ItemsCart";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/Login",
        element: <LoginPage/>,
    },
    {
        path:"/contact",
        element: <ContactPage />,
    },
    {
        path: "/Product",
        element: <ProductPages />
    },
    {
        path: "/ItemsCart",
        element: <ItemsCart/> 
    },
];
export const routers = createBrowserRouter(routes);