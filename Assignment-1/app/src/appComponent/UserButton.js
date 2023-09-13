function UserButton({ buttonName, buttonColor }) {
  const buttonStyle = {
    color: buttonColor,
  };
  return (
    <>
      <button style={buttonStyle}> {buttonName} </button>
    </>
  );
}

export default UserButton;
