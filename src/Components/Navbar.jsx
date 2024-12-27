import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const li = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Coffees</NavLink>
        <NavLink to='/addCoffee'>Add Coffee</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {li}
                    </ul>
                </div>
                <Link to='/'>Coffee Cafe</Link>
            </div>

            <div className="navbar-end flex items-center gap-4">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {li}
                </ul>

                {
                    user ? <Link to='/signIn' onClick={logOut}><button>Log Out</button></Link> : <Link to='/signIn'>Sign In</Link>
                }
            </div>
        </div >
    );
};

export default Navbar;