import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailedPage = () => {
  //   const { id } = useParams();
  const id = "657ad5e48fc9cc6a1dad092f";
  const [detailedInfo, setDetailedInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:4000/api/v1/fauna/" + id
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

  return (
    <div>
      <h2>{detailedInfo.name}</h2>
      <p>Scientific Name: {detailedInfo.scientificname}</p>
      <p>Description: {detailedInfo.description}</p>
      <p>Quantity: {detailedInfo.quantity}</p>
      <p>Category: {detailedInfo.category}</p>
      <p>IUCN Type: {detailedInfo.iucntype}</p>
      <p>IUCN Definition: {detailedInfo.iucndef}</p>
      <p>Location: {detailedInfo.location}</p>
      {/* Add other properties as needed */}
    </div>
  );
};

export default DetailedPage;
