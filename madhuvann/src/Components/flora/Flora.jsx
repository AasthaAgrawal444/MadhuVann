import React from 'react'
import { cardData } from '../../utils'
import Navbar from '../navbar/navbar'
import Card from '../card/Card'
import "./flora.css"

const Flora = () => {
  return (
    <div >
    <Navbar />
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
    {/* <div className={styled.wrapper}>
    <div className={styled.card_container}>
      <div className={styled.container}> */}
        {cardData.map((item) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            borderColor={item.borderColor}
            img={item.img}
            key={item.id}
          />
        ))}
        </div></div>
//       </div>
//     </div>
//   </div>
  )
}

export default Flora