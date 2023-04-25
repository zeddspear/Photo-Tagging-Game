import React from 'react'
import { StyledHeader } from '../StyledComponents/Header.styled'
import { HeaderImage , HeaderChar , StyledStopwatch , StyledDifficulty } from '../StyledComponents/Header.styled'
import {StopWatch , useStopwatch ,   } from "@glamboyosa/react-stopwatch"
import '@glamboyosa/react-stopwatch/dist/index.css'
import { useSelector , useDispatch } from 'react-redux'
import { checkStart } from '../Reducers/startCheck';



function Header({CharactersData, setFinished , setTime}) {

  const {start , stop , timerProps } = useStopwatch();

  const Start = useSelector((state)=> state.startCheck.value.start);


  const dispatch = useDispatch();

 
  

  React.useEffect(()=>{
    if(Start){
      start();
      
    }else{
      stop();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Start])

 

  // After all characters found save time 
  
    React.useEffect(()=>{
      if(CharactersData.every(ele => ele.isFind === true)){
    
        setTimeout(()=>{
          if(Start === true){
            const hours = document.getElementById('hours-element').innerHTML;
            const minutes = document.getElementById('minutes-element').innerHTML;
            const seconds = document.getElementById('seconds-element').innerHTML;
            const time = `${hours}  ${minutes}  ${seconds}`;
            setTime(time);
  
            dispatch(checkStart(false));
            setFinished(true);
          }
          
        },1000)
        
       
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[CharactersData])
  





  const CharactersHead = CharactersData.map((character) => {
    if(!character.isFind)
    { return <HeaderChar key={character.id}>
      <HeaderImage src={require(`../Assets/${character.img}`)} alt={`${character.img} head`}/>
      <span>{character.name}</span>
      <StyledDifficulty difficulty = {character.difficulty} >{character.difficulty}</StyledDifficulty>
    </HeaderChar> }
    else
    {
        return undefined;
     }
  })

  return (
    <>
    <StyledHeader id='header'>
     
     <div>
           {CharactersHead}
     </div>

{
 Start &&  <StyledStopwatch>
                   <StopWatch {...timerProps} />
                </StyledStopwatch> 
}
    
       
     </StyledHeader>
     
    </>
  )
}

export default Header
