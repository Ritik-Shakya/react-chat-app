import { useUser } from "../features/Authentication/useUser";
import { useFriends } from "../features/home/useFriends";
import Spinner from "../components/Spinner";
import {useCreateFriend} from "../features/home/useCreateFriend"
import styled, { keyframes } from "styled-components"
import { useForm } from "react-hook-form";

const slideIn = keyframes`
from{
    translate: 150vh 0;
    scale: 200% 1;
}
to {
    translate: 0 0;
    scale: 100% 1;
}
`

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

const Form = styled.form`
    border:1px solid var(--color-brand-800);
    border-radius: 5px;
    padding: 8px;
    margin: 5px;
`

const Button = styled.button `
    background-color: var(--color-brand-600);
    border:none;
    border-radius: 5px;
    margin: 15px;
    color:black;
    padding:5px;

    &:hover{
        background-color: var(--color-brand-800);
    }`

const Input = styled.input`
background-color: #1c1e8886;
border: none;
outline: none;

margin:5px;
border-radius: 10px;
padding: 4px;
`

    const Div= styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        height: 80vh;
        color:black;
    `

const Img = styled.img`
    height: 200px;
    width: 200px;
    margin: none;
    border-radius: 50%;
    padding: 5px;
    border:none;
    &:hover {
        animation: ${rotate} 3s 1;         }
`
const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    background-color: #ff11efa8;
    padding: 6px;
    border-radius: 12px;
    border: 2px dotted black;
    margin:5px;
`
const H2 = styled.h2 `
    animation: ${slideIn} 2s 1;
    &:hover {
       color:white;
    }
`
const Span = styled.span`
    animation : ${rotate} 2s 1;
`

function Home() {
   
    const {user, isLoading:isLoading1} = useUser();
    
    const {friends, isLoading} = useFriends(); 
    const {creatingFriend, isLoading:isLoading3} = useCreateFriend();
    const {register,handleSubmit}= useForm();
    
    if(isLoading1 || isLoading || isLoading3) return <Spinner/>

    const id = user.id;
    const friendsName = friends.map((friend)=> friend.fullName);
    const userinFriends = friendsName.includes(user.user_metadata.fullName);
    const userAsFriend = friends.filter((friend)=> 
        friend.fullName == user.user_metadata.fullName
    );
    console.log(userAsFriend)
    



    const otherFriends = friends.filter((friend)=> friend.fullName !== user.user_metadata.fullName);
  
   

   
function onSubmit (data) {
     creatingFriend({fullName:user.user_metadata.fullName, avatar:data.avatar[0], userId:id});
    
}
   
   
    
    return (
        <Div>
            {userAsFriend.length !== 0?<Img src={ userAsFriend[0].avatar } alt={user.user_metadata.fullName} />:<Img src="avatar.png" alt="" /> }
          
          <Div2>
          
            <h2 style={{padding:"10px"}}>Hello ,<H2> {user.user_metadata.fullName}</H2></h2>
           <h4>Connect to your friends</h4>
           <p>This service is used by <Span> {otherFriends.length}</Span> other people</p>
           <h3>To chat you must become a friend.</h3>
             </Div2>

           {userinFriends? "You are an existing friend of the website"
           
           : <Form onSubmit={handleSubmit(onSubmit)}>
           <label>Upload your avatar</label>
           <Input type="file" name="avatar" id="avatar" {...register("avatar")}/>
           <Button type="submit">Become Friend</Button>
           </Form>}
           
           
        </Div>
    )
}

export default Home
