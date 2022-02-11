import React from "react";
import { Link } from "react-router-dom";

const header1 = ({ loc, setLoc }) => {
  const logoutSubmit = () => {
    localStorage.clear();
  };

  return (
    <>
      <div
        class="d-inline-flex p-2"
        style={{
          display: "flex",
          zIndex: "2",
          justifyContent: "space-evenly",
          backgroundColor: "lightblue",
          fontSize: "5vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "13vh",
        }}
      >
        <p
          style={{ fontSize: "7vh", color: "darkblue", fontFamily: "initial" }}
        >
          Renting.com
        </p>
        <p style={{ marginTop: "2vh", fontFamily: "initial" }}>
          <Link to="/add" style={{ color: "black", textDecoration: "none" }}>
            Add House
          </Link>
        </p>
        <p
          style={{ marginTop: "2vh", fontFamily: "initial" }}
          onClick={logoutSubmit}
        >
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Logout{" "}
          </Link>
        </p>
        <input
          style={{
            marginTop: "2vh",
            width: "35vh",
            height: "7vh",
            fontSize: "3vh",
            borderRadius: "2vh",
            borderColor: "black",
            fontFamily: "initial",
          }}
          name="loc"
          type="loc"
          placeholder="Search by location..."
          label="loc"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default header1;
