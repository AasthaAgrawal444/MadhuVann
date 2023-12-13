import styles from "./card.module.css";

const Card = ({ title, borderColor, subtitle, img }) => {
  return (
    <div className={`${styles.card_wrapper} card-shadow`}>
      <div className={styles.card_box1}>
        <div
          style={{ borderColor: borderColor }}
          className={styles.card_img_cont}
        >
          <img src={img} alt="" className="rounded-full overflow-hidden " />
        </div>
      </div>
      <div className={styles.card_box2}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
};

export default Card;
