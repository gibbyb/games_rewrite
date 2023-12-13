import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, 
    Route, Link, Outlet, RouterProvider
} from 'react-router-dom';
import Home from './Components/Home';
import LightDarkToggle from './Components/LightDarkToggle';
import './App.css';

export function App(props: any) { // Specify the type for props if needed

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
            </Route>
        )
    );

    return (
        <div className="App text-center">
            <RouterProvider router={router} />
        </div>
    );
}

// This will be our Navigation Bar Component
const Root = () => {
    return (
        <>
            <div className="navbar bg-stone-950 overflow-hidden"> 
                <div className="navbar-elements text-lg">
                    <Link className="navbar-link float-left block text-slate-200 text-center py-3 px-5 no-underline hover:bg-slate-300 hover:text-slate-900" to="/">Login</Link>
                    <Link className="navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" to="/">Test</Link>
                    {/* Add toggle here */}
                    <LightDarkToggle />
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}


