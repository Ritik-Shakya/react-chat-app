import { useState } from "react"
import styled from "styled-components"
import {  useSearchParams } from "react-router-dom"
import Modal from "./Modal"

const Container = styled.div`
    display: flex;
    
`

const Input = styled.input`
    width: 40vw;
    display: flex;
    align-items: center;
    height:fit-content;
    background-color:#b52c2caa;
    padding: 5px;
    border-radius: 12px;
    margin: 15px;
    border:none;
    color:var(--color-grey-800);
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

function Search() {
const [search, setSearch] = useState("");
const [openModal, setOpenModal] = useState(false);
const [searchParams, setSearchParams] = useSearchParams();

function handleSearch () {
searchParams.set("search", search);
setSearchParams(searchParams);
setOpenModal((prev)=>!prev );
}


    return (
    <Container>
        <Input value={search} type="text" name="friend" placeholder="Type full Name of friend" onChange={(e)=>setSearch(e.target.value)} />

        <Button disabled={search===""} onClick={handleSearch} >
            Search
        </Button>
        {openModal?<Modal setOpenModal={setOpenModal} search={search} /> :null} 
    </Container>
    )
}

export default Search
