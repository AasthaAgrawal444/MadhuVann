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

      <h1
        style={{
          width: "80vw",
          margin: "auto",
          textAlign: "center",
          borderRadius: "4rem",
          padding: "1.5rem",
        }}
      >
        {detailedInfo.name}
      </h1>
      <TextToSpeechToggle textToRead={detailedInfo.description} />

      {/* Styling for Quantity, IUCN type, and Population */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            width: "30vw",
            margin: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <p>Quantity: {detailedInfo.quantity}</p>
        </div>
        <div
          style={{
            width: "30vw",
            margin: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <p>IUCN Type: {detailedInfo.iucntype}</p>
        </div>
        <div
          style={{
            width: "30vw",
            margin: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <p>Population: {detailedInfo.population}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            width: "30vw",
            margin: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <p style={{ margin: "0.5rem 0" }}>
            Scientific Name: {detailedInfo.scientificname}
          </p>
        </div>
        <div
          style={{
            width: "30vw",
            margin: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <p style={{ margin: "0.5rem 0" }}>
            IUCN Definition: {detailedInfo.iucndef}
          </p>
        </div>
        <div
          style={{
            width: "30vw",
            margin: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <p style={{ margin: "0.5rem 0" }}>
            Location: {detailedInfo.location}
          </p>
        </div>
      </div>

      {/* Styling for Description */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "1rem",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <p>Description: {detailedInfo.description}</p>
      </div>

      {/* Buttons with images */}
      <Link to={`/holo/${id}`}>
        <button style={{ backgroundImage: "url(path/to/button-image1.png)" }}>
          {/* Add any additional styling for the button */}
        </button>
      </Link>
      <button style={{ backgroundImage: "url(path/to/button-image2.png)" }}>
        {/* Add any additional styling for the button */}
      </button>

      {/* Additional details with margin */}
    </div>
  );
};

export default DetailedPage;
