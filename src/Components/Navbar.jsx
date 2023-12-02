import React, { useState } from "react";

const DonateButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
    // Add your logic for handling the menu toggle
  };

  return (
    <div>
      {/* Hamburger Icon on the left */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          fontSize: "26px", // Adjusted to make it a bit thinner
          color: "#254C36", // Color set to #254C36
          cursor: "pointer",
        }}
        onClick={handleHamburgerClick}
      >
        ☰
      </div>

      {/* Donate Button on the right */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "60px",
          width: "120px",
          height: "50px",
          backgroundColor: "#F2EFDC",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background-color 0.3s",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontFamily: "Yeseva One",
            fontWeight: 400,
            fontSize: "18px",
            color: "#254C36", // Color set to #254C36
          }}
        >
          Donate
        </div>
      </div>
    </div>
  );
};

export default DonateButton;
