import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    const menuitem = <>
        <li className=''><NavLink to='/'> <AiTwotoneHome /> Home</NavLink></li>
        <li className='ml-1 '><NavLink className='' to='/appointment'>Products</NavLink></li>
        <li className='ml-1'><NavLink to='/accessories'>Accessories</NavLink></li>
        <li className='ml-1'><NavLink to='/review'>Reviews</NavLink></li>
        <li className='ml-1'><NavLink to='/blogs'>Blogs</NavLink></li>
        <li className='ml-1'><NavLink to='/about'>About</NavLink></li>
        <li className='ml-1'><NavLink to='/contact'>Contact Us</NavLink></li>
        <li className=''>{user ? <button onClick={logout} class="btn btn-ghost">Sign Out</button> : <NavLink to='/login'>Login</NavLink>}</li>
    </>

    return (
        <div className="navbar bg-base-100 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-lg font-bold">COMPUTER-<span className='text-success'>HUB</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {menuitem}
                </ul>
            </div>
            {/* <divclassName="navbar-end">
            <aclassName="btn">Get started</a>
        </div> */}
        </div>
    );
};

export default Navbar;