import styles from "./AboutUsPage.module.css";

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
      <div className={styles.partnerGrid}>
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

export default OurPartners;
