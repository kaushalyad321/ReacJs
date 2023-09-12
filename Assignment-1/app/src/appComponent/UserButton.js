function UserButton({ buttonName, buttonColor }) {
  const mystyle = {
    color: buttonColor
  };
  return (
    <>
      <button style={mystyle}> {buttonName} </button>
    </>
  );
}

export default UserButton;
