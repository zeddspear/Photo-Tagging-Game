import styled from "styled-components";

export const StyledPopUp = styled.div`

position: fixed;
top: 20%;
left: 30%;
width: 35rem;
min-height: 30rem;
border-radius: 10px;
background-color: #445574;
box-shadow: 2px 2px 2px rgba(0,0,0,0.5);



&>div{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

&>div>p{
    margin-top: 60px;
    width: 80%;
    color: #a31d0b;
    font-weight: 700;
    text-shadow: 1px 1px 1px black;
}

&>div>input{
  font-size: 13px;
  font-size: max(13px, 0.5em);
  font-weight: 600;
  font-family: inherit;
  background-color: #fff;
  border: 2px solid #2c2c2c;
  border-radius: 4px;
  margin-top: 1em;
}

&>div>input:focus{
    
  /* ...existing styles */
  box-shadow: 0 0 0 3px #c02e3e;

}

&>div>span{
    font-size: 1em;
    font-weight: 600;
    margin-top: 0.5em;
    margin-right: 0.6em;
}


`


export const PopUpImage = styled.img`
width: 100px;
height: 100px;
border-radius: 40px;
margin: 10px 40px;
`

export const PopUpImageDiv = styled.div`
display: flex;
flex-direction: column;
font-weight: 800;
`

export const Button = styled.button`
margin: 40px 10px;
padding: 10px 40px;
border: none;
border-radius: 10px;
cursor: pointer;
background-color: #2c2c2c;
color: #a31d0b;
text-shadow: 1px 1px 1px black;
font-weight: 600;
box-shadow: 2px 2px 2px rgba(0,0,0,0.5);


&:hover{
    opacity: 90%;
}

&:active{
    transform: scale(0.98);
}

&:disabled{
    opacity: 70%;
    transform: scale(1);
    cursor: default;
}

`