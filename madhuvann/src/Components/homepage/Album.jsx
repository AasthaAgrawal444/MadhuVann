import React, { useState } from "react";
import Card from "../card/Card.jsx";
import axios from "axios";
// import "./album.css";

const baseURL = "http://localhost:6000/api/v1/faunas";
//var self = this;

const Album = (prop) => {
  console.log(prop.value);
  // const num = [1,2,3,4,5,6,7,8,9]
  const [apiv, setApiv] = useState();
  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setApiv(response.data.faunas);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(apiv);
  if (!apiv) return <></>;
  if (apiv.imageUrl) return 11;
  return (
    <>
      <div className="container-album">
        {apiv
          .filter((res) => String(res.category) === String(prop.value))
          .map((i) => (
            <Card
              key={i._id}
              title={i.name}
              subtitle={i.scientificname}
              img={i.images[0].url}
              bordercolor={i.iucntype}
            />
          ))}
      </div>
    </>
  );
};
//title, subtitle, bordercolor,image
export default Album;
