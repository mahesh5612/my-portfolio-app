import { Paper } from "@mui/material";
import "./App.css";
import myImg from "./assets/my.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";
import { Counter } from "counterapi";

const counterClient = new Counter({
  workspace: "nahtanextgenacademy"
});

function App() {
  const [count, setCount] = useState(0);

  const startYear = 2007;
  const currentYear = new Date().getFullYear();

  const totalExperience = currentYear - startYear;

  const incrementCounter = async () => {
    try {
      const counter = await counterClient.up("mna-page-views");
      console.log(counter);
      setCount(counter.data.up_count);
    } catch (error) {
      console.error("Error incrementing counter:", error.message);
    }
  };

  useEffect(() => {
    incrementCounter();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "pink",
          padding: "16px"
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Nahta Next Gen Academy Welcomes You!
        </h1>
        <div style={{ display: "flex", width: "60%", margin: "auto" }}>
          <img
            src={myImg}
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
          <div style={{ margin: "8px" }}>
            I have {totalExperience}+ years of extensive industry experience in
            web application development using frontend, backend, databases,
            cloud & DevOps related technologies majorly using monolithic,
            microservices and serverless based architectures.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "16px"
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Following courses are available:
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "16px",
            maxWidth: "350px",
            margin: "auto",
            flexWrap: "wrap"
          }}
        >
          <Paper
            style={{
              padding: "8px",
              width: "130px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "lightgray"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                fontWeight: "bold",
                backgroundColor: "orange",
                padding: 4,
                borderRadius: "8px"
              }}
            >
              INR 6000/-
            </div>
            <h3 style={{ marginTop: "36px" }}>Frontend:</h3>
            <ul>
              <li>HTML & CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </Paper>
          <Paper
            style={{
              padding: "8px",
              display: "flex",
              width: "130px",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "lightgray"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                fontWeight: "bold",
                backgroundColor: "orange",
                padding: 4,
                borderRadius: "8px"
              }}
            >
              INR 8000/-
            </div>
            <h3 style={{ marginTop: "36px" }}>Backend:</h3>
            <ul>
              <li>Java, SQL</li>
              <li>Spring, JPA/Hibernate</li>
              <li>Microservices</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </Paper>
          <Paper
            style={{
              padding: "8px",
              display: "flex",
              width: "130px",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "lightgray"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                fontWeight: "bold",
                backgroundColor: "orange",
                padding: 4,
                borderRadius: "8px"
              }}
            >
              INR 14000/-
            </div>
            <h3 style={{ marginTop: "36px" }}>Full Stack:</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>Javascript, React</li>
              <li>Java, Spring, JPA/Hibernate</li>
              <li>Microservices</li>
              <li>SQL</li>
              <li>Docker, AWS</li>
            </ul>
          </Paper>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "pink",
          padding: "16px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Salient features of the courses:
        </h1>
        <ul>
          <li>All the courses will be taught by me and covered online</li>
          <li>
            Students will become interview and job-ready, if they sincerely
            attend all the classes and practice regularly
          </li>
          <li>
            Classes will be conducted only on Saturdays and Sundays for 2 hours
            each day
          </li>
          <li>Course completion certificate will be provided online</li>
          <li>I will try to cover the courses in-depth as possible</li>
          <li>
            1:1 mentorship is possible as students can connect to me whenever
            required
          </li>
          <li>
            Students will be saving lot of money as they need not spend on
            expensive courses
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 style={{ textAlign: "center" }}>Contact us for bookings:</h1>
        <div style={{ display: "flex" }}>
          <PhoneIcon />
          <div style={{ marginLeft: "8px" }}>9811437604</div>
        </div>
        <div style={{ display: "flex" }}>
          <EmailIcon />
          <div style={{ marginLeft: "8px" }}>mahesh_5612@yahoo.com</div>
        </div>
        <div>Visitor count: {count}</div>
      </div>
    </>
  );
}

export default App;
