
function Button({text,colour}){
  const mystyle = {
    color: colour 
  
  };
    return (
    <>
      <button style={mystyle}> {text} </button>
    </>
    )
}

export default Button 