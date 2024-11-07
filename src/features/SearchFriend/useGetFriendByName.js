import {  useQuery } from "@tanstack/react-query";
import { getFriendviaName } from "../../services/apiFriends";
import { useSearchParams } from "react-router-dom";

export function useGetFriendByName () {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("search");
  
    const {data:friend, isLoading} = useQuery({
        queryKey:["friends",name],
        queryFn:()=>getFriendviaName(name),
    })
    return {friend, isLoading};
}
