import React, { useState, useEffect } from 'react';
import logo from '../Img/crescent_logo.png';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo"
                    alt="logo" />
                <p>
                    Crescent School of Gaming & Bartending
                </p>
            </header>
        </div>
    );
}

export default Home;
