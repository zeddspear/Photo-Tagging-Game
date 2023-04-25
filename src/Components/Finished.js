import React from 'react'
import { StyledTable } from '../StyledComponents/StyledTable';
import { StyledPopUp } from '../StyledComponents/Popup.styled';
import { Button } from '../StyledComponents/Popup.styled';
import { db } from '../Config/firebase';
import { collection , addDoc , query , orderBy , limit , getDocs} from 'firebase/firestore';
import LeaderBoard from './LeaderBoard';

function Finished({time}) {

    const [name,setName] = React.useState("");

    const [leaderboardData,setLeaderboardData] = React.useState([]);

    const leaderboardRef = collection(db,"Leaderboard");

    React.useEffect(()=>{
        getDataFromLeaderboard()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

// submiting name with time to firebase
    async  function onSubmitUserTime(){
        if(!name){
            alert("Please enter your Name!");
        }else{
            try{
                await addDoc(leaderboardRef, {name:name,time:time})
                setName("");
                document.querySelector("#submitBtnTime").disabled = true;
            }catch(err){
                alert("Sorry can't update data to firebase!");
            }
        }
    }



// getting data from firebase with ordered ranks

async function getDataFromLeaderboard(){
    try{
        const q = query(leaderboardRef,orderBy("time"),limit(3));
        const data = await getDocs(q);
        const filteredData = data.docs.map((doc) => ({id: doc.id,...doc.data()}));
        setLeaderboardData(filteredData);
        console.log(leaderboardData)
    }catch(err){
        alert("Sorry can't fetch data from firebase!");
    }
}



  return (
        <StyledPopUp>
            <div>
            <p>Congratulations! You have found all the characters.</p>
            </div>

            <div><span>Your Finish Time is : {time}</span></div>
            
            <div>
            <span>Name: </span>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} maxLength={15}/>
            </div>

            <div>
            <Button id='submitBtnTime' style={{margin:"2em 1em",padding:"0.5em 1.5em",fontSize:"13px"}} onClick={() => {onSubmitUserTime(); getDataFromLeaderboard()}}>Submit</Button>
            </div>

            
            <div><span>Top 3 Rank Holders</span></div>

            <div>
            
                <StyledTable>
                    <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                       <LeaderBoard leaderboardData={leaderboardData}/>
                    </table>
                </StyledTable>
            </div>


        </StyledPopUp>
  )
}

export default Finished;