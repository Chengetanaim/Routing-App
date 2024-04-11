import { useRouteError } from "react-router-dom";
import { Header } from "../Header";

export function ErrorPage(){
    const error = useRouteError();
    return (
        <>
            <Header/>
            <div className="text-center p-5 text-xl">
                <h1 className="text-xl text-slate-900">
                    Sorry, an error has occured
                </h1>
            </div>
        </>
    )
}

function isError(error:any){
    
}