import React, { useState, useEffect } from 'react';
import logo from '../Img/crescent_logo.png';

function Home() {
    return (
        <div className="App">
            <header className="App-header bg-zinc-800 min-h-[100vh] flex flex-col items-center text-slate-100">
                <img src={logo} className="App-logo h-[40vmin] pointer-events-none mt-40"
                    alt="logo" />
                <button className="SignInButton mt-8 bg-slate-600 align-middle text-slate-100 hover:bg-slate-700 hover:text-slate-200 rounded-md px-4 py-3 mt-4">
                    Sign In With Microsoft 
                </button>
            </header>
        </div>
    );
}

export default Home;
