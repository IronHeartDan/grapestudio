import React from "react";

function Cards({ error, message, positiveBtn, negativeBtn }) {
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
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 5px black",
        }}
      >
        <h1
          style={{
            color: "red",
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
        <hr />
        <br />
        {positiveBtn ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href={positiveBtn.url}
              style={{
                margin: "5px",
                padding: "10px",
                textDecoration: "none",
                color: "white",
                backgroundColor: "green",
              }}
            >
              {positiveBtn.message}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={negativeBtn.url}
              style={{
                margin: "5px",
                padding: "10px",
                textDecoration: "none",
                color: "white",
                backgroundColor: "red",
              }}
            >
              {negativeBtn.message}
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Cards;
