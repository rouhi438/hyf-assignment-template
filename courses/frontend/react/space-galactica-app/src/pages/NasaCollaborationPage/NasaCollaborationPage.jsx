import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";
import RoverPhoto from "./RoverPhoto";

const API_KEY = "fAUaF9bf5GsaS4xhW7G6rtpxSyzA4Y4cYFtPRaka";
console.log(API_KEY);

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-06-03&api_key=${API_KEY}`,
  marsRoverSearch:
    "https://images-api.nasa.gov/search?q=curiosity&media_type=image",
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({ photos: [] });
  const [roverError, setRoverError] = useState(null);

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

    const loadRoverPhotos = async () => {
      try {
        const res = await fetch(NASA_URLs.marsRoverPhoto);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("ROVER_PHOTOS_404");
          }
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        setRoverPhoto(data || { photos: [] });
      } catch (err) {
        console.error("Rover failed:", err.message || err);

        if (err.message === "ROVER_PHOTOS_404") {
          try {
            const fallbackRes = await fetch(NASA_URLs.marsRoverSearch);
            if (!fallbackRes.ok) {
              throw new Error(
                `Fallback HTTP ${fallbackRes.status}: ${fallbackRes.statusText}`,
              );
            }

            const fallbackData = await fallbackRes.json();
            const fallbackPhotos =
              fallbackData.collection?.items?.slice(0, 8).map((item, index) => {
                const itemData = item.data?.[0] || {};
                const itemLink =
                  item.links?.find((link) => link.render === "image") || {};

                return {
                  id: itemData.nasa_id || `fallback-${index}`,
                  img_src: itemLink.href,
                  earth_date: itemData.date_created?.slice(0, 10) || "unknown",
                  rover: { name: itemData.photographer || "NASA" },
                };
              }) || [];

            if (fallbackPhotos.length > 0) {
              setRoverPhoto({ photos: fallbackPhotos });
              return;
            }

            throw new Error("No fallback rover images available.");
          } catch (fallbackErr) {
            console.error(
              "Rover fallback failed:",
              fallbackErr.message || fallbackErr,
            );
            setRoverError(
              fallbackErr.message ||
                "Unable to load rover photos via fallback.",
            );
            return;
          }
        }

        setRoverError(err.message || "Unable to load rover photos.");
      }
    };

    loadRoverPhotos();
  }, []);

  return (
    <div className={styles.fullBGpicture}>
      <main className={styles.mainContent}>
        <h1>Collaboration with NASA</h1>
        <section className={styles.card}>
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
              <p className={styles.cardDescription}>{dailyImg.explanation}</p>
            </>
          ) : (
            <p>Loading astronomy picture...</p>
          )}
        </section>
        <section className={styles.card}>
          <h2>Rover Photos</h2>
          {roverError ? (
            <p className={styles.cardDescription}>
              Error loading rover photos: {roverError}
            </p>
          ) : roverPhoto?.photos?.length ? (
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
