import React from 'react';

interface SubmenuProps {
    items: { name: string; href: string; }[];
}

const Submenu: React.FC<SubmenuProps> = ({ items }) => {
    return (
        <ul className="sub-menu absolute hidden bg-slate-300 border-slate-200 rounded group-hover:block 
            bg-white shadow-md z-10">
            {items.map(item => (
                <li key={item.name} className="hover:bg-gray-100">
                    <a href={item.href} className="block px-4 py-2 text-sm 
                        text-gray-700">{item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Submenu;

