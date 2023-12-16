import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextToSpeechToggle from "../tts/tts";
import { Link } from "react-router-dom";
import Navbar from "../homepage/Navbar";

const DetailedPage = () => {
  const { id } = useParams();
  const [detailedInfo, setDetailedInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:4000/api/v1/fauna/${id}`
        );
        if (!response.ok) {
          throw new Error(
            `Error fetching detailed information: ${response.statusText}`
          );
        }
        const data = await response.json();
        // Assuming 'fauna' is the nested property
        setDetailedInfo(data.fauna);
      } catch (error) {
        console.error("Error fetching detailed information:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!detailedInfo) {
    return <div>Error loading detailed information.</div>;
  }

  const image1 = detailedInfo.images[0].url;
  const image2 = detailedInfo.images[1].url;

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "black",
          width: "80vw",
          margin: "auto",
          textAlign: "center",
          borderRadius: "3rem",
        }}
      >
        <img
          src={image2}
          alt="Image 2"
          style={{ maxWidth: "70vw", textAlign: "center" }}
        />
      </div>
      <h1>{detailedInfo.name}</h1>
      <TextToSpeechToggle textToRead={detailedInfo.description} />
      <Link to={`/holo/${id}`}>holo</Link>
      <p>Scientific Name: {detailedInfo.scientificname}</p>
      <p>Description: {detailedInfo.description}</p>

      <p>Quantity: {detailedInfo.quantity}</p>
      <p>Category: {detailedInfo.category}</p>
      <p>IUCN Type: {detailedInfo.iucntype}</p>
      <p>IUCN Definition: {detailedInfo.iucndef}</p>
      <p>Location: {detailedInfo.location}</p>
    </div>
  );
};

export default DetailedPage;
