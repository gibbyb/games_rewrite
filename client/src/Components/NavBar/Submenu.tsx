import React from 'react';
import { SubmenuItem } from './NavItem';
import './Styles/Submenu.css';

interface SubmenuProps {
    items: SubmenuItem[];
}


const Submenu: React.FC<SubmenuProps> = ({ items }) => {
    return (
        <ul className="sub-menu absolute hidden border-slate-200 rounded bg-slate-300 group-hover:block shadow-md z-10">
            {items.map(item => (
                <li key={item.name} className={`relative hover:bg-gray-100 ${item.submenu ? 'group' : ''}`}>
                    <a href={item.href} className="block px-4 py-2 text-sm text-gray-700">{item.name}</a>
                    {item.submenu && (
                        <ul className="sub-sub-menu absolute hidden left-full top-0 border-slate-200 rounded bg-slate-300 shadow-md z-10">
                            {item.submenu.map(subItem => (
                                <li key={subItem.name} className="relative hover:bg-gray-100">
                                    <a href={subItem.href} className="block px-4 py-2 text-sm text-gray-700">{subItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Submenu;
