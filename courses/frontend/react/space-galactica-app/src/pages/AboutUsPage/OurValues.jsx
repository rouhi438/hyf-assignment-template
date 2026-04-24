import styles from "./AboutUsPage.module.css";

const OurValues = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Values" section.
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  const ourValues = [
    {
      title: "Exploration",
      description:
        "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
    },
    {
      title: "Innovation",
      description:
        "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure travelers experience the most advanced and secure journeys.",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to making space exploration sustainable for future generations. Our missions minimize environmental impact and foster responsibility towards our universe.",
    },
    {
      title: "Community",
      description:
        "We believe in the power of collective exploration. Our journeys are about building a community of space enthusiasts who share a passion for the stars.",
    },
  ];
  return (
    <section className={styles.valuesGrid}>
      {ourValues.map((value) => (
        <div key={value.title} className={styles.valueCard}>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </section>
  );
};

export default OurValues;
