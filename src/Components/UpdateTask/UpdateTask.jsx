import { useForm, Controller } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
const UpdateTask = () => {

    const data = useLoaderData()
    console.log(data);

    const {_id, title, deadline, description, priority, status, startDate } = data || {};



    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset()


        fetch(`http://localhost:5000/updateJobTasks/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(" Task Update Success Full ", {
                        position: "top-left"
                    })
                }
            })
    }

    return (
        <div className="flex flex-col items-center justify-center  space-y-5 h-[100svh]">
            <h1 className="font-bold text-3xl ">Add Task From Here</h1>
           
            <div className="modal-box rounded-3xl bg-white bg-opacity-90 backdrop-blur-lg">
                <h3 className="font-bold text-4xl text-center">Add New Task</h3>
                <div className="modal-action">
                    <form
                        method="dialog"
                        className="w-full"
                        onSubmit={(e) => handleSubmit((data) => onSubmit(data, e))(e)}
                    >
                        <div className="w-full form-control mb-5">
                            <label className="label">
                                <span className="text-lg text-black duration-300">Title</span>
                            </label>
                            <input
                                {...register("title", { required: true })}
                                type="text"
                                name="title"
                                defaultValue={title}
                                className="input input-bordered rounded-2xl w-full mb-3 bg-white duration-300"
                            />
                            {errors.title && (
                                <span className="text-red-600">Title is required</span>
                            )}

                            <div className="flex items-center justify-between gap-4 w-full">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="text-lg text-black duration-300">Priority</span>
                                    </label>
                                    <Controller
                                        control={control}
                                        name="priority"
                                        defaultValue={priority}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <select
                                                {...field}
                                                className="input input-bordered rounded-2xl w-full mb-3 bg-white duration-300"
                                            >
                                                <option value="low">Low</option>
                                                <option value="medium">Moderate</option>
                                                <option value="high">High</option>
                                            </select>
                                        )}
                                    />
                                    {errors.priority && <span className="text-red-600">Priority is required</span>}
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="text-lg text-black duration-300">
                                            Status
                                        </span>
                                    </label>
                                    <Controller
                                        control={control}
                                        name="status"
                                        defaultValue={status}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <select
                                                {...field}
                                                className="input input-bordered rounded-2xl w-full mb-3 bg-white duration-300"
                                            >
                                                <option value="todo">To-Do</option>
                                                <option value="ongoing">Ongoing</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        )}
                                    />
                                    {errors.status && (
                                        <span className="text-red-600">Status is required</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full gap-4">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="text-lg text-black  duration-300">
                                            Start Date
                                        </span>
                                    </label>
                                    <input
                                        {...register("startDate", { required: true })}
                                        type="date"
                                        name="startDate"
                                        defaultValue={startDate}
                                        className="input input-bordered rounded-2xl w-full mb-3 bg-white duration-300"
                                    />
                                    {errors.startDate && (
                                        <span className="text-red-600">
                                            Start Date is required
                                        </span>
                                    )}
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="text-lg text-black  duration-300">
                                            Deadline
                                        </span>
                                    </label>
                                    <input
                                        {...register("deadline", { required: true })}
                                        type="date"
                                        name="deadline"
                                        defaultValue={deadline}
                                        className="input input-bordered rounded-2xl w-full mb-3 bg-white duration-300"
                                    />
                                    {errors.deadline && (
                                        <span className="text-red-600">Deadline is required</span>

                                    )}
                                </div>
                            </div>

                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="text-lg text-black duration-300">
                                        Description
                                    </span>
                                </label>
                                <label className="rounded-lg">
                                    <textarea
                                        {...register("description", { required: true })}
                                        name="description"
                                        defaultValue={description}
                                        className="input input-bordered rounded-2xl w-full h-40 bg-white duration-300"
                                    />
                                    {errors.description && (
                                        <span className="text-red-600">
                                            Description is required
                                        </span>
                                    )}
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="px-9 py-4 text-lg text-slate-800 outline outline-2 outline-gray-700 rounded-full hover:bg-[#F49C4D] hover:outline-0 hover:text-white"
                            >
                                Add Task
                            </button>
                            {/* <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="px-9 py-4 text-lg text-slate-800 outline outline-2 outline-gray-700 rounded-full hover:bg-[#F49C4D] hover:outline-0 hover:text-white"
                                >
                                    Add Task
                                </button>
                                <button
                                    type="button"
                                    className="px-9 py-4 text-lg text-slate-800 outline outline-2 outline-gray-700 rounded-full hover:bg-red-400 hover:outline-0 hover:text-white"
                                    onClick={() => {
                                        const modal = document.getElementById("addTaskModal");
                                        if (modal) {
                                            modal.close();
                                        }
                                    }}
                                >
                                    Cancel
                                </button>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
            {/* </dialog> */}
        </div>
    );
}

export default UpdateTask;

