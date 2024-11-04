import {  useQuery } from "@tanstack/react-query";
import { getFriend } from "../../services/apiFriends";
import { useParams } from "react-router-dom";

export function useFriend () {
    const {friendId} = useParams();
    const rId = friendId.split("&")[1];
    const {data:friend, isLoading} = useQuery({
        queryKey:["friends",rId],
        queryFn:()=>getFriend(rId),
    })
    return {friend, isLoading};
}