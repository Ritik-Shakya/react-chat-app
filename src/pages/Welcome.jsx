import styled from "styled-components"
import Login from "../features/Authentication/Login"
import SignUp from "../features/Authentication/SignUp"

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 100px;
    background-color: #ece5e585;
    height: 100vh;
    background-image: url("/bcg.png");
    padding-top:50px;
    padding-bottom:50px;
`

const Div2 = styled.div`
display: flex;
gap:20px;
flex:1;
justify-content: space-between;
height: max-content;

`

function Welcome() {
    return (
        <Div>
            <h1>Please log in or SignUp</h1>
            <Div2>
          <Login /> <SignUp />
          </Div2>
        </Div>
    )
}

export default Welcome
