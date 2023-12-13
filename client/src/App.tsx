import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, 
    Route, Link, Outlet, RouterProvider
} from 'react-router-dom';
import Home from './Components/Home';
import LightDarkToggle from './Components/LightDarkToggle';
import './App.css';

export function App(props: any) { // Specify the type for props if needed

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

// This will be our Navigation Bar Component
const Root = () => {
    return (
        <>
            <div className="navbar bg-stone-950 overflow-hidden"> 
                <div className="navbar-elements text-lg">
                    <ul>
                        <Link className="navbar-link float-left block text-slate-200 text-center py-3 px-5 no-underline hover:bg-slate-300 hover:text-slate-900" to="/">Login</Link>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Administrative</a>
                            <ul className="sub-menu absolute hidden ml-24 mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Admissions</a></li>
                                <li><a className="hover:text-slate-700" href="#">Student Info</a></li>
                                <li><a className="hover:text-slate-700" href="#">Accounting</a></li>
                                <li><a className="hover:text-slate-700" href="#">Cash Receipts</a></li>
                                <li><a className="hover:text-slate-700" href="#">Placement</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Gaming</a>
                            <ul className="sub-menu absolute hidden ml-[190px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Gaming Menu</a></li>
                                <li><a className="hover:text-slate-700" href="#">Attendance</a></li>
                                <li><a className="hover:text-slate-700" href="#">All Game Evaluation</a></li>
                                <li><a className="hover:text-slate-700" href="#">Two Game Evaluation</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Bartending</a>
                            <ul className="sub-menu absolute hidden ml-[305px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Attendance</a></li>
                                <li><a className="hover:text-slate-700" href="#">Bar Menu</a></li>
                                <li><a className="hover:text-slate-700" href="#">Evaluation Due BM</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Special Program</a>
                            <ul className="sub-menu absolute hidden ml-[465px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">WIN</a></li>
                                <li><a className="hover:text-slate-700" href="#">Badges</a></li>
                                <li><a className="hover:text-slate-700" href="#">Badge Report</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Disbursements</a>
                            <ul className="sub-menu absolute hidden ml-[595px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Def Mang</a></li>
                                <li><a className="hover:text-slate-700" href="#">Default Mang Report</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Reports</a>
                            <ul className="sub-menu absolute hidden ml-[650px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Admissions - Appointment</a></li>
                                <li><a className="hover:text-slate-700" href="#">Admissions - Call Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Admissions - Status Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Accounting - History Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Accounting - Collects Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Accounting - Director's Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Student Info - Student Info Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Student Info - ipedsfrm</a></li>
                                <li><a className="hover:text-slate-700" href="#">Financial Aid - Financial Aid List Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Financial Aid - Disbursement Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Financial Aid - Living Expenses</a></li>
                                <li><a className="hover:text-slate-700" href="#">Financial Aid - 14 Day Report</a></li>
                                <li><a className="hover:text-slate-700" href="#">Financial Aid - ipedsfrm</a></li>
                                <li><a className="hover:text-slate-700" href="#">Financial Aid - Gainful Employment</a></li>
                                <li><a className="hover:text-slate-700" href="#">Statistics - CHART GRD/DRP</a></li>
                                <li><a className="hover:text-slate-700" href="#">Statistics - Chart Ref/Enrolled</a></li>
                                <li><a className="hover:text-slate-700" href="#">Statistics - Active Student Reports</a></li>
                                <li><a className="hover:text-slate-700" href="#">New Stats</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Memos</a>
                            <ul className="sub-menu absolute hidden ml-[830px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Messenger</a></li>
                                <li><a className="hover:text-slate-700" href="#">Director's Memo</a></li>
                                <li><a className="hover:text-slate-700" href="#">Admissions Memo</a></li>
                                <li><a className="hover:text-slate-700" href="#">Bartending Memo</a></li>
                                <li><a className="hover:text-slate-700" href="#">Financial Memo</a></li>
                                <li><a className="hover:text-slate-700" href="#">Gaming Memo</a></li>
                                <li><a className="hover:text-slate-700" href="#">Placement Memo</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">School Info</a>
                            <ul className="sub-menu absolute hidden ml-[915px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Database Data</a></li>
                                <li><a className="hover:text-slate-700" href="#">Accounting Selection</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown navbar-link float-left block text-slate-200 text-center py-3 px-4 no-underline hover:bg-slate-300 hover:text-slate-900" href="#">Tools</a>
                            <ul className="sub-menu absolute hidden ml-[1050px] mt-12 p-2 no-underline bg-slate-300 text-slate-900">
                                <li><a className="hover:text-slate-700" href="#">Undo</a></li>
                                <li><a className="hover:text-slate-700" href="#">Address Labels</a></li>
                            </ul>
                        </li>
                    </ul>

                    <LightDarkToggle />
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}


