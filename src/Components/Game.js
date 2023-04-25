import React from 'react'
import Header from './Header'
import Container from '../StyledComponents/Container.styled'
import PopUp from './PopUp'
import Finished from './Finished'
import { Transparent } from '../StyledComponents/TransparentDiv.styled'
import { useSelector ,useDispatch } from 'react-redux'
import { getData } from '../Reducers/CharactersData'
import Main from './Main'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { StyledLoad } from '../StyledComponents/Loading.styled'
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Game() {

  const startCheck = useSelector((state) => state.startCheck.value.start);

  const CharactersData = useSelector((state)=> state.CharactersData);

  // game end state
  const [finished,setFinished] = React.useState(false);

  const [time,setTime] = React.useState("");

  


const dispatch = useDispatch();

React.useEffect(()=>{

  dispatch(getData());
  
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  return (
    <>
    {CharactersData.loading ? <StyledLoad>
                                  <p>Loading...</p>
                                  <ReactBootstrap.Spinner animation="grow"/>
                              </StyledLoad> 
    : 
    <>
    <ToastContainer hideProgressBar={true}/>
    <Container>

    { !startCheck && <Transparent/>}
    <Header CharactersData={CharactersData.value} loading={CharactersData.loading}  setFinished={setFinished} setTime={setTime}/>
    {/* if finished is true mount finished component else start PopUp*/}
    {finished ? <Finished  finished={finished} time={time}/> : <PopUp  CharactersData={CharactersData.value}/>}
    <Main   CharactersData={CharactersData.value} toast={toast} />

    </Container>
    </>
      }
      </>
  )

  
}


 


export default Game
