import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
    const { user,  } = useAuth()
    return (
        <div>

            <div className="md:flex   items-center justify-around bg-gradient-to-r from-[#6418C3] to-[#D0AAFF] py-7" >
                <div className="lg:flex-1">
                    <img className="xl:w-9/12" src="https://www.betasofttechnology.com/wp-content/uploads/2022/12/hero.png" alt="" />
                </div>
                <div className="lg:flex-1 text-white ">
                    <div className="xl:w-9/12 mx-auto space-y-8">
                        <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold leading-snug px-4 ">Welcome to SCC Technovision Inc.</h1>
                        <p className="leading-loose font-medium px-4 ">Welcome to SCC Technovision Inc.! Elevate your productivity with our Task Management Platform. Effortlessly create, track, and complete tasks. Collaborate seamlessly with your team, utilizing features like detailed task information, priority levels, and intuitive workflows.</p>
                        <div className=" px-4 ">
                            {
                                user?.email?  <Link to='/dashboard/myprofile'> 
                                <button className="py-2 px-3 md:py-3 md:px-5 lg:py-4 lg:px-6 text-xs md:text-sm lg:text-base bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md ">Let's Explore</button>
                                </Link>: <Link to='/login'> 
                                <button className="py-2 px-3 md:py-3 md:px-5 lg:py-4 lg:px-6 text-xs md:text-sm lg:text-base bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md ">Let's Explore</button>
                                </Link>
                            }
                          
                        </div>
                    </div>
                </div>

            </div>


            {/* <div className="hero min-h-screen w-full " style={{ backgroundImage: 'url(https://www.betasofttechnology.com/wp-content/uploads/2022/12/hero.png)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;