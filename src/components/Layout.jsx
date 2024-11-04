import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Header from "./Header"
import styled from "styled-components"

const Div = styled.div`
height: 100vh;
    display: grid;
    grid-template-columns: 22rem 1fr;
    grid-template-rows: auto 1fr;
    background-image:url("/bcg.png");
     color:aliceblue;
    

`

const Container = styled.div`
    overflow:scroll;
    background-image:url("/bg.jpg");

`

function Layout() {

    return (
        <Div>
         <Header />
      
       <Navigation />
         
            <Container>
                {<Outlet />}
            </Container>
        </Div>
    )
}

export default Layout
