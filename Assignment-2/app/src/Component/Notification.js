import { useEffect, useState } from "react";
const Notification = () => {
  const [massage, setMassage] = useState("This is Notification Massage");
  useEffect(() => {
    setTimeout(() => {
      setMassage("");
    }, 5000);
  });
  return (
    <>
      <p>Notification : {massage}</p>
    </>
  );
};

export default Notification;
