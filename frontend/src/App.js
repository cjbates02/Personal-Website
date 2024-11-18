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
    title: "Project Kickoff",
    description:
      "The project officially begins with initial planning and team formation.",
  },
  {
    key: 6,
    date: "August 2021",
    title: "Initial Research",
    description:
      "The team conducts market research to understand user needs and competitive landscape.",
  },
  {
    key: 2,
    date: "August 2022",
    title: "Prototype Completion",
    description:
      "The first version of the product prototype is completed and tested.",
  },
  {
    key: 7,
    date: "August 2022",
    title: "Final Design Approval",
    description:
      "The product design is finalized and approved by all stakeholders.",
  },
  {
    key: 3,
    date: "March 2023",
    title: "Beta Launch",
    description:
      "The product enters beta testing with a select group of users.",
  },
  {
    key: 4,
    date: "March 2023",
    title: "User Feedback Collection",
    description:
      "User feedback is gathered and analyzed to improve the product before full launch.",
  },
  {
    key: 5,
    date: "March 2023",
    title: "Performance Optimization",
    description:
      "The product undergoes performance optimization to ensure scalability and speed.",
  },
  {
    key: 8,
    date: "March 2023",
    title: "Full Product Launch",
    description:
      "The product is released to the public, marking the completion of the first phase.",
  },
  {
    key: 9,
    date: "March 2023",
    title: "Customer Support Setup",
    description:
      "A customer support system is set up to handle queries and issues from users.",
  },
  {
    key: 10,
    date: "March 2023",
    title: "First Major Update",
    description:
      "The first major product update is released, including new features and improvements.",
  },
];

const projects = [
  {
    key: 0,
    title: "Honeynet Distributed System",
    desc: "Network of multiple open source and custom honeypots sending logs to an ELK stack. Prometheus implemented for metrics and alerting. Real time packet analysis using TCPDump, socat to create a socket server, and python for the client side packet analysis. Deployed in an on site kubernetes cluster.",
    gitHubLink: "https://github.com/cjbates02/Beekeepers",
    demoLink: "",
  },
  {
    key: 1,
    title: "SecureScape",
    desc: "Desktop application built with Electron JS and a python backend that is designed to be your everyday users network companion. This tool scans all of the endpoints on your network and checks for open ports, generates a node graph network diagram with all the devices on your network, and scans the web for the latest CVE’s.",
    gitHubLink: "https://github.com/cjbates02/SecureScape",
    demoLink: "",
  },
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
          <AboutMe projects={projects} />
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
