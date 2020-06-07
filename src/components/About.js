import React, {Component} from 'react'
import Sidebar from "./Sidebar";
import HomePage from "./HomePage";
import Ftco from "./Ftco";
import {BrowserRouter} from "react-router-dom";


class About extends Component {
    render() {
        return (
            <div id="colorlib-main">
                <section className="ftco-section-no-padding bg-light">
                    <div className="hero-wrap">
                        <div className="overlay"/>
                        <div className="d-flex">
                            <div className="author-info text p-4 p-md-5 mt-5 mb-5">
                                <div className="desc">
                                    <h1 className="mb-4"><span>Rashedul Hasan Rijul</span></h1>
                                    <p className="mb-4">I am a backend software engineer at PayPal, Singapore.
                                        I'm interested in working with Java, Spring. I like software designing and love
                                        to build out new things</p>

                                    <p className="mb-4">
                                        You can find my details here :
                                        <li>
                                            <a target={'_blank'} href={'https://github.com/Rijul1204'}>Github</a>
                                        </li>
                                        <li>
                                            <a target={'_blank'}
                                               href={'https://www.linkedin.com/in/rashedul-hasan-rijul-4335a170'}>Linkedin</a>
                                        </li>
                                    </p>
                                    <h3 className="signature h1">Rashedul Hasan Rijul</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section instagram">
                    <div className="container">
                    </div>
                </section>
            </div>

        );
    }
}

export default About;