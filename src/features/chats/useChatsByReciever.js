import { useQuery } from "@tanstack/react-query";
import {  getChatsSID } from "../../services/apiChats";
import { useParams } from "react-router-dom";

export function useChatsByReciever () {
    const {friendId} = useParams();
    const rId = friendId.split("&")[1];
    const {data:chatsOfReciever, isLoading} = useQuery({
        queryKey:["chats", rId],
        queryFn:()=>getChatsSID(rId),
    })
    return{chatsOfReciever, isLoading} ;
}