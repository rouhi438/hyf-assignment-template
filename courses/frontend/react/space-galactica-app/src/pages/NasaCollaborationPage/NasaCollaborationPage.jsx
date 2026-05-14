import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";
import RoverPhoto from "./RoverPhoto";

const API_KEY = "fAUaF9bf5GsaS4xhW7G6rtpxSyzA4Y4cYFtPRaka";
console.log(API_KEY);

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-06-03&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    fetch(NASA_URLs.astronomyPicOfTheDay)
      .then((res) => res.json())
      .then((data) => {
        // Fix CORS issues by proxying media URLs
        if (data.url && data.url.includes("apod.nasa.gov")) {
          data.url = data.url.replace("https://apod.nasa.gov", "/apod-media");
        }
        setDailyImg(data);
      })
      .catch((err) => console.error("APOD failed:", err));

    fetch(NASA_URLs.marsRoverPhoto)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => setRoverPhoto(data))
      .catch((err) => {
        console.error("Rover failed:", err.message);
      });
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {dailyImg?.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              {dailyImg.media_type === "video" ? (
                <iframe
                  src={dailyImg.url}
                  title={dailyImg.title}
                  width="100%"
                  height="400"
                  allowFullScreen
                />
              ) : (
                <img
                  src={dailyImg.url}
                  alt={dailyImg.title}
                  className={styles.nasaPicOfTheDayImg}
                />
              )}
              <p className={styles.cardDescription}>
                {dailyImg.explanation}
              </p>
            </>
          ) : (
            <p>Loading astronomy picture...</p>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.roverGrid}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
