import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure


const useAllTask = () => {
    const {user} = useAuth()
   const axiosPublic = useAxiosPublic()
    const { data: task = [],refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllTask?email=${user?.email}`)
            return res.data
        }
    })
    return [task,refetch]
};

export default useAllTask;