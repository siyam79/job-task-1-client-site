import useAuth from "../../../Hooks/useAuth";
import img from '../../../../public/img/istockphoto-2.jpg'

const MyProfile = () => {
    const { user, } = useAuth()

    return (
        <div>
            <div className=" w-60 bg-base-100 shadow-md  flex flex-col items-center justify-center font-poppins space-y-5 [100svh]  ">
                <figure>
                <div className="mb-4">
                                {user?.photoURL ? (
                                    <img
                                        src={user?.photoURL}
                                        alt="Profile"
                                        className="h-32 rounded-full mx-auto"
                                    />
                                ) : (
                                    <img
                                        src={img}
                                        alt="Placeholder"
                                        className="h-32 rounded-full bg-gray-300 mx-auto"
                                    />
                                )}
                            </div>
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">
                      {user?.displayName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> {user?.email} </p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;