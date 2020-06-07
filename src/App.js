import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import HomePage from "./components/HomePage";
import Ftco from "./components/Ftco";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/Main";
import ReactDOM from "react-dom";
import About from "./components/About";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Application from "./components/Application";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/*                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>*/}
                    <Switch>
                        <Route exact path="/">
                            <div id="colorlib-page">
                                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i/></a>
                                <Sidebar/>
                                <Main/>
                                <Footer/>
                            </div>
                        </Route>
                        <Route path="/about">
                            <div id="colorlib-page">
                                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i/></a>
                                <Sidebar/>
                                <About/>
                                <Footer/>
                            </div>
                        </Route>
                        <Route path="/resume">
                            <div id="colorlib-page">
                                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i/></a>
                                <Sidebar/>
                                <Resume/>
                                <Footer/>
                            </div>
                        </Route>
                        <Route path="/application">
                            <div id="colorlib-page">
                                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i/></a>
                                <Sidebar/>
                                <Application/>
                                <Footer/>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>


        );
    }
}

export default App;
