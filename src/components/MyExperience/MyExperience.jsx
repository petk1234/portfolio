// import MyProject from "../myProject/MyProject";
import styles from "../myProjects/myProjects.module.scss";

export default function MyProjects() {
  // const projectsNames = ["gallery", "filmoteka", "phonebook"];
  return (
    <section id="experience" className={styles.projectsSection}>
      <h1>My experience</h1>
      <ul className={styles.projects}>
        <li>
          <h3>Data exchange platform (at Teamvoy, September 2021 - July 2022)</h3>
          <h4>Role: Front End developer</h4>

          <h4>Technologies: EmberJS, ReactJS, Material UI, TailwindCSS, Gitlab, Git, Chart.js.</h4>
          <h4>Responsibilities: redesign of the site from Ember.js to React.js.</h4>
        </li>
        <li>
          <h3>Trading platform (at Teamvoy, August 2022 - nowadays)</h3>
          <h4>Role: Front End developer</h4>
          <h4>
            Technologies: Typescript, ReactJS, Redux, React Query, React Table, Moment.js, Styled
            components, Gitlab, Git, Jest, React testing library.
          </h4>
          <h4>
            Responsibilities: support of the existing web-application, providing new features.
          </h4>
        </li>
      </ul>
    </section>
  );
}
