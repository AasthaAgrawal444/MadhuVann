import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./hologram.css";
import { useNavigate } from "react-router-dom";
import holo from "../Assets/holo_mode.png";

const Holo = () => {
  const { id } = useParams();
  const [holoData, setHoloData] = useState(null);
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
        setHoloData(data.fauna);
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

  if (!holoData) {
    return <div>Error loading detailed information.</div>;
  }

  const data = holoData.description;
  const image2 = holoData.images[1].url;
  function Back() {
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };
    return (
      <>
        <button
          style={{ marginTop: "1.5vh", marginLeft: ".78rem" }}
          onClick={goBack}
        >
          <img style={{ height: "5vh" }} src={holo} />
        </button>
      </>
    );
  }

  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <Back> back</Back>
      </div>
      <div className="page">
        <div className="page-div">
          <div className="image top">
            <img className="holoimage" src={image2} alt="animal" />
          </div>
          <div className="flex">
            <div className="image left">
              <img className="holoimage" src={image2} alt="animal" />
            </div>
            <div className="square" />
            <div className="image right">
              <img className="holoimage" src={image2} alt="animal" />
            </div>
          </div>
          <div className="image bottom">
            <img className="holoimage" src={image2} alt="animal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holo;
