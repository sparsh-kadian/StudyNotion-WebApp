import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedin}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        firstName:"", 
        lastName:"", 
        email:"", 
        password:"",
        confirmPassword:""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, 
                [event.target.name]: event.target.value
            }
        ))
    };

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedin(true);

        toast.success("Account Created")

        navigate("/dashboard");
    }

    return(
        <div>
            {/* Student-Instructur-Tab */}
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* first name and last name */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input required type="text" name="firstName" onChange={changeHandler} placeholder="Enter your First Name"
                        value={formData.firstName} >   
                        </input>
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input required type="text" name="lastName" onChange={changeHandler} placeholder="Enter your Last Name"
                        value={formData.lastName} >   
                        </input>
                    </label>
                </div>
                {/* email id */}
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input required type="email" name="email" onChange={changeHandler} placeholder="Enter your email id"
                    value={formData.email} >   
                    </input>
                </label>
                {/* create password and showPassword */}
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input required type={showPassword ? ("text") : ("password")}
                            name="password" onChange={changeHandler} placeholder="Enter your Password"
                            value={formData.password} >   
                        </input>
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input required type={showPassword ? ("text") : ("password")}
                            name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password"
                            value={formData.confirmPassword} >   
                        </input>
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                        </span>
                    </label>
                </div>

                <button>
                    Create Account
                </button>

            </form> 

        </div>
    )
}

export default SignupForm;