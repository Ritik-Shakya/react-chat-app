import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useUser } from "../features/Authentication/useUser";
import Spinner from "./Spinner";

const Img= styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

const Div = styled.div`
background-color:#fd1ce3a2;
border: 1px solid var(--color-brand-500);
padding: 15px;
border-radius: 5px;
margin:20px 20px 20px 20px;
display: flex;
gap:10px;
justify-content: center;
align-items: center;
color: var(--color-grey-900);
cursor: pointer;



`

function FriendCard({friend}) {
    const {user,isLoading} = useUser();
    const navigate = useNavigate();

    const friendId = `${user.id}&${friend.userId}`;

    function handleClick(){
        navigate(`/friendList/${friendId}`)
    }

    if(isLoading) return <Spinner />

    return (
        <Div onClick={handleClick}>
            <Img src={friend.avatar} alt=""/>
            {friend.fullName}
            
        </Div>
    )
}

export default FriendCard
