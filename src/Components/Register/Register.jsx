// import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    // const axiosPublic = useAxiosPublic()
    const { createUser, handleUpdateProfile } = useAuth()
    const navigate = useNavigate()

    const [showPassword, setShowPassWord] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.img.value;
        console.log(email, password, img, name);

        // const userInfo = {
        //     name,
        //     email,
        //     img
        // }

        //     if (!/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}/.test(password)) {
        //         toast.error('please Your passwor capital letter special character and 6 characters ');
        //         return;
        //     }


        createUser(email, password)
            .then(res => {
                console.log(res);
                toast.success('create account')
                handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success('User created successfully', {
                            position: 'top-center'
                        })
                        navigate('/')

                    })

            })
            .catch(error => {
                console.error(error);
                toast.error('please cheack your email or password ')
            })

        // }
    }

    return (
        <div className=" relative md:w-[28rem]  mx-auto p-2  rounded-lg shadow-2xl my-4 h-full  ">
            <h1 className="text-3xl text-center text-pink-600 font-bold  mt-4 "> Register Now  </h1>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="block text-md font-semibold mb-2"> Your Name </span>
                    </label>
                    <input type="name" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="block text-md font-semibold mb-2">Your E-Mail </span>
                    </label>
                    <input type="email" name="email" placeholder="Enter Your E-Mail" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="block  text-md font-semibold mb-2"> Photo URL </span>
                    </label>
                    <input type="name" name="img" placeholder="Your Img Url" className="input input-bordered" required />
                </div>

                {/* <div className="mb-4 ">
                    <label className="block   text-md font-semibold mb-2 " htmlFor=""> Photo URL </label>
                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Your Img Url" name="img" required />
                </div> */}

                <div className="form-control ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor=""> Password </label>
                    <input className="input input-bordered"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password" name="password" required />
                    <span onClick={() => setShowPassWord(!showPassword)} className="absolute md:left-96 left-[340px] mt-[50px] text-green-700 ">
                        {
                            showPassword ? <AiFillEye className='text-xl'></AiFillEye> : <AiFillEyeInvisible className='text-xl '></AiFillEyeInvisible>
                        }
                    </span>
                </div>
                <label className="label ">
                    <a href="#" className="label-text-alt link link-hover text-base ">Forgot password?</a>
                </label>

                <div className="form-control mt-6">
                    <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">Register Now</button>
                </div>
                {/* <div className=" w-32 py-1.5 rounded-md justify-center mx-auto text-center bg-fuchsia-600 hover:bg-fuchsia-800 ">
                    <button type="submit" className=" w-28 font-bold "> Register Now</button>
                </div> */}
                <div className=' flex justify-between items-center  mt-6 px-6 '>
                    <label className="label">
                        <h1 className="label-text-alt link link-hover text-[16px] text-pink-600 ">Please Your  </h1>
                    </label>
                    <label className="label">
                        <Link to="/login" className="label-text-alt link link-hover text-[16px] text-pink-600"> Login Account  </Link>
                    </label>
                </div>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;