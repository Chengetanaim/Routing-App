import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Header";
import { ProductsPage } from "./pages/ProductsPage";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { ProductPage } from "./pages/ProductPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Header/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/shop',
                element: <ProductsPage/>
            },
            {
                path: '/shop/:id',
                element: <ProductPage/>
            }
        ]
    },
    
]);

export function Routes(){
    return <RouterProvider router={router}></RouterProvider>
}