
import React, { useState } from "react";
import animals from "../Assets/animals.jpeg";
import flowers from "../Assets/flowers.jpeg";
import clicks from "../Assets/click.png";
import { Link } from "react-router-dom";
import Album from "./Album";


const GreenRectangleWithCircles = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  };

  const rectangleStyle = {
    position: "relative",
    width: "900px",
    height: "350px",
    backgroundColor: "#254C36",
    margin: "0 20px",
    borderRadius: "0 50rem 50rem 0",
    overflow: "hidden",
  };

  const smalrectangle = {
    position: "relative",
    width: "400px",
    height: "50px",
    backgroundColor: "#97b18e",
    margin: "1px auto 0",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const smallerrectangles = {
    width: "150px",
    height: "50px",
    backgroundColor: "#254C36",
    borderRadius: "50px",
    cursor: "pointer",
    fontFamily: "DM Serif Display",
    textAlign: "center",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1px",
    fontWeight: "bold",
    fontSize: "18px",
  };
  const secondsmallerrectangles = {
    width: "150px",
    height: "50px",
    backgroundColor: "#254C36",
    borderRadius: "50px",
    cursor: "pointer",
    fontFamily: "DM Serif Display",
    textAlign: "center",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1px",
    fontWeight: "bold",
    fontSize: "18px",
  };

  const mirroredRectangleStyle = {
    ...rectangleStyle,
    transform: "scaleX(-1)",
    borderRadius: "0 50rem 50rem 0",
  };
  const [value, setvalue] = useState();

  // const handleSmallerRectanglesClick = () => {
  //     (e) => {
  //       setvalue(e.target.value);
  //       console.log("Mirrored Smaller Rectangles Clicked");
  //     }
  // };

  // const handleMirroredSmallerRectanglesClick = () => {
  //   console.log("Mirrored Smaller Rectangles Clicked");
  // };


  const smalrectangleText = {
    fontFamily: "DM Serif Display",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={rectangleStyle}>
          <Link to="/flora">
            <img
              src={flowers}
              style={{
                borderRadius: "50rem",
                height: "300px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "22px",
              }}
            />
          </Link>
        </div>
        <div style={mirroredRectangleStyle}>
          <Link to="/fauna">
            <img
              src={animals}
              style={{
                borderRadius: "50rem",
                height: "300px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "22px",
              }}
            />
          </Link>
        </div>
      </div>
      <div style={smalrectangle}>
        <Link to="/flora">
          {" "}
          <div style={{ ...smallerrectangles, ...smalrectangleText }}>
            Flora
          </div>
        </Link>
        <img
          src={clicks}
          style={{
            height: "50px",
          }}
        />

        <Link to="/fauna">
          <div style={{ ...secondsmallerrectangles, ...smalrectangleText }}>
            Fauna
          </div>
        </Link>
      </div>
      <Album value={value} />
      <style>
        {`
          @media (max-width: 768px) {
            ${rectangleStyle}
            ${mirroredRectangleStyle}
            img {
              height: 150px; 
              width: 18px
            ${smalrectangle}
            ${smallerrectangles}
            ${smalrectangleText}
            ${secondsmallerrectangles}

          }
        `}
      </style>
    </>
  );
};

export default GreenRectangleWithCircles;
