import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, 
    Route, Link, Outlet, RouterProvider
} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar'; // Import Navbar component

export function App() {
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

const Root = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    );
}

