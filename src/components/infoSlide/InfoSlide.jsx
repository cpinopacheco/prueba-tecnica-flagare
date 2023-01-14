import styles from "./InfoSlide.module.css";

const InfoSlide = ({ title, subtitle, description }) => {
  return (
    <div className={styles.containerInfoSlide}>
      <h5 className="my-3">{title}</h5>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <div>
        <a href="#" className="btn btn-primary text-white text-uppercase">
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default InfoSlide;
