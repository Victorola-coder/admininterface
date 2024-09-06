import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from '../config/axios'
import { useDoctorStore } from "../store/doctorstore";


export const useFetch = (url, key) => {
    const setDoctors = useDoctorStore((state) => state.setDoctors);
  
    const { data, isLoading, isError, error } = useQuery({
      queryKey: [key],
      queryFn: async () => {
        const response = await axios.get(url);
        // console.log('Data fetched successfully:', data);
        setDoctors(response.data.data);
        return response.data;
      },
     
    });
  
    return { data, isLoading, isError, error };
  };
export const useAddData =(url,key) => {
    const addDoctor = useDoctorStore((state) => state.addDoctor);


    // Access the client
  const queryClient = useQueryClient()
     // Mutations
  const {data:postData,mutate,error} = useMutation({
    mutationFn:(data) => axios.post(url,data),
    onSuccess: (newDoctor) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [key] })
      addDoctor(newDoctor.data);
    },
  })

    return { mutate,error ,postData}
}
export const useDeleteData = (url, key) => {
    const queryClient = useQueryClient();
    const removeDoctor = useDoctorStore((state) => state.removeDoctor);
  
    const { mutate, error, data } = useMutation({
      mutationFn: (id) => axios.delete(`${url}/${id}`),
      onSuccess: (doctor) => {
        queryClient.invalidateQueries({ queryKey: [key] });
        removeDoctor(doctor.data._id); // Update Zustand store on success
      }
    });
  
    return { mutate, error, data };
  };