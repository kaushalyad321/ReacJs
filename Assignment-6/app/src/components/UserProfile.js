import React from "react";

const UserProfile = (props) => {
  const name = `Name :${props.name}`;
  const email = `Email :${props.email}`;
  const phone = `Phone :${props.phone}`;
  return (
    <>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </>
  );
};

export default UserProfile;
