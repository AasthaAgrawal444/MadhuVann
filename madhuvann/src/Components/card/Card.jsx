import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ id, fname, scientificname, category, images }) => {
  // Assuming there are always images available, directly access the first one's URL
  const firstImageUrl = images[0].url;

  return (
    <Link className="card_wrapper card-shadow" to={`/details/${id}`}>
      <div className="card_box1">
        <div className="card_img_cont">
          <img src={firstImageUrl} alt={fname} />
        </div>
      </div>
      <div className="card_box2">
        <h3 className="title">{fname}</h3>
        <p className="subtitle">{scientificname}</p>
        <p className="subtitle">Category: {category}</p>
      </div>
    </Link>
  );
};

export default Card;
