import styles from "./aboutMe.module.scss";
import myUpdatedPhoto2 from "../../MyUpdatedPhoto2.jpg";
export default function AboutMe() {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.aboutMeContainer}>
        <h1>About me</h1>
        <div className={styles.infoContainer}>
          <div className={styles.generalInfo}>
            <img alt="" src={myUpdatedPhoto2} className={styles.img} />
            <div>
              <p className={styles.text}>
                Hello, my name is Oleksandr Petkun. I am a front-end developer.
              </p>
              <p className={styles.text}>
                I am prepared to invest a lot of time in developing hard/soft skills and gaining
                experience.
              </p>
            </div>
          </div>
          <div className={styles.skillsInfo}>
            <h1 className={styles.skillsTitle}>Skills</h1>
            <p className={styles.text}>I am in touch with constructures in JS/TS and React.</p>
            <p className={styles.text}>
              During my commercial experience, my technical duties included:
            </p>
            <ul>
              <li style={{ marginBottom: "20px" }}>
                forms (inputs, selects, file uploaders etc.);
              </li>
              <li style={{ marginBottom: "20px" }}>
                modals with different functionality (sending requests to the server, displaying
                various data from the store);
              </li>
              <li style={{ marginBottom: "20px" }}>
                widgets/popovers/banners on different pages with information about selected item(s);
              </li>
              <li style={{ marginBottom: "20px" }}>
                tables/lists of items, with pagination, filters, selection/deletion of the specific
                item(s);
              </li>
              <li style={{ marginBottom: "20px" }}>
                adding new columns or column features to the table;
              </li>
              <li style={{ marginBottom: "20px" }}>
                work with displaying different formats of date/numbers on UI by user choice;
              </li>
              <li style={{ marginBottom: "20px" }}>charts;</li>
              <li style={{ marginBottom: "20px" }}>test-driven development.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
