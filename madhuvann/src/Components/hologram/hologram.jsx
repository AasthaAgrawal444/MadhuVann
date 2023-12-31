import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./hologram.css";
import { useNavigate } from "react-router-dom";

import holo from "../Assets/holo_mode.png";
import TextToSpeechToggle from "../tts/tts";

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
    return <div> loading./...</div>;
  }

  if (!holoData) {
    return <div>Error loading detailed information.</div>;
  }

  const data = holoData.description;
  const image2 = holoData.images[1].url;
  const audio = holoData.audio;
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
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <iframe
            frameborder="0"
            scrolling="no"
            src={holoData.audio}
            width="50"
            height="30"
          ></iframe>
        </div>
        <div>
          <Back />
        </div>
      </div>
      <div className="page">
        <div className="page-div">
          <div className="image top">
            <img className="holoimage" src={image2} alt="animal" />
            <p className="white">{holoData.fname}</p>
          </div>
          <div className="flex">
            <div className="image left">
              <img className="holoimage" src={image2} alt="animal" />
              <p className="white">{holoData.fname}</p>
            </div>
            <div className="square" />
            <div className="image right">
              <img className="holoimage" src={image2} alt="animal" />
              <p className="white">{holoData.fname}</p>
            </div>
          </div>
          <div className="image bottom">
            <img className="holoimage" src={image2} alt="animal" />
            <p className="white">{holoData.fname}</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <TextToSpeechToggle textToRead={data} />
      </div>
    </div>
  );
};

export default Holo;
