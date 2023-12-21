
import {  NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

// import logo from "../assets/img/logo-removebg-preview (1).png"


const Nabvar = () => {
    const { user, logOut } = useAuth()
    const [active, setActive] = useState(false)
    // const handleSingOut = () => {
    //     logOut()
    //         .then(result => {
    //             console.log(result.user)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    const navBar = <>
        <li className="mx-2 font-medium"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>

        <li className="mx-2 font-medium"><NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""}>Gallery</NavLink></li>

        <li className="mx-2 font-medium"><NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""}>Gallery</NavLink></li>

        <li className="mx-2 font-medium"><NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""}> Dashboard </NavLink></li>

        

        {/* {user && (
            <li className="mx-2 font-medium"><NavLink
                to="/dashboard/profile/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}> Dashboard.</NavLink></li>
        )} */}

    </>
useEffect(() => {
    document.title = " Job-Task | Navbar";
}, []);

    return (
        <div>
            <div className="navbar px-6 w-full  bg-slate-200 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}
                         

                        </ul >
                    </div >
                    {/* <div>
                        <Link to='/'><img  className="lg:w-24 lg:block hidden " src={logo} alt="" /></Link>
                    </div> */}
                </div >




                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navBar}
                  
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? (
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="cursor-pointer">
                                <div className="">
                                    <div className="w-10 rounded-full">
                                        <img onClick={() => setActive(!active)} className="w-9 rounded-full " src={user?.photoURL} alt="" />
                                    </div>
                                </div>
                            </label>

                            {
                                active && (
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >

                                        <h1 className="px-4 py-2 hover:bg-base-300 rounded-lg" > {user?.displayName} </h1>

                                        <p className="px-4 py-2 hover:bg-base-300 rounded-lg "> {user.email} </p>
                                        <div
                                            onClick={logOut}
                                            className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                                        >
                                            Logout
                                        </div>

                                    </div>
                                )
                            }

                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'btn btn-neutral btn-sm ' : ''
                            }
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div >
        </div >
    );
};

export default Nabvar;