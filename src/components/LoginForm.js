import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const LoginForm = ({setIsLoggedin}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
                email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, 
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedin(true); 
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input required type="email" value={formData.email} onChange={changeHandler} name="email" placeholder="Enter email id"/>
            </label>

            <label>
                <p>Password<sup>*</sup></p>
                <input required type={showPassword ? ("text") : ("password")} 
                    value={formData.password} onChange={changeHandler} name="password" placeholder="Enter Password"
                />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                </span>    
                <Link to="#" >
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button>
                Sign In
            </button>

        </form>
    )
}

export default LoginForm;