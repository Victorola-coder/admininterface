import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from '../config/axios'


export const useFetch = (url, key) => {
    console.log()
    const { data, isLoading, isError, error } = useQuery({
    
      queryKey: [key],
      queryFn: async () => {
        const response = await axios.get(url);
        return response.data;
      },
    });
  
    return { data, isLoading, isError, error };
  };
  

export const useAddData =(url,data,key) => {
    // Access the client
  const queryClient = useQueryClient()
     // Mutations
  const {data:postData,mutate,error} = useMutation({
    mutationFn: axios.post(url,data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [key] })
    },
  })

    return { mutate,error ,postData}
}
export const useDeleteData = (url, key) => {
    console.log('clicked')
    const queryClient = useQueryClient();
  
    const mutation = useMutation({
      // Make the mutationFn dynamic by passing the id as an argument
      mutationFn: (id) => axios.delete(`${url}/${id}`),
      onSuccess: () => {
        // Invalidate and refetch queries
        queryClient.invalidateQueries({ queryKey: [key] });
      },
    });
  
    return { mutate: mutation.mutate, error: mutation.error, data: mutation.data };
  };