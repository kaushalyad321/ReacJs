import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

const Profile= ()=> {
return (
 
    <div style={{marginTop:'50px'}}>
    <NavLink to='/Profile'></NavLink>
    <NavLink to="/Profile/name" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow'}}>Name</NavLink>
    <NavLink to="/Profile/email" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow',marginLeft:'20px'}}>Email</NavLink>
    <Outlet />
  </div>
)
}

export default Profile