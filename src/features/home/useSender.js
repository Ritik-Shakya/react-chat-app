import {  useQuery } from "@tanstack/react-query";
import { getFriend } from "../../services/apiFriends";
import { useParams } from "react-router-dom";

export function useSender () {
    const {friendId} = useParams();
    const sId = friendId.split("&")[0];
    const {data:sender, isLoading} = useQuery({
        queryKey:["friends",sId],
        queryFn:()=>getFriend(sId),
    })
    return {sender, isLoading};
}