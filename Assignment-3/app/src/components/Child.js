import React,{useContext,useState} from 'react'
import {contextValue} from '../components/Parent'
import SuccessLogin from './SuccessLogin';
import LoginAgain from './LogInAgain'
const Child = () => {
   const value = useContext(contextValue) ;
   const[result,setResult]=useState('')
   const verificationCheck =()=>{
   
      if(value['username']==='kaushalyad321' && value['password']==="kaushalyad321@"){
          setResult(<>Welcome {value['username']}</>)
      }

      else{
        setResult(<>Please Login </>)
      }
   }

  return (
    <>
     <button onClick={verificationCheck}>Login</button>
     <div>
     {result}
     </div>
    </>
  )
}

export default Child
