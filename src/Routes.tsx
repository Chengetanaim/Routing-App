import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./Header";
import { ProductsPage } from "./pages/ProductsPage";
import { HomePage } from "./pages/HomePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Header/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/products',
                element: <ProductsPage/>
            }
        ]
    },
    
]);

export function Routes(){
    return <RouterProvider router={router}></RouterProvider>
}