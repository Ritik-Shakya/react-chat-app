import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChat } from "../../services/apiChats";
import toast from "react-hot-toast";

export function useCreateChat () {
    const queryClient = useQueryClient();
    const {isLoading, mutate:creatingChat} = useMutation({
        mutationFn:createChat,
        onSuccess:()=>{
            toast.success("Message Sent");
            queryClient.invalidateQueries({
                queryKey:["chats"],
            });
            
        },
        onError:(err)=>{toast.error(err)},
    });
    return {creatingChat, isLoading};
}