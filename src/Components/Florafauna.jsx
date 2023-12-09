import React from "react";
import animals from "./images/animals.jpeg";
import flowers from "./images/flowers.jpeg";
import clicks from "./images/click.jpeg";

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
    backgroundColor: "#020202",
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

  const handleSmallerRectanglesClick = () => {
    console.log("Smaller Rectangles Clicked");
  };

  const handleMirroredSmallerRectanglesClick = () => {
    console.log("Mirrored Smaller Rectangles Clicked");
  };

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
        </div>
        <div style={mirroredRectangleStyle}>
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
        </div>
      </div>

      <div style={smalrectangle}>
        <div
          style={{ ...smallerrectangles, ...smalrectangleText }}
          onClick={handleSmallerRectanglesClick}
        >
          Flora
        </div>
        <img
          src={clicks}
          style={{
            height: "50px",
          }}
        />
        <div
          style={{ ...secondsmallerrectangles, ...smalrectangleText }}
          onClick={handleMirroredSmallerRectanglesClick}
        >
          Fauna
        </div>
      </div>
    </>
  );
};

export default GreenRectangleWithCircles;
