import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../homepage/Navbar";
import text_button from "../Assets/button_text.png";
import Loader from "../layouts/Loader/Loader";
import "./description.css";

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
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!detailedInfo) {
    return <div>Error loading detailed information.</div>;
  }
  const type = detailedInfo.iucntype;

  const image2 = detailedInfo.images[1].url;

  return (
    <div>
      <div>
        <Navbar />
        <div
          style={{
            backgroundColor: "black",
            width: "90vw",
            margin: "auto",
            textAlign: "center",
            borderRadius: "2rem",
          }}
        >
          <img
            src={image2}
            alt="photo_plant"
            style={{ maxWidth: "70vw", textAlign: "center" }}
          />
          <div
            style={{
              width: "90vw",
              margin: "auto",
              textAlign: "center",
              borderRadius: "4rem",
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                backgroundColor: "#F2EFDC",
                color: "black",
                fontSize: "2rem",
                float: "initial",
                borderRadius: "2rem",
                padding: "0.5rem",
                paddingTop: "0rem",
                paddingBottom: "0rem",
              }}
            >
              {detailedInfo.name}
              <i>({detailedInfo.scientificname})</i>
            </div>
            <div>
              <Link to={`/holo/${id}`}>
                <img
                  style={{ height: "3rem" }}
                  src={text_button}
                  alt="text_mode"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flexiboxx">
          <div className="chip">
            <h3>Population</h3>
            {detailedInfo.quantity}
          </div>
          <div className="chip">
            <h3>IUCN Status</h3>
            {detailedInfo.iucndef}
          </div>
          <div className="chip">
            <h3>Habitat</h3>
            {detailedInfo.location}
          </div>
        </div>
        <div className="desc-div">
          <div className="desc">{detailedInfo.description}</div>
        </div>

        <button
          style={{ backgroundImage: "url(path/to/button-image1.png)" }}
        ></button>

        <button
          style={{ backgroundImage: "url(path/to/button-image2.png)" }}
        ></button>
      </div>
    </div>
  );
};

export default DetailedPage;
