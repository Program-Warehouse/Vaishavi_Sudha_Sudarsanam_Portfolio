// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Vaishavi",
  middleName: "Sudha",
  lastName: "Sudarsanam",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/vaishu1199",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/vaishnavi.sudha.79/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/vaishu_1199/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vaishnavi-sudha",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/VaishnaviSudha",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "I am Vaishnavi Sudha, a tech savvy undergrad from computer science department. I like to describe myself as a bold, responsible and fun loving woman. I am a person with good heart and good head. I am fond of drawing, photography and virtualizing OS. I am also a team player. I have organized college fests and a chairperson in cloud computing club of our college. I do like user stories because I am an empathetic listener. I also possess entrepreneurial skills.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "vaishu1199", 
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C", value: 85 },
    { name: "Oops concepts", value: 70 },
    { name: "Dbms", value: 70 },
    { name: "Linux", value: 50 },
    { name: "Software installation and trouble shooting", value: 65 },
    { name: "Photoshop", value: 49 },
  ],
  softSkills: [
    { name: "Reliability", value: 55 },
    { name: "Good listener and empathetic communicator.", value: 68 },
    { name: "Innovative", value: 60 },
    { name: "Team player", value: 75 },
    { name: "Work ethic", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am a distinctive person with willingness to stand apart from the crowd. I seek new challenges while looking for creative solutions to a given problem. I want to leverage my technical skills and innovative intellect in an organization and upgrade my future. I also believe in character, values, vision, and action. I strongly feel that this virtue will take me ahead in life and vocation. ",
  email: "vaishnavivs1124@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
