import React, {Component} from 'react'
import Sidebar from "./Sidebar";
import HomePage from "./HomePage";
import Ftco from "./Ftco";
import {BrowserRouter} from "react-router-dom";


class Application extends Component {
    render() {
        return (


            <div id="colorlib-main">
                <section className="ftco-section-no-padding bg-light">
                    <div className="hero-wrap">
                        <div className="overlay"/>
                        <div className="d-flex">
                            {/*                            <div className="author-image text img p-md-5"
                                 style={{backgroundImage: 'url(images/author.jpg)'}}>
                            </div>*/}
                            <div className="author-info text p-4 p-md-5 mt-5 mb-5">
                                <div className="desc">
                                    <p className="mb-4">Some of the personal projects, that I've worked on for
                                        experimenting : </p>
                                    <li className="mb-4">
                                        <a target="_blank" href={'http://rashedulhasanrijul.com/collab-drawing-board'}>
                                            Collaborative drawing board
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a target="_blank" href={'http://rashedulhasanrijul.com/cfranking'}>
                                            Codeforces contest decorator
                                        </a>
                                    </li>

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

export default Application;