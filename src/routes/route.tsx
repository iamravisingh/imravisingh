import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Home, Blogs } from "../pages"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
            </Routes>
        </BrowserRouter>
    )
}
