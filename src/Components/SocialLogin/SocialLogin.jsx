import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
// import { BsGithub } from 'react-icons/bs';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';



const SocialLogin = () => {

    const { googleLogin , githubLogin} = useAuth()
    const navigate = useNavigate()

    // const axiosPublic = useAxiosPublic()

    const handleSocialLogin = (user) => {

        user()
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    toast.success('User logged in successfully', {
                        position: 'top-center'
                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);
                }


            }).catch(error => {
                toast.error(error);
            })
    }
    useEffect(() => {
        document.title = " Job-Task | Social Login ";
    }, []);
    return (
        <>
            <div className="divider text-center  font-semibold  ">Continue with</div>
            <div className=" flex-col flex items-center justify-center ">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" badge badge-outline w-full px-4 py-4 mt-2 pb-4  flex items-center justify-center font-bold gap-1"><span className=" text-xl"><FcGoogle></FcGoogle></span ><span className='text-fuchsia-600 font-semibold '>Login With Google</span> </button>
                <button
                    onClick={() => {handleSocialLogin(githubLogin)}}
                    className="badge badge-outline w-full px-4 py-4 mt-2 pb-4  flex items-center justify-center font-bold gap-1 "><span className="text-xl "> <BsGithub></BsGithub> </span ><span className='text-fuchsia-600  font-semibold '>Login With Github</span></button>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default SocialLogin;
