import img from "./CVTemplates/ResumeTrial22/assets/img/Scanned photo.jpg";
export const studentData = {
  student: {
    profilePicture: img,
    firstName: "Vivek",
    lastName: "Modi",
    dateOfBirth: new Date("11-04-1997"),
    gender: "Male",

    email: "vivekmodi1997@gmail.com",
    contactNumber: "9879197093",

    city: "Ahmedabad",
    state: "Gujarat",

    objective:
      "The candidate with MCA graduate and interested in Web development and data scientist and data analyst role.",
  },

  socialNetwork: [
    {
      id: "1",
      networkName: "Github",
      profileLink: "https://github.com/modivivek/",
    },
  ],

  workExperience: [
    {
      id: "1",
      companyName: "FinePrint legal",
      location: "Ahmedabad",
      position: "Web developer intern",
      startMonth: "jan",
      startYear: "2022",
      currentlyWorking: true,
      description:
        "Working as web development intern as react js and other front-end technologies like CSS,javascript",
    },
    {
      id: "2",
      companyName: "Manhatten group ",
      location: "Ahmedabad",
      position: "Web developer intern",
      startMonth: "Aug",
      startYear: "2018",
      endMonth: "Dec",
      endYear: "2019",
      currentlyWorking: false,
      description:
        "Worked as web development intern and learnt  front-end technologies like HTML,CSS,javascript",
    },
  ],

  education: [
    {
      id: "1",
      instituteName: "LD ARTS study center",
      degree: "MCA",
      university: "IGNOU",
      branch: "CS",
      modeOfAssessment: "offline",
      finalScore: "First class",

      startMonth: "june",
      startYear: "2017",
      endMonth: "September",
      endYear: "2021",
      city: "Ahmedabad",
      state: "Gujarat",
      currentlyWorking: true,
    },
    {
      id: "2",
      instituteName: "Shree Chimanbhai Patel Institute",
      degree: "BCA",
      university: "Gujarat University",
      branch: "CS",
      modeOfAssessment: "offline",
      finalScore: "First class CGPA(6)",

      startMonth: "june",
      startYear: "2014",
      endMonth: "June",
      endYear: "2017",
      city: "Ahmedabad",
      state: "Gujarat",
      currentlyWorking: false,
    },
  ],

  project: [
    {
      id: "1",
      title: "Covid 19 Vaccination Analysis",
      link: "https://colab.research.google.com/drive/1EjV4pmrfSnlGcMvhXmKLFMG1oMjpIe6g?usp=sharing",
      description:
        "Visulization of vaccinated people across the world with python matplotlib and prediction of vaccinated people using linear regression with python sklearn library.Data preprocessing like data transformation like removing null values or replacing it with mean or median, data scaling between 0 and 1 using MinMaxScalar,pandas Dataframe and numpy libraries.",

      /*startMonth: String!
            startYear: String!
            endMonth: String
            endYear : String*/

      currentlyWorking: false,
    },
    {
      id: "2",
      title: "React demo",
      description:
        "React web page with components like header,navigation,title,cards,footer etc.",
      currentlyWorking: false,
    },
    {
      id: "3",
      title: "Student CV Builder",
      description:
        "The CV builder template application using react-pdf library.",
      currentlyWorking: true,
    },
  ],

  language: [
    {
      id: "1",
      title: "English",
      proficiency: "Medium",
    },
    {
      id: "2",
      title: "Gujarati",
      proficiency: "Medium",
    },
    {
      id: "3",
      title: "Hindi",
      proficiency: "Medium",
    },
  ],

  award: [
    {
      id: "1",
      title: "SQL query practice",
      issuer: "hacker rank coding",
      description: "The query based on Group by caluse and join queries",
    },
  ],

  certification: [
    {
      id: "1",
      title: "What is Data Science",
      issuer: "Coursera IBM",
      dateOfIssue: "June 2021",
      description:
        "Basic introduction of Data science and its need and future scope about its scope",
    },
  ],
  skill: [
    {
      id: "1",
      title: "HTML",
      competence: "2.5/5",
    },
    {
      id: "2",
      title: "CSS",
      competence: "2.5/5",
    },
    {
      id: "3",
      title: "javascript",
      competence: "2.5/5",
    },
    {
      id: "4",
      title: "React js",
      competence: "2.5/5",
    },
    {
      id: "5",
      title: "python",
      competence: "2.5/5",
    },
  ],

  hobby: [
    {
      id: "1",
      title: "Reading,Programing",
    },
  ],
};
