import { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import MyTimeline from "./components/MyTimeline.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ContactMe.jsx";

// Test Milestones, should pull from a database
const milestones = [
  {
    key: 1,
    date: "August 2021",
    title: "Freshman Year",
    description:
      "Began my freshman year at UAlbany studying business administration working part time as a tech consultant at target.",
  },
  {
    key: 6,
    date: "January 2022",
    title: "Hello World",
    description:
      "Took my first programming course and learned to code in Java. Built a foundation in OOP and software design. Built my first project and discovered a passion for building software.",
  },
  {
    key: 2,
    date: "March 2022",
    title: "Experimenting with new technologies.",
    description:
      "Began self teaching myself solidity and learned how to write smart contracts. Deployed my first DAPP to a the goerli blockchain. Also learned the basics of HTML, CSS, and JavaScript in this stage.",
  },
  {
    key: 7,
    date: "August 2022",
    title: "Sophomore Year",
    description:
      "Transferred to Plattsburgh to pursue a degree in MIS with a minor in Computer Science. Took courses in system design, databases, and DSA. Built a strong technical foundation in computer science.",
  },
  {
    key: 3,
    date: "March 2023",
    title: "Landed my first internship!",
    description:
      "Landed my first internship with BSNB working in the IT department. In this role I worked hands on configuring computer networks, built dashboard for the ticketing system, and provided technical help desk support.",
  },
  {
    key: 4,
    date: "September 2023",
    title: "CCT Leadership",
    description:
      "Became deeply involved with the Center for Cybersecurity and Technology at PSU. Became a co-director where I worked hands on writing software for the organzation and led technical workshops for students.",
  },
  {
    key: 5,
    date: "November 2023",
    title: "Freelance Web Development",
    description:
      "I was determined to land a software development internship for the following summer. I spent all of my free time studying DSA, building projects, and upskilling. To get some professional experience, I worked on Fiverr as a freelancer building full stack websites for clients.",
  },
  {
    key: 8,
    date: "February 2024",
    title: "Software Development Internship!",
    description:
      "After hundreds of applications I landed a software development internship at Cantor Fitzgerald. This role required relocating to NYC for the Summer. I leveraged my background in computer networking and web development to build network automation tools with intuitive frontends to support our net ops and desktop support teams. My tools are used daily and are currently deployed in production.",
  },
  {
    key: 9,
    date: "August 2024",
    title: "Transitioning to FMX",
    description:
      "I was offered the oppurtunity to continue my internship on an e-trading team remotely for my senior year. I am currently working on building a real time web application with web sockets to manage and visualize the operations side of the exchange. I work with Kubernetes, JavaScript, and Python on a daily basis.",
  },
  {
    key: 10,
    date: "November 2024",
    title: "Building my skills",
    description:
      "I am spending my senior year working remotely for FMX, co directing the CCT, and completing the rest of my academic courses. In my free time, I am focusing my learning on enhancing my skills in full stack development.",
  }
];

const projects = [
  {
    key: 0,
    title: "Honeynet Distributed System",
    desc: "Network of multiple open source and custom honeypots sending logs to an ELK stack. Prometheus implemented for metrics and alerting. Real time web socket enabled packet analysis using TCPDump, and socat to create a socket server, and python for the client side packet analysis using scapy. Deployed and containerized in an on site kubernetes cluster. Additionally, the project uncludes a real time web UI that is designed to provide a birds eye view of the application components state and activity.",
    gitHubLink: "https://github.com/cjbates02/Beekeepers",
    demoLink: "https://docs.google.com/presentation/d/1A27gYCfDR3LZS3NK3JvyMtvrdIQSCj_cPvoTSm4c9Vg/edit?usp=sharing",
    toolList: ['Python', 'JavaScript/HTML/CSS', 'Docker', 'Kubernetes', 'ELK', 'Prometheus', 'Flask', 'Websockets', 'Nginx']
  },
  {
    key: 1,
    title: "SecureScape",
    desc: "Desktop application built with Electron JS and a python backend that is designed to be your everyday users network companion. This tool scans all of the endpoints on your network and checks for open ports, generates a node graph network diagram with all the devices on your network, and scans the web for the latest CVE’s.",
    gitHubLink: "https://github.com/cjbates02/SecureScape",
    demoLink: "https://drive.google.com/file/d/1xPl6gqAheWzK__Y9kpz_A8u6aQsTp6Sg/view?usp=sharing",
    toolList: ['Electron JS', 'Vis Network JS', 'Python', 'Scapy', 'Eel']
  },
  {
    key: 2,
    title: "Personal Website",
    desc: "I developed and deployed this website from scratch. It is written with a react frontend and a flask backend. This website is designed to showcase my skills as efficiently as possible. Additionally I wanted to make it easy for potential employers to get in touch, so I implemented an SMTP client on the backend so users can send messages to me through the contact me section. This website is containerized with docker and deployed onto an nginx server running on an AWS EC2 instance. Additionally, I implemented CI/CD via GitHub actions that automates the entire deployment process.",
    gitHubLink: "https://github.com/cjbates02/Personal-Website",
    demoLink: null,
    toolList: ['React', 'Flask', 'AWS EC2', 'Docker/Docker Compose', 'Bash', 'GitHub Actions', 'Nginx']
  }
];

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth > 1024 ? false : true);
  useEffect(() => {
    function handleResize() {
      (window.innerWidth > 1024) ? setIsMobileDevice(false) : setIsMobileDevice(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content-container">
        <div className="left-panel-container">
          <AboutMe projects={projects} isMobileDevice={isMobileDevice}/>
          <Projects projects={projects} />
          {
            isMobileDevice ? <MyTimeline milestones={milestones}/> : <></>
          }
          <ContactMe />
        </div>
        {
          !isMobileDevice ? <MyTimeline milestones={milestones}/> : <></>
        }
      </div>
    </div>
  );
}

export default App;
