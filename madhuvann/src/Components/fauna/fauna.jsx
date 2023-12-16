import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Navbar from "../homepage/Navbar";
import "./fauna.css";

const FaunaCardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set the cards state
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/faunas");
        if (!response.ok) {
          throw new Error(
            `Error fetching card information: ${response.statusText}`
          );
        }
        const { faunas } = await response.json(); // Destructure the 'faunas' property directly

        // Filter cards based on the category being "Flora"
        const floraCards = faunas.filter((fauna) => fauna.category === "Fauna");
        setCards(floraCards);
      } catch (error) {
        console.error("Error fetching card information:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="fauna_card_container">
        <div className="fauna_container">
          {cards.map(({ _id, name, scientificname, category, images }) => (
            <Card
              key={_id}
              id={_id}
              name={name}
              scientificname={scientificname}
              category={category}
              images={images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaunaCardList;