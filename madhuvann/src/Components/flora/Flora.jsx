import React from 'react'
import { cardData } from '../../utils'
import Navbar from '../navbar/Navbar'
import Card from '../card/Card'
import styled from "./flora.module.css"

const Flora = () => {
  return (
    <div className={styled.wrapper}>
    <Navbar />
    <div className={styled.card_container}>
      <div className={styled.container}>
        {cardData.map((item) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            borderColor={item.borderColor}
            img={item.img}
            key={item.id}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Flora