import styled from "styled-components"
import { useUser } from "../features/Authentication/useUser"
import Spinner from "../components/Spinner";



const Div = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        gap:30px;
        height:15rem;
        border: 1px solid var(--color-grey-100);
        `

        const Label = styled.label`
            display: flex;
            flex-direction:column;
            gap:15px;
            padding: 1.2rem;
        `


function User() {
    const {user, isLoading} = useUser();
    if(isLoading) return <Spinner />;
    return (
        <>
        <Div>
           <h3>Welcome, {user.user_metadata.fullName}</h3>
<p>You have <em>{user.totalFriends}</em> friends</p> </Div>
<Label>
    <h4>About Me</h4>
     <div>
       <h4>This feature is not yet working, I might add it in further updates.</h4>
    </div>
</Label></>
       
    )
}

export default User
