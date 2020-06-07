import React, {Component} from 'react'
import {Link} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
                <h1 id="colorlib-logo"><span className="img"
                                             style={{backgroundImage: 'url(images/author.jpg)'}}/>
                    Rashedul Hasan Rijul
                </h1>
                <nav id="colorlib-main-menu" role="navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link to="/application">Web application</Link>
                        </li>
                    </ul>
                </nav>
                {/*<div className="colorlib-footer">*/}
                {/*    <h3>Newsletter</h3>*/}
                {/*    <div className="d-flex justify-content-center">*/}
                {/*        <form action="#" className="colorlib-subscribe-form">*/}
                {/*            <div className="form-group d-flex">*/}
                {/*                <div className="icon"><span className="icon-paper-plane"/></div>*/}
                {/*                <input type="text" className="form-control" placeholder="Enter Email Address"/>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </aside>
        )
    }
}

export default Sidebar;