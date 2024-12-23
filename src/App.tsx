import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
export default function App(){
    return(
        <React.StrictMode>
            <RouterProvider router={routers}/>
        </React.StrictMode>
    )
}