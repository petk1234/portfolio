import MyProject from "../myProject/MyProject";
import styles from "../myProjects/myProjects.module.scss";

export default function MyProjects() {
  const projectsNames = ["gallery", "filmoteka", "phonebook"];
  return (
    <section id="experience" className={styles.projectsSection}>
      <h1>My experience</h1>
      <ul className={styles.projects}>
        <li>
          <h3>
            Data exchange platform for BCGateways (at Teamvoy,
            September 2021 - July 2022)
          </h3>
          <h4>Role: Front End developer</h4>

          <h4>
            Technologies: EmberJS, ReactJS, Material UI, TailwindCSS,
            Gitlab, Git
          </h4>
          <p>
            BCGateways (Iress Blockchain now) is blockchain-enabled
            fund data distribution platform that lower the risks,
            costs and complexities associated with the sharing of
            data.
          </p>
        </li>
        <li>
          <h3>
            Nasdaq Trade Surveillance (at Teamvoy, August 2022 -
            nowadays)
          </h3>
          <h4>Role: Front End developer</h4>
          <h4>
            Technologies: Typescript, ReactJS, Redux, Styled
            components, Gitlab, Git, Jest, React testing library
          </h4>
          <p>
            Nasdaq Trade Surveillance is a platform supported by rich
            functionality that offers intuitive visualizations,
            preparation for regulations, and the ability to track
            misdeeds across a variety of markets and asset classes. It
            provides markets and regulators with a robust platform to
            detect potentially abusive trading behaviors.
          </p>
        </li>
      </ul>
    </section>
  );
}
