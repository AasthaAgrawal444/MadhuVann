import styled from "./app.module.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { cardData } from "./utils";

const App = () => {
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
  );
};

export default App;
