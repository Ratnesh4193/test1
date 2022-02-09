import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const header1 = ({ personid }) => {
  const remove = async () => {
    const object={
      id:personid,
    }
    try {
      const res = await axios.delete("/remove", object);
      alert("removed successfully");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div
        class="d-inline-flex p-2"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontFamily: "sans-serif",
          backgroundColor: "lightblue",
          fontSize: "5vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "13vh",
        }}
      >
        <p style={{ fontSize: "7vh", color: "darkblue" }}>Renting.com</p>
        <p style={{ marginTop: "2vh" }}>
          <Link to="/add" style={{ color: "black", textDecoration: "none" }}>
            Add House
          </Link>
        </p>
        <p style={{ marginTop: "2vh" }} onClick={remove}>
          Remove House
        </p>
        <p style={{ marginTop: "2vh" }}>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Logout
          </Link>
        </p>
      </div>
    </>
  );
};

export default header1;
