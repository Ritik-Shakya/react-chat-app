import { HiArrowRightOnRectangle } from "react-icons/hi2"
import styled from "styled-components"
import { useLogout } from "../features/Authentication/useLogout"

const Styledheader = styled.div `
    grid-area: 1/2/2/3;
    border: 0px solid var(--color-grey-100);
    padding:1.2rem 4.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Button = styled.button `
    background-color: var(--color-brand-900);
    border:none;
    border-radius: 5px;
    margin: 15px;
    height: 25px;
    width: 25px;

    &:hover{
        background-color: var(--color-brand-700);
    }
`

function Header() {

const {isLoading, logout} = useLogout();

function handleLogout(){
logout();
}

    return (
        <Styledheader>
        <h2>
            Working Title 
        </h2>
        <Button onClick={handleLogout} disabled={isLoading}>        <HiArrowRightOnRectangle />
</Button>
        </Styledheader>
    )
}

export default Header
