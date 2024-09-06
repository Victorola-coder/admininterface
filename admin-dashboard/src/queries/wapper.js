import { QueryClientProvider, useQueryClient } from "@tanstack/react-query"

export const  Layout =  (children) => {
    const queryClient = useQueryClient()
return      <QueryClientProvider client={queryClient}>
{children}
</QueryClientProvider>
}