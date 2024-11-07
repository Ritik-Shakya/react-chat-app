import { useUser } from "../features/Authentication/useUser";
import Spinner from "./Spinner";
import { useFriend } from "../features/home/useFriend";
import styled, { keyframes } from "styled-components";
import { HiArrowRight } from "react-icons/hi";
import { useChatsBySender } from "../features/chats/useChatsBySender";
import { useChatsByReciever } from "../features/chats/useChatsByReciever";
import { useEffect, useRef, useState } from "react";
import { useCreateChat } from "../features/chats/useCreateChat";
import MessageBox from "./MessageBox";
import { useSender } from "../features/home/useSender";

const rotate = keyframes`
from {
color: black;
transform: rotate(0deg);
}
to{
color: white;
transform: rotate(360deg);
}
`

const fadeInOut = keyframes`
    from{
       
        color:white;
    }
    to{
       
        color:black;
    }
`

const Div = styled.div`
    height: 80vh;
    width: 80vw;
    background-color: #413fcf89;
    margin-left:30px;
    margin-top: 30px;
    border-radius:12px;
    display: flex;

`

const Div1 = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-right: 1px solid var(--color-grey-200);
    gap:10px;
`
const Div2 = styled.div`
flex:2;
display: flex;
flex-direction: column;
`
const Div3 = styled.div`
flex:1;
display: flex;
gap:10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
border-left: 1px solid var(--color-grey-200);

`

const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
`

const Diva = styled.div`
flex:8;
border-bottom:1px solid var(--color-grey-200);
overflow-y:scroll;
`

const Divb = styled.div`
flex:1;
display: flex;
`
const Input = styled.input`
    background-color: #1c1e8886;
    border: none;
    outline: none;
    flex:6;
    margin:15px;
    border-radius: 10px;
    padding: 4px;
`

const Button = styled.button`
    flex:1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 15px;
    border-radius: 10px;
    padding: 4px;
    border:none;
    outline:none;
    background-color: var(--color-grey-200);

   color: var(--color-grey-800);
    &:disabled{
        background-color: var(--color-brand-800);
    }
`

const H3 = styled.h3`
    animation: ${rotate} 2s 1;
`

const Em = styled.em`
    animation: ${fadeInOut} 2s 3;
    color:black;
   
`



function Friend() {
    const [message, setMessage] = useState("");
    const {user, isLoading} = useUser();
    const {friend, isLoading:isLoading2} = useFriend();
    const {sender, isLoading:isLoading6} =useSender(); 
    const {chatsOfSender, isLoading:isLoading3} = useChatsBySender();
    const {chatsOfReciever, isLoading:isLoading4} = useChatsByReciever();
    const {creatingChat , isLoading:isLoading5} = useCreateChat();

    const endRef = useRef(null);

    useEffect(function(){
        endRef.current?.scrollIntoView({behavior:"smooth"})
    },[])

    if(isLoading||isLoading2 || isLoading3 ||isLoading4 || isLoading6) return<Spinner /> ;

    const chatsOfTheseTwoBySender = chatsOfSender.filter((chat)=>chat.rId === friend[0].userId);
    const chatsOfTheseTwoByReciever = chatsOfReciever.filter((chat)=> chat.rId == user.id);

     const cumulativeChatsOfTheseTwo = chatsOfTheseTwoBySender.concat(chatsOfTheseTwoByReciever);
     const sortedChat = cumulativeChatsOfTheseTwo.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    const newMessage = {
        message,
        sId:user.id,
        rId:friend[0].userId,
        sender:user.user_metadata.fullName,
        
    }


     function handleClick () {

       {creatingChat(newMessage);
        setMessage("")}
     }

     
 
    return (
        <Div>
           <Div1> 
            <Img src={sender[0].avatar} alt=""/>
            <H3>Sender : <Em>{user.user_metadata.fullName}</Em></H3>
           
             
             </Div1>
           <Div2>
            <Diva>
                {sortedChat.map((chat)=><MessageBox key={chat.created_at} chat={chat} userId = {user.id} />)}
               <div className="endDiv" ref={endRef}></div>
            </Diva>
            <Divb>
                <Input type="text" name="message" placeholder="Type your message" value={message} onChange={(e)=> setMessage(e.target.value)} />
                <Button disabled={isLoading5 || message === ""} onClick={handleClick}>Send <HiArrowRight /></Button>
            </Divb>
           </Div2>
           <Div3> 
            <Img src={friend[0].avatar} alt=""/>
            <H3>Reciever : <Em>{friend[0].fullName}</Em></H3>
            

            </Div3>
           
        </Div>
    )
}

export default Friend
