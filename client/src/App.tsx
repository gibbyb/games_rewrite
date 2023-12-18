import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, 
    Route, Link, Outlet, RouterProvider
} from 'react-router-dom';
import Login from './Components/Login';
import NavBar from './Components/NavBar/NavBar';

export function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Login />} />
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
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    );
}

