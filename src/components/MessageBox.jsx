import styled from "styled-components";

const TextBox = styled.div`
    color:var(--color-grey-800);
    margin:10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
   
    
`
const P = styled.p`
    font-size: 12px;
`
const Span = styled.span`
    font-size:12px;
`

function MessageBox({chat, userId}) {
    // Create a Date object
const date = new Date(chat.created_at);

// Extract hours, minutes, and seconds
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');

// Format the time
const time = `${hours}:${minutes}`;
    return (
        <div>
            <TextBox  style={{backgroundColor:chat.sId=== userId?"#3b83c396":"#c33ba195", alignItems:chat.sId === userId?"start":"end" }}>        
                   <div> {chat.message}</div>
                    <P>by {chat.sender}</P>
                    <Span> at {time}</Span>
            </TextBox>

        </div>
    )
}

export default MessageBox
