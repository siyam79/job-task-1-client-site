import { useState } from "react";
// import icon from "../../assets/fi_10629607.png"

const piccing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { name: 'Normal', monthlyPrice: 19, yearlyPrice: 199, description: 'Enjoy Normal of the Product or Service on a monthly basis with our subscription plan', icon: "https://i.ibb.co/6n9C525/fi-10629607.png" },

        {
            name: 'Advance', monthlyPrice: 59, yearlyPrice: 299, description: 'Enjoy Advance of the Product or Service on a monthly basis with our  subscription plan.',
            icon: "https://i.ibb.co/6n9C525/fi-10629607.png"
        },

        { name: 'Premium', monthlyPrice: 99, yearlyPrice: 599, description: 'Enjoy Premium of the Product or Service on monthly basis  our subscription plan.', icon: "https://i.ibb.co/6n9C525/fi-10629607.png" },
    ]


    return (
        <div className=" md:px-14 p-4 max-w-s mx-auto py-10 mt-1 " data-aos="fade-up"
            data-aos-duration="3000">
            <div className="text-center ">
                <h2 className="md:text-2xl text-xl font-extrabold text-pink-600  "> Here are All Our Plans Subcription </h2>
                <p className="md:w-1/3 mx-auto px-4 ">A decentralized digital ledger technology securing transactions across the internet, with applications in cryptocurrencies and supply chain transparency.</p>
            </div>

            <div className="mt-6 mb-10  text-center  ">
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer " >
                    <span className="mr-8 text-xl font-semibold ">Month</span>
                    <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out">
                        <div className={`w-6 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out ${isYearly ? " bg-slate-900  ml-8 " : "bg-gray-600"} " `} ></div>
                    </div>
                    <span className="ml-8 text-xl font-semibold "> Year </span>
                </label>
                <input type="checkbox" name="" id="toggle" className="hidden" checked={isYearly} onClick={() => setIsYearly(!isYearly)} />

            </div>

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:w-11/12 mx-auto  ">
                {
                    packages.map((pkg, index) => <div key={index} className=" border py-10 md:px-6 px-4 roun shadow-2xl  rounded-md ">
                        <h1 className=" text-3xl font-bold text-center text-pink-600 "> {pkg.name} </h1>
                        <p className="text-sm text-center my-4 "> {pkg.description} </p>
                        <p className=" mt-5 text-center text-purple-600 text-2xl font-bold ">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
                            <span className=" font-semibold "> /{isYearly ? "Year" : "Month"}</span>
                        </p>
                        <ul className=" mt-4 space-y-2 px-4 ">
                            <li className=" flex items-center gap-2"> <img className=" w-4 h-4 " src={pkg.icon} alt="" /> Brand off Lessons </li>
                            <li className=" flex items-center gap-2"> <img className=" w-4 h-4 " src={pkg.icon} alt="" /> All Time Support  </li>
                            <li className=" flex items-center gap-2"> <img className=" w-4 h-4 " src={pkg.icon} alt="" /> 7/24 Hours On </li>
                            <li className=" flex items-center gap-2"> <img className=" w-4 h-4 " src={pkg.icon} alt="" /> Best Off Qulatity </li>
                            <li className=" flex items-center gap-2"> <img className=" w-4 h-4 " src={pkg.icon} alt="" /> Intarnational Brand </li>
                            <li className=" flex items-center gap-2"> <img className=" w-4 h-4 " src={pkg.icon} alt="" /> Parsonal Advice from Brand  </li>

                        </ul>
                        <div className=" w-full mx-auto mt-8 flex items-center justify-center ">
                            <button className=" bg-pink-600 py-2 px-6  font-bold text-white rounded-md ">  Get Start </button>
                        </div>
                    </div>)
                }
            </div>

        </div>

    );
};

export default piccing;