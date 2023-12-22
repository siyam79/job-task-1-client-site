
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../../SocialLogin/SocialLogin";




const Login = () => {

    const { signin } = useAuth();
    // const [showPassword, setShowPassWord] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location);

    const handleLoginUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //    password validation

        // if (!/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}/.test(password)) {
        //     toast.error('Please Cheack your Email or password');
        //     return;
        // }

        //  User Lggin

        signin(email, password)
            .then(res => {
                console.log(res);

                if (res.user) {

                    toast.success('User logged in successfully');
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/')
                    }, 1000);
                }

            }).catch(error => {
                console.error(error);
                toast.error('Cheack your Email or password', error);
            })

    }
    useEffect(() => {
        document.title = " Fitness-Tracker | Login ";
    }, []);

    return (

        <>
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen  container mx-auto">
                <div className="flex-1">
                    <img className="w-full" src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1700995211~exp=1700995811~hmac=1d4d3ff89490cf7aaa1e9beb413f9206b00ffba21d0c4217573f6a9d201ec537" alt="" />
                </div>
                <div className="flex-1">
                    <div className=" text-center pt-10">
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-design"> Register Now </h4>
                    </div>
                    <div className="card-body w-full md:w-full lg:w-10/12 xl:w-9/12 mx-auto">
                        <form onSubmit={handleLoginUser} className="">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full ">
                                <label className="block  text-md font-semibold mb-2 " htmlFor="">Password </label>
                                <input className="input input-bordered"
                                    type= "password"
                                    placeholder="Password" name="password" required />
                               
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGIN</button>
                            </div>
                            <h3 className="text-center mt-2">Don't Have an Accout ? <Link className="text-design font-bold" to='/register'>REGISTER </Link> </h3>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] h-1 w-full"></div>
                                <h5>OR</h5>
                                <div className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] h-1 w-full"></div>
                            </div>
                        </form>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </section>
        </>




        // <div className=" relative md:w-[28rem] mx-auto p-2  rounded-lg shadow-2xl mt-1 h-full  ">
        //     <h1 className="text-3xl text-center text-pink-600 font-bold  mt-4 "> Login Now  </h1>
        //     <form onSubmit={handleLoginUser}>

        //         <div className="mb-4  ">
        //             <label className="block  text-md font-semibold mb-2 " htmlFor=""> Your Email </label>
        //             <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Your Email" name="email" required />
        //         </div>



        //         <div className="mb-4 ">
        //             <label className="block  text-md font-semibold mb-2 " htmlFor=""> Password </label>
        //             <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
        //                 type={showPassword ? "text" : "password"}
        //                 placeholder="Password" name="password" required />
        //             <span onClick={() => setShowPassWord(!showPassword)} className="absolute left-96 mt-3  text-green-700 ">
        //                 {
        //                     showPassword ? <AiFillEye className='text-xl text-white'></AiFillEye> : <AiFillEyeInvisible className='text-xl text-white '></AiFillEyeInvisible>
        //                 }

        //             </span>
        //         </div>
        //         <label className="label ">
        //             <a href="#" className="label-text-alt link link-hover text-base ">Forgot password?</a>
        //         </label>

        //         <div className=" w-32 py-1.5 rounded-md justify-center mx-auto text-center bg-fuchsia-600 hover:bg-fuchsia-800 ">
        //             <button type="submit" className=" w-28 font-bold "> Login Now  </button>
        //         </div>
        //         <div className=' flex justify-between items-center  mt-6 px-6 '>
        //             <label className="label">
        //                 <h1 className="label-text-alt link link-hover text-[16px] text-pink-600 ">Please Your  </h1>
        //             </label>
        //             <label className="label">
        //                 <Link to="/register" className="label-text-alt link link-hover text-[16px] text-pink-600">Create A Account </Link>
        //             </label>
        //         </div>
        //     </form>
        //     <SocialLogin></SocialLogin>+
        //    
        // </div>

    )
};

export default Login;