import { useQuery } from "@tanstack/react-query";
import { getFriends } from "../../services/apiFriends";

export function useFriends () {
    const {data:friends, isLoading}  = useQuery({
       queryKey:["friends"],
        queryFn:getFriends,
        
    })
    return {friends, isLoading};
}