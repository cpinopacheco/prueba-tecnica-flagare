import Informativo from "../../informativo/Informativo";
import LinksAdress from "../../linksAddress/LinksAdress";
import LinkProjects from "../../linksProjects/LinkProjects";
import LinksServices from "../../linksServices/LinksServices";
import Map from "../../map/Map";
import SocialMedia from "../../socialMedia/SocialMedia";
import styles from "./DesktopFooter.module.css";

const DesktopFooter = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.linksSection}>
        <p className="text-white fs-4">Servicios</p>
        <LinksServices />
        <p className="text-white fs-4 mt-lg-4">Proyectos</p>
        <LinkProjects />
      </div>
      <div className={styles.linksSection}>
        <p className="text-white fs-4">Informativo</p>
        <Informativo />
        <SocialMedia />
      </div>
      <div className={styles.linksSection}>
        <p className="text-white fs-4">Cómo llegar</p>
        <LinksAdress />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default DesktopFooter;
