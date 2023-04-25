import styled from "styled-components";


export const StyledHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
background-color: #2c2c2c;
color: #c02e3e;
padding: 10px 0px;
text-shadow: 1px 1px 1px black;
box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
position: relative;

&>div{
    display: flex;
}

`

export const HeaderChar = styled.div`
display: flex;
flex-direction: column;
text-align: center;
font-size: 0.7em;
font-weight: 800;
`

export const HeaderImage = styled.img`

width: 50px;
height: 50px;
border-radius: 40px;

margin: 10px 40px;
`

export const StyledStopwatch = styled.div`
margin-top: 0.5em;
font-size: 2.5em;
`

export const StyledDifficulty = styled.span`
color: ${({difficulty}) => {if(difficulty === "Easy" )
                            { return "#4cdb13" }
                            else if(difficulty === "Medium")
                            {return "#f6ff00"}
                            else{return "#d82020"}}
                                                };

`