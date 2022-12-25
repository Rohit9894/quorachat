import React, { useEffect, useState } from "react";
import { TfiControlShuffle } from "react-icons/tfi";

function Admin() {
  const [data, setData] = useState([]);
  function getData() {
    fetch("http://localhost:3000/api/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return <div></div>;
}

export default Admin;
