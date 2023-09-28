import React from 'react'
import { NavLink ,Outlet } from 'react-router-dom'

const Setting = () => {
return (
<div>
<div style={{marginTop:'50px'}}>
    <NavLink to='/Setting'></NavLink>
    <NavLink to="/Setting/updatepic" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow'}}>Update Picture</NavLink>
    <NavLink to="/Setting/updatemail" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow',marginLeft:'20px'}}>Update Email</NavLink>
    <Outlet />
  </div>
  
</div>

)
}

export default Setting