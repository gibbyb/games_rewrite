import React from 'react';
import { Link } from 'react-router-dom';
import LightDarkToggle from './LightDarkToggle';
import NavItem from './NavItem';

const Navbar = () => {
    const administrativeSubmenu = [
        { name: 'Admissions', href: '#' },
        { name: 'Student Info', href: '#' },
        { name: 'Accounting', href: '#' },
        { name: 'Cash Receipts', href: '#' },
        { name: 'Placement', href: '#' }
    ];

    return (
        <div className="navbar bg-stone-950 p-4">
            <div className="flex justify-between items-center h-16">
                <NavItem title="Login" link="/" />
                <NavItem title="Administrative" link="#" submenu={administrativeSubmenu} />
                <LightDarkToggle />
            </div>
        </div>
    );
};

export default Navbar;

