import React from "react";
import logo from "../assets/Logo.svg";
import { Link} from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedin = props.isLoggedin;
    let setIsLoggedin = props.setIsLoggedin;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/">
                <img width={160} height={32} loading="lazy" src={logo} alt="Logo"></img>
            </Link>

            <nav>
                <ul className="text-richblack-100 flex gap-x-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - Logout - Sign Up - Dashboard */}
            <div className="flex items-center gap-x-4">
                { !isLoggedin &&
                    <Link to="/login" >
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedin &&
                    <Link to="/signup" >
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Sign Up
                        </button>
                    </Link>
                }
                { isLoggedin &&
                    <Link to="/" >
                        <button onClick={() => {
                            setIsLoggedin(false);
                            toast.success("Logged out");
                        }} className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Log Out
                        </button>
                    </Link>
                }
                { isLoggedin &&
                    <Link to="/dashboard" >
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;