import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider as Provider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/*
    1. Chunking
    2. code splitting
    3. Dynamic bundling
    4. Lazy loading
    5. On demand laoding
*/

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>I am intermidiate state!</h1>}><About/>/</Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>I am intermidiate state!</h1>}><Grocery/>/</Suspense>,
            }
        ],
        errorElement: <Error/>,
    }, 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider router={appRouter}/>);

