// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

const OurValues = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Values" section.
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
    <section>
      <div>
        <h3>Exploration:</h3>
        <p>
          We are driven by a deep-seated desire to explore the unknown. We
          believe that the pursuit of discovery is at the heart of human nature,
          and we are committed to pushing the boundaries of what is possible.
        </p>
      </div>
      <div>
        <h3>Innovation: </h3>
        <p>
          At Galactica, we prioritize cutting-edge technology and innovation. We
          are constantly evolving our spacecraft, safety protocols, and services
          to ensure that our travelers experience the most advanced and secure
          space journeys available.
        </p>
      </div>
      <div>
        <h3>Sustainability:</h3>
        <p>
          We are committed to making space exploration sustainable for future
          generations. Our space missions are designed to minimize environmental
          impact, both on Earth and in space, and to foster a spirit of
          responsibility towards our universe.
        </p>
      </div>

      <div>
        <h3>Community: </h3>
        <p>
          We believe in the power of collective exploration. Our journeys are
          not just about reaching new destinations; they are about building a
          community of space enthusiasts who share a passion for the stars.
        </p>
      </div>
    </section>
  );
};

const OurCrew = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Crew section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/crew.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
    <section>
      <div>
        <p>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
        <ul>
          <li>
            <strong>Captain Sarah Vega: </strong>A former NASA astronaut with
            over 15 years of experience, Captain Vega leads our missions with
            unparalleled expertise and a passion for space exploration.
          </li>
          <li>
            <strong>Dr. Leo Redding: </strong>Our chief astrophysicist, Dr.
            Redding, is a renowned scientist who has contributed to major space
            discoveries. He ensures that every journey is as educational as it
            is exhilarating.
          </li>
          <li>
            <strong>Chief Engineer Hana Lee: </strong> With her extensive
            background in aerospace engineering, Hana Lee is responsible for the
            state-of-the-art technology that powers our spacecraft. Her
            innovation ensures that our travelers are always in safe hands.
          </li>
          <li>
            <strong> Mission Specialist Alex Santos: </strong> As a mission
            specialist, Alex’s job is to ensure that every aspect of the journey
            runs smoothly. With a background in both science and adventure
            tourism, Alex is the perfect guide for our space travelers.
          </li>
          <li>
            <strong>Crew Member Maya Patel:</strong>Maya brings a unique blend
            of technical skills and customer service experience to the team.
            She’s always ready to assist with any needs and to make sure every
            traveler has an unforgettable experience.
          </li>
        </ul>
      </div>
      <img src="/crew/background-crew-desktop.jpg" alt="Our crew" />
    </section>
  );
};

const OurPartners = () => {
  // 🧑🏽‍🚀 Task - Week 1
  // Create the "Our Partners section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/business_partners.
  // Some inspiration ideas can be found in /data/inspiration_about_us.
  return (
    <section>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div>
        <img src="/business_partners/alphabet-logo.png" alt="Alphabet" />
        <img src="/business_partners/amazon_logo.png" alt="Amazon" />
        <img src="/business_partners/CBC_Logo_White.png" alt="CBC-logo" />
        <img
          src="/business_partners/Microsoft-Logo-white.png"
          alt="Microsoft"
        />
        <img src="/business_partners/nyu-logo.png" alt="Nyu-logo" />
        <img src="/business_partners/QueensLogo_white.png" alt="QueensLogo" />
        <img src="/business_partners/samsung-logo.png" alt="Samsung" />
        <img src="/business_partners/sodexo-logo.png" alt="Sodexo" />
      </div>
    </section>
  );
};

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section>
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section>
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
        {/* 🧑🏽‍🚀 Task - Week 1 */}
        {/* Use the "OurPartners" component here. */}
      </main>
    </div>
  );
};

export default Crew;
