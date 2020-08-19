import React from "react";
import NavTabs from "../../components/NavTabs";
import "../pages/Home.css";
import { Col, Row } from "react-bootstrap";

function About() {
  return (
    <div className="about-container">




      <div id="aboutme-wrapper">
        <Row>



          <Row className="about-title jumbotron-4 justify-content-center">
            <h1 className="display-4">About Me</h1>

          </Row>



          <Row className="photo-row justify-content-center">
            <img className="my-img" src="data:image/jpeg;base64,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"
             alt="Brogan" />
          </Row>


          <Row className="about-text">
            <Col></Col>
            <Col xs={8}>
              <p>Full-stack web developer with Electrical and Computer Engineering, specifically software
                        engineering and design, and Entrepreneurship experience educated at The University of Texas at
                        Austin. Certified in full stack web development from The University of Texas at Austin. </p>

              <p>Skills in HTML, CSS, and JavaScript and strengths in problem solving, creativity, and leadership.
                        Successfully obtained a trademark and patent on my first startup company HeadVault. Passionate
                        about finding technological solutions to community needs and collaborating with others to create
                        meaningful web applications. Excited to continue to develop a new social media platform called
                        Unwind, Inc. Positioned to provide unique perspectives on how work as a team to solve a need in
                        our community. </p>

            </Col>
            <Col></Col>
          </Row>

          <Row className="about-Nav" >
          <Col></Col>
          <Col xs={3} className ="justify-content-center">
            <NavTabs />
          </Col>
          <Col></Col>
          </Row>

        </Row>
    </div>
    </div >

  );
}

export default About;