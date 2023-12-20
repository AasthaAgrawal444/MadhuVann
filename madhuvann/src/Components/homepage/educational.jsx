import React from "react";
import { Link } from "react-router-dom";
function Education() {
  return (
    <div style={{ paddingTop: "3rem", textAlign: "center" }}>
      <h1>Educational Content </h1>
      <div
        style={{
          paddingTop: "4rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "2rem",
              padding: "3rem",
              color: "green",
            }}
            to="/eduVideos"
          >
            Educational Videos
          </Link>
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "2rem",
              padding: "3rem",
              color: "green",
            }}
            to="/holoedu"
          >
            Holographic Session
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Education;
