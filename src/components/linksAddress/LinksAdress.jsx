import gps from "../../assets/img/gps.svg";
import media from "../../assets/img/media.svg";
import sendEmail from "../../assets/img/sendEmail.svg";

const LinksAdress = () => {
  return (
    <>
      <div className="d-flex flex-column mb-5">
        <p className="text-white fs-6">Casa Matriz</p>
        <a href="#" className="text-white my-1">
          <img src={gps} alt="gps" className="me-2" />
          Alfredo Barros Errázuriz 1900, Providencia, Región Metropolitana
        </a>
        <a href="#" className="text-white my-1">
          <img src={media} alt="gps" className="me-2" />
          (+56) 9 7650 9114
        </a>
        <a href="#" className="text-white my-1">
          <img src={sendEmail} alt="gps" className="me-2" />
          contacto@constructioncompany.com
        </a>
      </div>
      <div className="d-flex flex-column">
        <p className="text-white fs-6">Concepción</p>
        <a href="#" className="text-white my-1">
          <img src={gps} alt="gps" className="me-2" />
          Calle A 809 Brisa del Sol, Concepción, Bío Bío Concepción, Chile
        </a>
        <a href="#" className="text-white my-1">
          <img src={media} alt="gps" className="me-2" />
          (+56) 41 210 9500
        </a>
        <a href="#" className="text-white my-1">
          <img src={sendEmail} alt="gps" className="me-2" />
          contacto@constructioncompany.com
        </a>
      </div>
    </>
  );
};

export default LinksAdress;
