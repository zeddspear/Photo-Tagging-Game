import React from 'react'


function LeaderBoard({leaderboardData}) {

    
const users = leaderboardData.map((ele,index)=>{
    return  <tr key={ele.id}>
                 <td>{index+1}</td>
                 <td>{ele.name}</td>
                 <td>{ele.time}</td>
            </tr>
})


  return (
    <tbody>
      {leaderboardData.length === 0 ? <tr><td>No Data</td><td>No Data</td><td>No Data</td></tr> : users}
    </tbody>
  )
}

export default LeaderBoard
