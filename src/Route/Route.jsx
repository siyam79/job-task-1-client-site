import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login/Login";
import Register from "../Components/Register/Register";
// import Dashboard from "../Dashboard/Dashboard";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ],
      

    },
    // {
    //     path: 'dashboard',
    //     element:<Dashboard></Dashboard>,
    //     children: [
            
            // {
            //     path: 'allTrainers',
            //     element: <AdminRoute><AllTrainers></AllTrainers></AdminRoute>
            // },
            // {
            //     path: 'balance',
            //     element: <AdminRoute><Balance></Balance></AdminRoute>
            // },
            // {
            //     path: 'appliedTrainers',
            //     element: <AppliedTrainer></AppliedTrainer>
            // },
            // {
            //     path: '/dashboard/pyment/:_id/:salary/:status',
            //     element:<AdminRoute><Pyment></Pyment></AdminRoute>
            // },
            
            // {
            //     path: 'paymentHistory',
            //     element:<AdminRoute> <PaymentHistory></PaymentHistory></AdminRoute>
            // },

            // //  trainer route 
            // {
            //     path: 'manageMember',
            //     element: <TrainerRoute><ManagMember></ManagMember></TrainerRoute>
            // },
            // {
            //     path: 'addForum',
            //     element:<DualRoute><AddForum></AddForum></DualRoute> ,
            // },
            // {
            //     path: 'manageSlot',
            //     element:<TrainerRoute><ManageSolt></ManageSolt></TrainerRoute>,
            // },
            // {
            //     path: 'addClass',
            //     element:<TrainerRoute><AddClass></AddClass></TrainerRoute>,
            // },

            // //   Member  route 
            // {
            //     path: 'activeLog',
            //     element:<ActiveLog></ActiveLog>
            // },
            // {
            //     path: 'profile',
            //     element:<Profile></Profile>
            // },
            // {
            //     path: 'recoment',
            //     element:<RecomentClass></RecomentClass>
            // },
    //     ]
    // },
])

export default Route;