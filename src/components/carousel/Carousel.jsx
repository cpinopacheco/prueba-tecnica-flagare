import slide1 from "../../assets/img/img-slider/slide-1.jpg";
import slide2 from "../../assets/img/img-slider/slide-2.jpg";
import slide3 from "../../assets/img/img-slider/slide-3.jpg";
import InfoSlide from "../infoSlide/InfoSlide";
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <InfoSlide
            title="Grandes proyectos del futuro"
            subtitle="Arquitectura contrucción y mobiliario"
            description="Conoce los trabajos que hemos realizado de diseño, construcción y
        mobiliario para los rubros: Corporativos y Habitacionales."
          />
          <img src={slide1} className={styles.imageSlide} alt="slide-1" />
        </div>
        <div className="carousel-item">
          <InfoSlide
            title="Proyección y calidad de vida"
            subtitle="Hogares con conectividad y sello propio"
            description="Conoce los trabajos que hemos realizado de diseño, construcción y mobiliario para los rubros: Corporativos y Habitacionales"
          />
          <img src={slide2} className={styles.imageSlide} alt="slide-2" />
        </div>
        <div className="carousel-item">
          <InfoSlide
            title="¡Vive el futuro hoy"
            subtitle="Smart house con la última tecnología"
            description="Conoce los trabajos que hemos realizado de diseño, construcción y mobiliario para los rubros: Corporativos y Habitacionales"
          />
          <img src={slide3} className={styles.imageSlide} alt="slide-3" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
