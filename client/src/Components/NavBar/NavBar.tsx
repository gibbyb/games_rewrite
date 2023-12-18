import React from 'react';
import { Link } from 'react-router-dom';
import LightDarkToggle from './LightDarkToggle';
import NavItem from './NavItem';

const NavBar = () => {
    const administrativeSubmenu = [
        { name: 'Admissions', href: '#' },
        { name: 'Student Info', href: '#' },
        { name: 'Accounting', href: '#' },
        { name: 'Cash Receipts', href: '#' },
        { name: 'Placement', href: '#' }
    ];

    const gamingSubmenu = [
        { name: 'Gaming Menu', href: '#' },
        { name: 'Attendance', href: '#' },
        { name: 'All Game Evaluation Report', href: '#' },
        { name: 'Two Game Evaluation Report', href: '#' }
    ];

    const bartendingSubmenu = [
        { name: 'Attendance', href: '#' },
        { name: 'Bar Menu', href: '#' },
        { name: 'Bar Management Evaluation', href: '#' }
    ];

    const specialProgramSubmenu = [
        { name: 'WIN', href: '#' },
        { name: 'Badges', href: '#' },
        { name: 'Badge Report', href: '#' }
    ];

    const disbursementsSubmenu = [ 
        { name: 'Def Mang', href: '#' },
        { name: 'Default Managament Report', href: '#' }
    ];

    const reportsSubmenu = [
        { 
            name: 'Admissions', 
            href: '#',
            submenu: [
                { name: 'Appointment', href: '#' },
                { name: 'Call Report', href: '#' },
                { name: 'Status Report', href: '#' }
            ]
        },
        { 
            name: 'Accounting', 
            href: '#',
            submenu: [
                { name: 'History Report', href: '#' },
                { name: 'Collects Report', href: '#' },
                { name: 'Director\'s Report', href: '#' }
            ]
        },
        { 
            name: 'Student Info', 
            href: '#',
            submenu: [
                { name: 'Student Info Report', href: '#' },
                { name: 'ipedsfrm', href: '#' }
            ]
        },
        { 
            name: 'Financial Aid', 
            href: '#',
            submenu: [
                { name: 'Financial Aid List Reports', href: '#' },
                { name: 'Disbursement Report', href: '#' },
                { name: 'Living Expenses Report', href: '#' },
                { name: '14 Day Report', href: '#' },
                { name: 'ipedsfrm', href: '#' },
                { name: 'Gainful Employment', href: '#' }
            ]
        },
        { 
            name: 'Statistics', 
            href: '#',
            submenu: [
                { name: 'CHART GRD/DRP', href: '#' },
                { name: 'CHART REF/Enrolled', href: '#' },
                { name: 'Active Students Report', href: '#' },
                { name: 'New Stats', href: '#' }
            ]
        }
    ];

    return (
        <div className="navbar bg-stone-950">
            <div className="flex justify-between items-center h-16 px-8">
                <NavItem title="Login" link="/" />
                <NavItem title="Administrative" link="#" 
                    submenu={administrativeSubmenu} />
                <NavItem title="Gaming" link="#" submenu={gamingSubmenu} />
                <NavItem title="Bartending" link="#" submenu={bartendingSubmenu} />
                <NavItem title="Special Programs" link="#" submenu={specialProgramSubmenu} />
                <NavItem title="Disbursements" link="#" submenu={disbursementsSubmenu} />
                <NavItem title="Reports" link="#" submenu={reportsSubmenu} />
                <LightDarkToggle />
            </div>
        </div>
    );
};

export default NavBar;

