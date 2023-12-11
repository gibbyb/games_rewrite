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
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

// This will be our Navigation Bar Component
const Root = () => {
    return (
        <>
            <div className="navbar"> 
                <div className="navbar-elements">
                    <Link className="navbar-link" to="/">Home</Link>
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


