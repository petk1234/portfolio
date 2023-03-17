import styles from "./aboutMe.module.scss";
import myPhoto from "../../myPhoto.jpg";
import myUpdatedPhoto2 from "../../MyUpdatedPhoto2.jpg";
export default function AboutMe() {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.aboutMeContainer}>
        <h1>About me</h1>
        <div className={styles.infoContainer}>
          <div className={styles.generalInfo}>
            <img src={myUpdatedPhoto2} className={styles.img} />
            <div>
              <p className={styles.text}>Hello, my name is Oleksandr Petkun. I am a front-end developer.</p>
              <p className={styles.text}>
                I am prepared to invest a lot of time in developing hard/soft skills and gaining experience.
              </p>
            </div>
          </div>
          <div className={styles.skillsInfo}>
            <h1 className={styles.skillsTitle}>Skills</h1>
            <p className={styles.text}>I am in touch with constructures in JS/TS and React.</p>
            <p className={styles.text}>
              I have such skills as HTML, CSS, SASS, Tailwind CSS, MUI, Styled Components, JavaScript, TypeScript,
              React.js, Redux, Redux Toolkit, Git and Test-driven development.
            </p>
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>Css: </h4>
                <p style={{ display: "inline" }}>flexbox, grid, scss, responsive/adaptive design, mobile-first</p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>JS: </h4>
                <p style={{ display: "inline" }}>basics, DOM, REST API, Asynchronous JavaScript</p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>React: </h4>
                <p style={{ display: "inline" }}>
                  basics, React Router, React animation, Redux, Redux toolkit, Asynchronous Redux
                </p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>TS: </h4>
                <p style={{ display: "inline" }}>basics, interfaces, enums, generic types</p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ display: "inline" }}>Test-driven development: </h4>
                <p style={{ display: "inline" }}>Jest, React testing library</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
