import styled from "styled-components";

export const StyledTable = styled.div`


&>table{
    border: 2px solid black;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
    margin-top: 1em;
    margin-bottom: 2em;
}
&>table>thead>tr>th,&>table>tbody>tr>td{
    padding: 0.2em 0.6em;
    border: 1px solid black;
}

&>table>tbody>div{
    margin-left:"7em 3em";
    padding:"0.8em 0em 0.8em 0em";
}



`