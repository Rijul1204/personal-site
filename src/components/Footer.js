import React, {Component} from 'react'
import Sidebar from "./Sidebar";
import HomePage from "./HomePage";
import Ftco from "./Ftco";
import {BrowserRouter} from "react-router-dom";


class Footer extends Component {
    render() {
        return (


            <div id="colorlib-main">
                <footer className="ftco-footer ftco-bg-dark ftco-section">
                    <div className="container px-md-5">
                        <div className="row mb-5">
                            <div className="col-md">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i
                                        className="icon-heart" aria-hidden="true"/> by <a
                                        href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}

export default Footer;