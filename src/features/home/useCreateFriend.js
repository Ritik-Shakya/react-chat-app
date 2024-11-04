import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFriend } from "../../services/apiFriends";
import toast from "react-hot-toast";

export function useCreateFriend () {
    const queryClient = useQueryClient();
    const {isLoading, mutate:creatingFriend} = useMutation({
        mutationFn:createFriend,
        onSuccess:()=>{
            toast.success("Friend successfully created");
            queryClient.invalidateQueries({
                queryKey:["friends"],
            });
            
        },
        onError:(err)=>{toast.error(err)},
    });
    return {creatingFriend, isLoading};
}