import React from 'react'
import { StyledPopUp , PopUpImage, PopUpImageDiv , Button } from '../StyledComponents/Popup.styled'
import { StyledDifficulty } from '../StyledComponents/Header.styled';
import { useDispatch , useSelector } from 'react-redux'
import { checkStart } from '../Reducers/startCheck';




function PopUp({CharactersData}) {

    const startCheck = useSelector((state) => state.startCheck.value.start);
    const dispatch = useDispatch();


  const PopUpImgs = CharactersData.map((character)=>{
    return <PopUpImageDiv key={character.id}>
        <PopUpImage src={require(`../Assets/${character.mainImg}`)} alt={`${character.mainImg} image`} />
          <span>{character.name}</span>
          <StyledDifficulty difficulty = {character.difficulty} >{character.difficulty}</StyledDifficulty>
    </PopUpImageDiv>
  })

  return (
    <>
    
    
    {
    !startCheck && <StyledPopUp>
        
        <div>
          <p>Tag these characters as fast as you can!
              Scroll through the image to find the correct character.
              Click the character and choose the correct name.
              You will be timed and your score will be recorded, so move fast!</p>
        </div>
  
        <div>
             {PopUpImgs}
        </div>
  
        <div>
              <Button onClick={() =>  dispatch(checkStart(true))  }>Start</Button>
        </div>
      </StyledPopUp>
    }
    </>
  )
}

export default PopUp
