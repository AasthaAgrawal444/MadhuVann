import "./card.css";

const Card = ({ title, borderColor, subtitle, img }) => {
  return (
    <div className={`card_wrapper card-shadow`}>
      <div className={"card_box1"}>
        <div
          style={{ borderColor: borderColor }}
          className={"card_img_cont"}
        >
          <img src={img} alt="" className="rounded-full overflow-hidden " />
        </div>
      </div>
      <div className={"card_box2"}>
        <span className={"title"}>{title}</span>
        <span className={"subtitle"}>{subtitle}</span>
      </div>
    </div>
  );
};

export default Card;
