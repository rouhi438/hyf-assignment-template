import styles from "./NasaCollaborationPage.module.css";

const RoverPhoto = ({ src, date, roverName }) => {
  const imageSrc = src?.replace(/^http:/, "https:") || "";

  return (
    <div className={styles.roverCard}>
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
      <img
        src={imageSrc}
        alt={`${roverName} rover on ${date}`}
        className={styles.nasaPicOfTheDayImg}
      />
    </div>
  );
};

export default RoverPhoto;
