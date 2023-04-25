import React from 'react'
import { SelectDiv , SelectPic } from '../StyledComponents/SelectOption.styled'
import { useDispatch } from 'react-redux';
import { changeData } from '../Reducers/CharactersData';



function SelectOption({CharactersData,coords,visible,toast}) {

  const [divStyle,setDivStyle] = React.useState({});

  const dispatch = useDispatch();

  
React.useEffect(()=>{
    moveDropdown();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[visible])



// when click on image the drop down will show on pointer location functionality
function moveDropdown(){
        if (coords[0] > window.innerWidth-173) {
            setDivStyle({
                left: coords[0] -173,
                top: coords[1] -25
            });
        } else {
            setDivStyle({
                left: coords[0]+37,
                top: coords[1] -25
            });
        }
    }



// Check if the clicked position contains character and check if its the right one
function validateCharacter(character){
 
  const headerHeight = document.querySelector('#header').clientHeight;
  const mainImg = document.querySelector('#mainBgImg');
  const imgWidth = mainImg.width;
  const imgHeight = mainImg.height;

  const marginLeft = (window.innerWidth - imgWidth)/2;

// width and height of clickBox
  const boxX = 20/imgWidth;
  const boxY = 30/imgHeight;


  const percentageX = ((coords[0] - marginLeft)/imgWidth).toFixed(3);
  const percentageY = ((coords[1] - headerHeight)/imgHeight).toFixed(3);

 // console.log(percentageY)

//checking coords of character with the clicked coords
if(percentageX >= Number(character.coords[0]) && percentageX <= Number(character.coords[0])+boxX){

 if(percentageY >= Number(character.coords[1]) && percentageY <= Number(character.coords[1])+boxY){
  
  dispatch(changeData(CharactersData.map((ele) => { return ele.id === character.id ? {...character,isFind:true} : ele })));

    // alert for success 
    toast.success(`Yes it's ${character.name}`,{position:toast.POSITION.TOP_CENTER , theme:"dark",autoClose:2000});
}
}
}


  const selections = CharactersData.map((character)=>{
     if(!character.isFind){ return  <div key={character.id}  onClick={() => validateCharacter(character)}>
              <SelectPic src={require(`../Assets/${character.img}`)} alt='characterPic' />
              <span>{character.name}</span>
           </div>}else{

            return undefined
           }
  })

if(visible){
  return (
    <>
    <SelectDiv style={divStyle} visible={visible} >
          {selections}
    </SelectDiv>
    </>
)
}

}

export default SelectOption
