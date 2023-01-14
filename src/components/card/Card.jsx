import styles from "./Card.module.css";

const Card = ({ image, title }) => {
  return (
    <div className="col-12 col-md-6 col-xl-3 p-lg-4 p-xxl-5">
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h5 className="fw-bolder my-xl-1">{title}</h5>
          <p className={`${styles.cardTextMobile} d-xl-none text-start`}>
            subhead
          </p>
          <p
            className={`${styles.cardTextDesktop} d-none d-xl-block my-xl-4 text-start`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eum
            itaque debitis similique
          </p>
          <a
            href="#"
            className="btn btn-primary d-none d-xl-block text-white ms-auto"
          >
            Button
          </a>
        </div>

        <img src={image} className={styles.cardImage} alt={`img-${title}`} />
      </div>
    </div>
  );
};

export default Card;
