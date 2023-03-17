import styles from "./aboutMe.module.scss";
import myPhoto from "../../myPhoto.jpg";
export default function AboutMe() {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.aboutMeContainer}>
        <h1>About me</h1>
        <div className={styles.infoContainer}>
          <div className={styles.generalInfo}>
            <img src={myPhoto} className={styles.img} />
            <div>
              <p className={styles.text}>
                Hello, my name is Alexandr Petkun. I am junior front-end
                developer.
              </p>
              <p className={styles.text}>
                I have no bussiness-working experience yet that's why I`m
                interested in the opportunity to work in an experienced
                development team.
              </p>
              <p className={styles.text}>
                I am prepared to invest a lot of time in developing hard skills
                and gaining experience.
              </p>
            </div>
          </div>
          <div className={styles.skillsInfo}>
            <h1 className={styles.skillsTitle}>Skills</h1>
            <p className={styles.text}>
              I am in touch with basic constructures in JS and React.
            </p>
            <p className={styles.text}>
              For the last 6 months, I have learned HTML, CSS, SASS, JavaScript
              and React.js.
            </p>
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>Css: </h4>
                <p style={{ display: "inline" }}>
                  flexbox, scss, responsive/adaptive design, mobile-first
                </p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>Js: </h4>
                <p style={{ display: "inline" }}>
                  basics, DOM, REST API, Asynchronous JavaScript
                </p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>React: </h4>
                <p style={{ display: "inline" }}>
                  basics, React Router, React animation, Redux, Redux toolkit,
                  Asynchronous Redux
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
