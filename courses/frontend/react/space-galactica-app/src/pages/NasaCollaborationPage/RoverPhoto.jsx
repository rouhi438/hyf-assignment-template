import styles from "./NasaCollaborationPage.module.css";

const RoverPhoto = ({ src, date, roverName }) => (
  <div className={styles.roverCard}>
    <p>Date: {date}</p>
    <p>Rover: {roverName}</p>
    <img src={src} alt="Mars rover" className={styles.nasaPicOfTheDayImg} />
  </div>
);

export default RoverPhoto;
