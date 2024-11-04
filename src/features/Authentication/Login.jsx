import { useState } from "react"
import styled from "styled-components"
import { useLogin } from "./useLogin"
import SpinnerMini from "../../components/SpinnerMini"

const Div= styled.div`
flex: 1;
color:wheat;
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

function Login() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {logIn, isLoading}= useLogin();

    function handleLogin(e){
    e.preventDefault();
   if(!email || !password) return;

    logIn({email, password},
      {  onSettled:()=> {
            setEmail("");
            setPassword("");
        }}
    );
    
    }

    return (
        <Div>
            <h3>Login</h3>
            <Form>
                <Input type="text" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <Input type="password" name="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <Button disabled={isLoading} onClick={handleLogin}>{isLoading?<SpinnerMini />:"Log In"}</Button>
            </Form>
        </Div>
    )
}

export default Login
