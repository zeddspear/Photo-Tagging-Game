import styled from "styled-components";

export const SelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
    text-align: center;
    position: absolute;
    transform: translate(-20%, 18%);
    background-color: #2c2c2c;
    
    &>div{
        font-size: 0.3em;
        border: 2px solid #c02e3e;
        width: 10em;
        color: #c02e3e;
        cursor: pointer;
        padding: 0.3em 0.3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`


export const SelectPic = styled.img`

width: 3em;
height: 3em;
border-radius: 40px;
margin-left: 0.3em;

`



