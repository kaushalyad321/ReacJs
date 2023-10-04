import React, { useState } from "react";
import axios from "axios";

const AxiosFormPost = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [post, setPost] = React.useState(null);
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        name: name,
        fatherName : fatherName
      })
      .then((response) => {
        setPost(response.data);
      });
  }

 


  return (
    <div>
      <form>
        <div>
          <label>Enter the username:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Enter the Password:</label>
          <input
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={createPost}>Submit</button>
      </form>
    </div>
  );
};

export default AxiosFormPost;
