import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, scientificname, category, images }) => {
  // Assuming there are always images available, directly access the first one's URL
  const firstImageUrl = images[0].url;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "20rem",
      }}
    >
      {" "}
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/details/${id}`}
      >
        <h3>{name}</h3>
        <p>{scientificname}</p>
        <p>Category: {category}</p>

        <img src={firstImageUrl} alt={name} style={{ maxWidth: "100%" }} />
      </Link>
    </div>
  );
};

export default Card;
