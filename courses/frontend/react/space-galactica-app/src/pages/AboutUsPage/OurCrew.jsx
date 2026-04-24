import styles from "./AboutUsPage.module.css";
const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Crew section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/crew.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  const crewMembers = [
    {
      name: "Captain Sarah Vega",
      role: "Captain",
      description:
        "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    },
    {
      name: "Dr. Leo Redding",
      role: "Chief Astrophysicist",
      description:
        "A renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    },
    {
      name: "Chief Engineer Hana Lee",
      role: "Chief Engineer",
      description:
        "Responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures travelers are always in safe hands.",
    },
    {
      name: "Mission Specialist Alex Santos",
      role: "Mission Specialist",
      description:
        "Ensures every aspect of the journey runs smoothly. With a background in science and adventure tourism, Alex is the perfect guide.",
    },
    {
      name: "Crew Member Maya Patel",
      role: "Crew Member",
      description:
        "Brings technical skills and customer service experience to make sure every traveler has an unforgettable experience.",
    },
  ];
  return (
    <section className={styles.crewSection}>
      <div className={styles.content}>
        <p>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
        <ul>
          {crewMembers.map((member) => (
            <li key={member.name}>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default OurCrew;
