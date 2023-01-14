import styles from "./SocialMedia.module.css";
import facebookIcon from "../../assets/img/iconSocialMedia/facebookIcon.svg";
import instagramIcon from "../../assets/img/iconSocialMedia/instagramIcon.svg";
import twitterIcon from "../../assets/img/iconSocialMedia/twitterIcon.svg";
import youtubeIcon from "../../assets/img/iconSocialMedia/youtubeIcon.svg";

const SocialMedia = () => {
  return (
    <div className={styles.containerSocialMedia}>
      <a href="#">
        <img src={facebookIcon} alt="facebookIcon" />
      </a>
      <a href="#">
        <img src={instagramIcon} alt="instagramIcon" />
      </a>
      <a href="#">
        <img src={twitterIcon} alt="twitterIcon" />
      </a>
      <a href="#">
        <img src={youtubeIcon} alt="youtubeIcon" />
      </a>
    </div>
  );
};

export default SocialMedia;
