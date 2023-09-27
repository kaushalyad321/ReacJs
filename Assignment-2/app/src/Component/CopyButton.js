import React, { useState } from "react";
import useClipboard from "./UseClipboard";
import ClipboardIcon from "./ClipboardIcon";
import SuccessIcon from "./SuccessIcon";
function CopyButton({ code }) {
  const [isCopied, handleCopy] = useClipboard(1300); //copied will be reset after 2 seconds
  const [content ,setContent] =useState() ;

  return (
    <>
     <div>
      <button style={{marginLeft:'1284px',cursor:'pointer'}} onClick={() => handleCopy(content)}>
        {isCopied ? <SuccessIcon /> : <ClipboardIcon />}
      </button>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <textarea onChange={(e)=>{setContent(e.target.value)}} style={{height:'350px' ,width:'800px',marginLeft:'30px',marginRight:'30px',background:'black',color:'white',fontSize:'40px',resize:'none',padding:'20px',borderColor:'black'}}></textarea>
      </div>
    </>
  );
}

export default CopyButton;
