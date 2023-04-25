import styled from "styled-components";

export const StyledMain = styled.div`
min-width: 100vw;
min-height: 100vh;
background-color: #c02e3e;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;



&>span>a{
    text-decoration: none;
    color: black;
    font-weight: 800;
    
}

&>span{
    padding: 1em 0em ;
}

&>div{
    text-align: center;
    font-size: 3em;
    font-weight: 900;
    margin: 2em 0em 1em 0em;
    color: #2c2c2c;
    text-shadow: 1px 1px 1px black;
}

`

export const StyledMainImg = styled.img`
   width: 100%;
   height: 100%;
    border-radius: 50px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
    cursor: crosshair;
`

export const StyledMainImgDiv = styled.div`
border-radius: 50px;
width: 90%;
height: 5500px;
`