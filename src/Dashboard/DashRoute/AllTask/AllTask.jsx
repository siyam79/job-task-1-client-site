// // import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';
// import { motion } from "framer-motion"
// import useAllTask from '../../../Hooks/useAllTask';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// let cetegoryName = [
//     { id: "todo", label: "todo" },
//     { id: "ongoing", label: "ongoing" },
//     { id: "completed", label: "completed" },
// ];

// const AllTask = () => {

//     const [task,refetch] = useAllTask()
//     console.log(task);

//     let [activeTab, setActiveTab] = useState(cetegoryName[0].id);

//     const jobsCurrentTab = task?.filter(job => job?.status === activeTab);



//     const handleDelete = (_id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/deleteTask/${_id}`, {
//                     method: "DELETE",
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             Swal.fire("Deleted!", "Your Job has been deleted.", "success");
//                             refetch();
//                         }
//                     });
//             }
//         });

//     }

//     useEffect(() => {
//         document.title = " Task-Job | All-Task ";
//     }, []);
//     return (
//         <div className="flex flex-col items-center justify-center py-10">
//             <div className="flex space-x-1 mb-2">
//                 {cetegoryName?.map((tab) => (
//                     <button
//                         key={tab.id}
//                         onClick={() => {
//                             setActiveTab(tab.id);

//                         }}
//                         className={`${activeTab === tab.id ? "" : "hover:text-[#91C96F]"}
//                             relative rounded-full uppercase  px-3 py-1.5 text-base font-medium black outline-sky-400 transition focus-visible:outline-2`}
//                         style={{
//                             WebkitTapHighlightColor: "transparent",
//                         }}
//                     >
//                         {activeTab === tab.id && (
//                             <motion.span
//                                 layoutId="bubble"
//                                 className="absolute inset-0 z-10 bg-[#ea35b4] mix-blend-multiply"
//                                 style={{ borderRadius: 9999 }}
//                                 transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                             />
//                         )}
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>

//             <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 ">

//                 {
//                     jobsCurrentTab?.map(data => <div key={data._id}>

//                         <div className="card w-80 bg-base-100 shadow-xl">
//                             <div className="card-body">
//                                 <h2 className="card-title">
//                                     {data.title}
//                                     <div className="badge badge-secondary">NEW</div>
//                                 </h2>
//                                 <p> {data?.priority} </p>
//                                 <div className="card-actions items-center justify-end">
//                                     <Link to={`/dashboard/updateTask/${data._id}`}>
//                                         <div className="badge badge-outline bg-green-400 text-white  font-bold px-6 py-4 ">Update </div>
//                                     </Link>
//                                     <button
//                                         onClick={() => handleDelete(data._id)}
//                                         className=" badge badge-outline  bg-red-600 text-white font-bold px-6 py-4"
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>)
//                 }
//             </div>

//         </div>
//     );
// };

// export default AllTask;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
// import useAllTask from "../../../Hooks/useAllTask";

