import React from "react";
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import NavTabs from "../../components/NavTabs";
import "../../components/pages/Home.css";

import { Col, Row } from "react-bootstrap";

function Home() {
    return (
        <div className="home-container">

            <div className="container">

                <div id="home-wrapper">

                    <div className="row">

                        <div className="col-12">

                            <div className="row name-title jumbotron-4 justify-content-center">
                                <Roll left>
                                    <h1 className="display-3">Julie Gran</h1>
                                </Roll>
                            </div>

                            <div className="row subtitle d-flex justify-content-center">

                            </div>
                            <Row className="d-flex justify-content-center">
                                <Row className="row icon-row">
                                    <Col size="xs"><a href="https://github.com/broganneagle"><i className="fab fa-github fa-2x"></i></a></Col>
                                    <Col size="xs"><a href="https://www.linkedin.com/in/brogan-neagle-295190180"><i className="fab fa-linkedin fa-2x"></i></a></Col>
                                    <Col size="xs"> <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:8b6044ff-47fc-4a8e-80d0-83e862a37602"> <i className="fab fa-resume fa-2x"></i></a></Col>
                                </Row>
                            </Row>
                            <div className="row justify-content-center about-Nav" >
                                <Slide left>
                                    <NavTabs />
                                </Slide>
                            </div>

                            <div className="row">
                                <p className="d-flex justify-content-center footer">&copy;Copyright 2020 Brogan Neagle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Home;