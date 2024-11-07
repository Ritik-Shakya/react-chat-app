import styled from "styled-components"
import { useGetFriendByName } from "../features/SearchFriend/useGetFriendByName"
import Spinner from "./Spinner"
import FriendCard from "./FriendCard"

const Modalbox = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    box-shadow: 2px;
    transition: all 0.5s;
`
const Overlay = styled.div`
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
margin: 5rem;
    position: fixed;
    top:25%;
    left: 25%;
    width: 50vw;
    height: 50vh;
    background-color: #00800098;
    backdrop-filter:blur(5px);
    z-index: 1000;
    transition:all 0.5s;
`

const Button  = styled.div `
    position: fixed;
    top: 0;
    left: 90%;
    padding: 5px;
    &:hover{
        cursor: pointer;
    }
`

function Modal({setOpenModal, search}) {

const {friend , isLoading}  = useGetFriendByName();

if(isLoading) return <Spinner />;

    return (
        <Overlay>
        <Modalbox>
            <Button onClick={()=>setOpenModal(false)}>❌</Button>
         <h4>Search Result for {search} :</h4>
         {friend.length===0?<p>We do not have this name in our database. Please check the name or try someone else.</p>: <FriendCard friend={friend[0]} />}
        </Modalbox></Overlay>
    )
}

export default Modal
