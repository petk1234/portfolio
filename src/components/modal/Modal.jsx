import { useState } from "react";
import { useEffect } from "react";
import styles from "./modal.module.scss";
const gettingSentence = (parsedObject) => {
  let wholeText = parsedObject.projectInfo;
  const dotsIndexes = [0];
  for (let i in wholeText) {
    wholeText[i] === "." && dotsIndexes.push(Number(i));
  }
  const sentences = [];
  for (let i = 0; i < dotsIndexes.length - 1; i++) {
    sentences.push(
      wholeText.substring(dotsIndexes[i] + 1, dotsIndexes[i + 1] + 1)
    );
  }
  return sentences;
};
export default function Modal({ projectInfo, setModal }) {
  let [sentences, setSentences] = useState([]);
  const parsedObject = JSON.parse(projectInfo);
  useEffect(() => {
    setSentences(gettingSentence(parsedObject));
  }, []);
  return (
    <>
      <div className={styles.div}>
        <div className={styles.modalContainer}>
          <div className={styles.mainInfo}>
            <h1 className={styles.title}>
              {parsedObject.projectName.toUpperCase()}
            </h1>
            <a
              className={styles.link}
              href={parsedObject.projectLink}
              target="_blank">
              <button className={styles.url}>View site</button>
            </a>
            <a
              className={styles.link}
              href={parsedObject.githubLink}
              target="_blank">
              <button className={styles.github}>GitHub</button>
            </a>
          </div>
          <h3>General information</h3>
          {sentences.map((sentence, i) => (
            <p key={i}>{sentence}</p>
          ))}
          <div>
            <p>In the project I used such technologies, as:</p>
            <ul style={{ padding: "15px" }}>
              {parsedObject.projectTechnologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
          {/* <button
              className={styles.closeButton}
              onClick={() => setModal(false)}
            ></button> */}
        </div>
      </div>
      <div
        className={styles.layout}
        onClick={() => setModal(false)}></div>
    </>
  );
}
