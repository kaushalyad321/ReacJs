import React, { useState } from "react";

const Form = () => {
   const[data,setData]=useState({
    firstName:'',
    lastName:'' ,
    bike:'' ,
    boat:'' ,
    car:'' ,
    
   }) ;
   const showData=()=>{
     console.log(data)
   }

  return (
    <div>
      <form >
        <label for="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e)=>{setData({...data,firstName:e.target.value})}}
        />
        <br />
        <label for="lname" >Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e)=>{setData({...data,lastName:e.target.value})}}
        />
        <br />
        <p>Please select your Present Vehicle:</p>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={(e)=>{setData({...data,bike:e.target.value})}} />
        <label for="vehicle1"> I have a bike</label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onClick={(e)=>{setData({...data,boat:e.target.value})}} /> 
        <label for="vehicle3"> I have a boat</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"  onClick={(e)=>{setData({...data,car:e.target.value})}}/>
        <label for="vehicle2"> I have a car</label>
        <br></br>
        <p>Please select your favorite Web language:</p>

        <input type="radio" id="html" name="fav_language" value="HTML" onClick={(e)=>{setData({...data,favlan:e.target.value})}}/>
        <label for="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" onClick={(e)=>{setData({...data,favlan:e.target.value})}}/>
        <label for="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
       onClick={(e)=>{setData({...data,favlan:e.target.value})}}/>
        <label for="javascript">JavaScript</label>
      </form>
      <button style={{width:'100px',height:'40px',marginLeft:'30px',marginTop:'20px'}} onClick={showData}>Submit</button>
    </div>
  );
};

export default Form;
