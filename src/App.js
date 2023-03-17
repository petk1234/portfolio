import Header from "./components/header/Header.jsx";
import AboutMe from "./components/aboutMe/AboutMe.jsx";
import MyProjects from "./components/myProjects/MyProjects.jsx";
import MyExperience from "./components/MyExperience/MyExperience.jsx";
import SendRequest from "./components/sendRequest/SendRequest.jsx";
import styles from "./app.module.scss";
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <AboutMe />
      <MyExperience />
      <MyProjects />
      <SendRequest />
    </div>
  );
}

export default App;
