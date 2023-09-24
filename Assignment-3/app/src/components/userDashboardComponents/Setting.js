import React from 'react'
import { NavLink } from 'react-router-dom'

const Courses = () => {
return (
<div>
<div style={{marginTop:'50px'}}>
    <NavLink to='/Setting'></NavLink>
    <NavLink to="/Setting/updatepic" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow'}}>Update Picture</NavLink>
    <NavLink to="/Setting/updatemail" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow',marginLeft:'20px'}}>Update Email</NavLink>
  </div>
  
</div>

)
}

export default Courses