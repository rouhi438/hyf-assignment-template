import styles from "./AboutUsPage.module.css";
const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Crew section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/crew.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
    <section className={styles.crewSection}>
      <div className={styles.content}>
        <p>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
        <ul>
          <li>
            <img src="/public/crew/image-anousheh-ansari.png" alt="" />
            <strong>- Captain Sarah Vega: </strong> <br />A former NASA
            astronaut with over 15 years of experience, Captain Vega leads our
            missions with unparalleled expertise and a passion for space
            exploration.
          </li>
          <li>
            <img src="/public/crew/image-douglas-hurley.png" alt="" />
            <strong>- Dr. Leo Redding: </strong> <br />
            Our chief astrophysicist, Dr. Redding, is a renowned scientist who
            has contributed to major space discoveries. He ensures that every
            journey is as educational as it is exhilarating.
          </li>
          <li>
            <img src="/public/crew/image-mark-shuttleworth.png" alt="" />
            <strong>- Chief Engineer Hana Lee: </strong>
            <br /> With her extensive background in aerospace engineering, Hana
            Lee is responsible for the state-of-the-art technology that powers
            our spacecraft. Her innovation ensures that our travelers are always
            in safe hands.
          </li>
          <li>
            <img src="/public/crew/image-victor-glover.png" alt="" />
            <strong>- Mission Specialist Alex Santos: </strong>
            <br /> As a mission specialist, Alex’s job is to ensure that every
            aspect of the journey runs smoothly. With a background in both
            science and adventure tourism, Alex is the perfect guide for our
            space travelers.
          </li>
          <li>
            <img src="/public/crew/maya-patel.jpeg" alt="" />
            <strong>- Crew Member Maya Patel:</strong> <br />
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She’s always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </li>
        </ul>
      </div>
    </section>
  );
};
export default OurCrew;
