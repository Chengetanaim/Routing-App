import App from "./App";
import { Outlet } from "react-router-dom";

export function Header(){
    return (
        <>
            <App />
            <Outlet/>
        </>
    )
    
}