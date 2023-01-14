import MobileFooter from "../../components/footer/mobileFooter/MobileFooter";
import DesktopFooter from "./desktopFooter/DesktopFooter";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
};

export default Footer;
