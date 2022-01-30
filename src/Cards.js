import React from "react";

function Cards({ error, message }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "silver",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "50px",
        }}
      >
        <h1
          style={{
            padding: "10px",
          }}
        >
          {error}
        </h1>
        <hr />
        <p
          style={{
            padding: "10px",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default Cards;
