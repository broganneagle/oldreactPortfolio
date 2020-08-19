import React from "react";
import NavTabs from "../../components/NavTabs";
import "../pages/Home.css";
import { Col, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function Portfolio() {
    return (
        <div className="port-container">
            <div id="port-wrapper">
                <Row>

                    <Row className="about-title jumbotron-4 justify-content-center">
                        <h1 className="display-4">Portfolio</h1>
                    </Row>
                    <Row>
                        <Carousel >

                            <Carousel.Item>
                            <img src="https://www.clipartkey.com/mpngs/m/55-552088_transparent-cooking-utensils-clipart-food-icon-png-free.png"
                            alt="Utensil Image" class="card-img-top"/>

                                <Carousel.Caption>
                                    <h4>To Cook Or Not To Cook</h4>
                                    <a href="https://github.com/broganneagle/Project-1.git" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://broganneagle.github.io/Project-1/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>

                            <img src="https://www.clipartkey.com/mpngs/m/11-118536_quiz-on-transparent-background.png"
                            alt="Code Quiz Image" class="card-img-top"/>
                            
                                <Carousel.Caption>
                                    <h4>Code Quiz</h4>
                                    <a href="https://github.com/broganneagle/HW4.git" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://broganneagle.github.io/HW4/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src="https://365psd.com/images/previews/e48/inclement-weather-52093.png"
                            alt="Weather Dashboard Image" class="card-img-top"/>

                                <Carousel.Caption>
                                    <h4>Weather Dashboard</h4>
                                    <a href="https://github.com/broganneagle/WeatherDashboard.git"  target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://broganneagle.github.io/WeatherDashboard/"  target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src="https://i.pinimg.com/originals/f2/b7/60/f2b7604351eed0cf4de3b7042b1ecb7b.gif"
                            alt="Employee Summary Image" class="card-img-top"/>
                                <Carousel.Caption>
                                    <h4>Cool Places</h4>
                                    <a href="https://github.com/broganneagle/Project2.git" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://broganneagle.github.io/Project2/"  target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src="https://webstockreview.net/images/binder-clipart-clip-art-18.png"
                            alt="Day Planner Image" class="card-img-top"/>
                            <Carousel.Caption>
                                    <h4>Day Planner</h4>
                                    <a href="https://github.com/broganneagle/HW5.git" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://broganneagle.github.io/HW5/"  target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src="https://media.wired.com/photos/5926e34f8d4ebc5ab806bd1c/2:1/w_2500,c_limit/GettyImages-528338761.jpg"
                                alt="Password Generator Image" class="card-img-top"/>
                            <Carousel.Caption>
                                    <h4>Password Generator</h4>
                                    <a href="https://github.com/broganneagle/PasswordGenerator.git" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://broganneagle.github.io/PasswordGenerator/"  target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    
                    <Row className="about-Nav port-Nav" >
                        <Col></Col>
                        <Col xs={3} className="justify-content-center">
                            <NavTabs />
                        </Col>
                        <Col></Col>
                    </Row>
                    </Row>

            </div>
        </div >

    );
}

export default Portfolio;