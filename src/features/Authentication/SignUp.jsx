import { useState } from "react"
import styled from "styled-components"
import { useSignup } from "./useSignup"
import SpinnerMini from "../../components/SpinnerMini"

const Div= styled.div`
color:wheat;
flex: 2;
    display: flex;
    flex-direction: column;
    gap:20px;
    justify-content: center;
align-items: start;
border: solid var(--color-grey-100);
margin: 20px;
padding: 35px;
border-radius: 12px;
box-shadow: 5px 3px 3px var(--color-brand-600);
background-color: #3015df39;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:10px;
`

const Input = styled.input`
    border-radius: 5px;
    outline: none;
    border: 1px solid var(--color-grey-300);
    padding: 5px;
    background-color:#7a676d90;

`
const Button = styled.button `
    background-color: var(--color-brand-900);
    border:none;
    border-radius: 5px;
    margin: 15px;

    &:hover{
        background-color: var(--color-brand-700);
    }
`
function SignUp() {
    const [fullName, setFullName]  = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isLoading, signUp} = useSignup();

    const friend ={fullName, avatar:null}

function handleSignUp(e) {
    e.preventDefault();
    console.log(fullName,email,password,friend);
    signUp({fullName,email, password,friend}, {
        onSettled:()=> {
            setFullName("");
            setEmail("");
            setPassword("");
        }
        
    })
    

}
    return (
        <Div>
            <h3>Sign Up</h3>
           <Form>
            <Input type="text" name="fullName" placeholder="Full Name" value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
            <Input type="text" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <Input type="password" name="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

<Button onClick={handleSignUp} disabled={isLoading}>{isLoading?<SpinnerMini />:"SignUp"}</Button>
           </Form>
        </Div>
    )
}

export default SignUp
