import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

const History = () => {
  return (
    <div>
       <div style={{marginTop:'50px'}}>
   
    <NavLink to="/History/favhero" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow'}}>Favourite Hero</NavLink>
    <NavLink to="/History/favplayer" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow',marginLeft:'20px'}}>Favourite Player</NavLink>
    <Outlet/>
  </div>
      
    </div>
  )
}

export default History