const AllTask = () => {

    const {user} = useAuth()
    console.log(user?.email);


    const [postedJobs, setPostedJobs] = useState([]);
    const [todoTasks, setTodoTasks] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const fetchJobs = () => {
        fetch(`http://localhost:5000/getAllTask?email=${user?.email}`)
        // fetch(http://localhost:5000/)
            .then((res) => res.json())
            .then((data) => {
                setPostedJobs(data);
                filterTasksByStatus(data);
            });
    };

    //   const [task,refetch] = useAllTask()
    //     console.log(task);

    const filterTasksByStatus = (tasks) => {
        const todo = tasks.filter((task) => task.status === "todo");
        const ongoing = tasks.filter((task) => task.status === "ongoing");
        const completed = tasks.filter((task) => task.status === "completed");

        setTodoTasks(todo);
        setOngoingTasks(ongoing);
        setCompletedTasks(completed);
    };

    useEffect(() => {
        if (user?.email) {
            fetchJobs();
        } 
       
    }, [user.email]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteTask/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your Job has been deleted.", "success");
                            fetchJobs();
                        }
                    });
            }
        });
    };

    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData("text/plain", taskId);
    };

    const handleDrop = async (e, newStatus) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");

        try {
            const response = await fetch(`http://localhost:5000/alltask/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (response.ok) {
                const updatedTasks = postedJobs.map((task) => {
                    if (task._id === taskId) {
                        task.status = newStatus;
                    }
                    return task;
                });

                setPostedJobs(updatedTasks);
                filterTasksByStatus(updatedTasks);
            } else {
                console.error('Failed to update task status');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
                <div onDrop={(e) => handleDrop(e, "todo")} onDragOver={handleDragOver}>
                    <h2 className=" uppercase font-bold text-center border-b-2 ">Todo</h2>
                    {todoTasks.map((task) => (
                        <div
                            key={task._id}
                            className="mb-8 mt-2"
                            draggable
                            onDragStart={(e) => handleDragStart(e, task._id)}
                        >
                            <div className="card bg-orange-200 text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Title: {task.title}</h2>
                                    <p>Description: {task.description}</p>
                                    <p>Status: {task.status}</p>
                                    <p>Priority: {task.priority}</p>
                                    <p>Start Date: {task.startDate}</p>
                                    <p>Deadline: {task.deadline}</p>

                                    <div className="card-actions items-center justify-end">
                                        <Link to={`/dashboard/updateTask/${task._id}`}>
                                            <div className="badge badge-outline bg-green-400 text-white  font-bold px-6 py-4 ">Update </div>
                                        </Link>
                                        <button onClick={() => handleDelete(task._id)}
                                            className=" badge badge-outline  bg-red-600 text-white font-bold px-6 py-4"
                                        >                                        Delete                                   </button>
                                    </div>






                                    {/* <div className="card-actions justify-end">
                    <Link to={`/dashboard/taskUpdate/${task._id}`}>
                      <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 mr-2 rounded focus:outline-none focus:ring h-12 focus:border-blue-300">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-200 hover:bg-red-400 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring h-12 focus:border-blue-300">
                      Delete
                    </button>
                  </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    onDrop={(e) => handleDrop(e, "ongoing")}
                    onDragOver={handleDragOver}
                >
                    <h2 className=" uppercase font-bold text-center border-b-2 ">Ongoing</h2>
                    {ongoingTasks.map((task) => (
                        <div
                            key={task._id}
                            className="mb-8 mt-2"
                            draggable
                            onDragStart={(e) => handleDragStart(e, task._id)}
                        >
                            <div className="card bg-orange-200 text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Title: {task.title}</h2>
                                    <p>Description: {task.description}</p>
                                    <p>Status: {task.status}</p>
                                    <p>Priority: {task.priority}</p>
                                    <p>Start Date: {task.startDate}</p>
                                    <p>Deadline: {task.deadline}</p>
                                    <div className="card-actions items-center justify-end">
                                        <Link to={`/dashboard/updateTask/${task._id}`}>
                                            <div className="badge badge-outline bg-green-400 text-white  font-bold px-6 py-4 ">Update </div>
                                        </Link>
                                        <button onClick={() => handleDelete(task._id)}
                                            className=" badge badge-outline  bg-red-600 text-white font-bold px-6 py-4"
                                        >                                        Delete                                   </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    onDrop={(e) => handleDrop(e, "completed")}
                    onDragOver={handleDragOver}
                >
                    <h2 className=" uppercase font-bold text-center border-b-2 ">Completed</h2>
                    {completedTasks.map((task) => (
                        <div
                            key={task._id}
                            className="mb-8 mt-2 "
                            draggable
                            onDragStart={(e) => handleDragStart(e, task._id)}
                        >
                            <div className="card bg-orange-200 text-black">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Title: {task.title}</h2>
                                    <p>Description: {task.description}</p>
                                    <p>Status: {task.status}</p>
                                    <p>Priority: {task.priority}</p>
                                    <p>Start Date: {task.startDate}</p>
                                    <p>Deadline: {task.deadline}</p>
                                    <div className="card-actions items-center justify-end">
                                        <Link to={`/dashboard/updateTask/${task._id}`}>
                                            <div className="badge badge-outline bg-green-400 text-white  font-bold px-6 py-4 ">Update </div>
                                        </Link>
                                        <button onClick={() => handleDelete(task._id)}
                                            className=" badge badge-outline  bg-red-600 text-white font-bold px-6 py-4"
                                        >                                        Delete                                   </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllTask;