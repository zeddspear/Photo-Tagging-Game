import React from 'react'
import { StyledMain , StyledMainImg , StyledMainImgDiv } from '../StyledComponents/Main.styled'
import SelectOption from './SelectOption';

function Main({CharactersData,toast}) {

  const [coords,setCoords] = React.useState([0,0]);
  const [dropDownOpen,setDropDownOpen] = React.useState(false);


  function toggleDropDown(event){
    event.preventDefault();
    setDropDownOpen(!dropDownOpen);

    const coordx = event.pageX;
    const coordy = event.pageY;

    setCoords([coordx,coordy]);

  }


  return (
    <>
    <StyledMain>
            <div>
                <span>Scroll Down ....</span>
            </div>
           
        
            <StyledMainImgDiv  onClick={toggleDropDown}>

              <SelectOption CharactersData={CharactersData} coords={coords} visible={dropDownOpen} toast={toast} />

                <StyledMainImg src={require('../Assets/cyberpunkEnhanced.jpg')}  id='mainBgImg'/>
            </StyledMainImgDiv>
            
            <span>Made By <a href='https://github.com/zeddspear' target='_blank' rel="noreferrer">Zeddspear</a></span>
    </StyledMain>
      
    </>
  )
}

export default Main
