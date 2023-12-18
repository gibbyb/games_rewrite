import React from 'react';
import { SubmenuItem } from './NavItem';
import './Styles/Submenu.css';

interface SubmenuProps {
    items: SubmenuItem[];
}


const Submenu: React.FC<SubmenuProps> = ({ items }) => {
    return (
        <ul className="sub-menu absolute hidden rounded 
            bg-stone-950 group-hover:block shadow-md">
            {items.map(item => (
                <li key={item.name} className={`relative hover:bg-gray-700 
                    ${item.submenu ? 'group' : ''}`}>
                    <a href={item.href} className="block px-4 py-2 text-lg 
                        text-gray-100">{item.name}
                    </a>
                    {item.submenu && (
                        <ul className="sub-sub-menu absolute hidden left-full 
                            top-0 rounded bg-stone-950 shadow-md">
                            {item.submenu.map(subItem => (
                                <li key={subItem.name} className="relative 
                                    hover:bg-gray-700">
                                    <a href={subItem.href} className="block px-4 py-2 
                                        text-lg text-gray-100">{subItem.name}
                                    </a>
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
