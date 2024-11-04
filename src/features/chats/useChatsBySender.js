import { useQuery } from "@tanstack/react-query";
import { getChatsSID } from "../../services/apiChats";
import { useParams } from "react-router-dom";

export function useChatsBySender () {
    const {friendId}  = useParams();
    const sId = friendId.split("&")[0];
    const {data:chatsOfSender, isLoading} = useQuery({
        queryKey:["chats", sId],
        queryFn:()=>getChatsSID(sId),
    })
    return {chatsOfSender, isLoading};
}