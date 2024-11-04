import { useState } from "react";
import { HiOutlineArrowDown, HiOutlineHome, HiOutlineInformationCircle, HiOutlineMenu, HiOutlineMenuAlt4, HiOutlinePaperClip } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { useLogout } from "../features/Authentication/useLogout"
import SpinnerMini from "./SpinnerMini";

const StyleNavigation = styled.div`
display: flex;
flex-direction: column;
padding: 3.2rem 2.4rem;
border-right: 1px solid var(--color-grey-100);;
gap: 15px;
 grid-area:1/1/3/2;
`

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledImage = styled.img`
    height:9.6 rem;
    width:auto;
    border-radius: 50%;
`


const Div4 = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap:15px;
  padding-top: 20rem;
`

const Button = styled.button`
  background-color: var(--color-brand-900);
  border: 1px solid var(--color-grey-50);
  border-radius:20%;
  width:25px;
  &:hover,
  &:active {
      background-color: var(--color-brand-700);
    }
`

const H3 = styled.h3 `
  display: flex;
  gap: 10px;
`


const Button2 = styled.button`
padding: 5px;
  background-color: var(--color-grey-800);
 border:none;
 outline:none;
 border-radius: 6px;
 &:hover,
  &:active {
      background-color: var(--color-brand-700);
    }
`

function Navigation() {
  

  const {isLoading, logout} = useLogout();

function handleLogout(){
logout();
}
  const [openMenu , setOpenMenu] = useState(false);
    return (
        <StyleNavigation>
            <div>
                <StyledImage src="/logo-chat.png" alt="logo"/>
                <H3>
                    <Button onClick={()=> setOpenMenu((prev)=>!prev)}>
            <HiOutlineMenuAlt4 />
           </Button>Menu
                </H3>
                
            </div>

 
           
           {
          openMenu?
           <nav>
            <NavList>

            <li>
           <StyledNavLink to="/">
          <HiOutlineHome />
           Home</StyledNavLink></li>
           <li>

            <StyledNavLink to="/friendList">
           <HiOutlinePaperClip />
           Friends</StyledNavLink>
           </li>
           <li>
            <StyledNavLink to="/about">
           <HiOutlineMenu />
           About us</StyledNavLink>
           </li>
           <li>
             <StyledNavLink to="/user">
           <HiOutlineInformationCircle />
           User</StyledNavLink>
           </li>
           <li>
            <Div4>
            <Button2 onClick={handleLogout} >
            
            {isLoading?<SpinnerMini />:"SignOut"}
           
            </Button2> 
            <HiOutlineArrowDown />
            </Div4>
           </li>
          
           </NavList>
           </nav> : null
           }
        </StyleNavigation>
    )
}

export default Navigation
