import styled from "styled-components";
import Spinner from "../components/Spinner";
import { useFriends } from "../features/home/useFriends"
import FriendCard from "../components/FriendCard";
import { useUser } from "../features/Authentication/useUser";

const Div = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
    height: 80vh;
    width: 80vw;
    background-color: #413fcf89;
    margin-left:30px;
    margin-top: 30px;
    border-radius:12px;
    padding: 20px;
    overflow-y:scroll;
`

function FriendsList() {
    const {user, isLoading:isLoading2} =useUser();
const {friends, isLoading} = useFriends();



if(isLoading||isLoading2) return <Spinner />

const friendsName = friends.map((friend)=> friend.fullName);
    const userinFriends = friendsName.includes(user.user_metadata.fullName);
    const otherFriends = friends.filter((friend)=> friend.fullName !== user.user_metadata.fullName)


    return (
        <Div>
          {
          userinFriends? otherFriends.map((friend)=><FriendCard friend={friend} key={friend.userId} />) :
          <h2>You have to be a friend first to start chatting, go to home and become friend there.</h2>
            }
        </Div>
    )
}

export default FriendsList
