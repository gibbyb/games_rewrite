import React from 'react';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';

// Define a type for the submenu items
export interface SubmenuItem {
    name: string;
    href: string;
    submenu?: SubmenuItem[];
}

// Define a type for the NavItem props
interface NavItemProps {
    title: string;
    link: string;
    submenu?: SubmenuItem[];
}

const NavItem: React.FC<NavItemProps> = ({ title, link, submenu }) => {
    return (
        <li className="relative group">
            <Link className="navbar-link text-white" to={link}>{title}</Link>
            {submenu && <Submenu items={submenu} />}
        </li>
    );
};

export default NavItem;

