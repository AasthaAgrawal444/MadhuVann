import React, { useState } from "react";
import Card from "../card/Card.jsx";
import axios from "axios";
// import "./album.css";
const baseURL = "http://localhost:6000/api/v1/faunas";
const Album = ({ value }) => {
  // const num = [1,2,3,4,5,6,7,8,9]
  const [apiv, setApiv] = useState();
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setApiv(response.data);
    });
  }, []);
  //console.log(value)
  if (!apiv) return null;
  if (apiv.imageUrl) return 11;
  return (
    <>
      <div className="container-album">
        {apiv.data
          .filter((prop) => String(prop.faunas.category) === String(value))
          .map((i) => (
            <Card
              key={i._id}
              title={i.name}
              subtitle={i.scientificname}
              image={i.image}
              bordercolor={i.iucntype}
            />
          ))}
      </div>
    </>
  );
};
//title, subtitle, bordercolor,image
export default Album;
