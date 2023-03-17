import galleryImg from "./images/galleryCopy.png";
import filmotekaImg from "./images/filmotekaCopy.png";
import phonebookImg from "./images/phonebookCopy.png";
export default [
  {
    projectName: "gallery",
    projectInfo:
      " This project is a photo/video gallery where the user can search for the photos/videos he needs and see basic information when hovering over them.The project was written in order to practice writing code using class components.Thanks to this project, I improved my knowledge in the fundamental principles of React and in the design of the interface using scss modules.",
    projectLink: "https://sidm-gallery.netlify.app/",
    githubLink: "https://github.com/petk1234/gallery",
    projectTechnologies: ["HTML", "Scss", "React", "Webpack"],
    projectImg: galleryImg,
  },
  {
    projectName: "filmoteka",
    projectInfo:
      " This project is a site where the user can view a list of popular movies or TV shows.In addition, it can filter movies/TV shows and see more detailed information about each of them on a separate page.The project was written with the aim of improving practical knowledge in writing more complex logic.Thanks to this project, I improved my knowledge in React Router and React Context.Using React Context helped get rid of prop drilling.In addition, I created quite a large number of custom hooks with a reusable logic.So that the entire code was optimized.Compared to Gallery-project, the logic in this project is more complex, there are various functions that make manipulations in objects, arrays and strings.",
    projectLink: "https://iwk-filmoteka.netlify.app/",
    githubLink: "https://github.com/petk1234/goit-react-hw-04-movies-hooks",
    projectTechnologies: [
      "HTML",
      "Scss",
      "React",
      "React Router",
      "React Context",
      "React hooks",
      "Webpack",
    ],
    projectImg: filmotekaImg,
  },
  {
    projectName: "phonebook",
    projectInfo:
      " This project is an application with authorization that helps to add and manage your contacts.The project was written with the purpose of practical use of React Redux.Thanks to Redux, writing and controlling the application has become much easier and faster.In addition, I used Formik to validate the forms, which made the process much easier and comfortable.",
    projectLink: "https://kiq-phonebook.netlify.app/ ",
    githubLink: "https://github.com/petk1234/goit-react-hw-08-phonebook-hooks",
    projectTechnologies: [
      "HTML",
      "Scss",
      "React",
      "React Router",
      "React Context",
      "React hooks",
      "React Redux",
      "Webpack",
    ],
    projectImg: phonebookImg,
  },
];
