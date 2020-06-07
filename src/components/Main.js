import React, {Component} from 'react'
import HomePage from "./HomePage";


class Main extends Component {
    render() {
        return (
            <div id="colorlib-main">
                <section className="ftco-section-no-padding bg-light">
                    <div className="hero-wrap">
                        <div className="overlay"/>
                        <div className="d-flex align-items-center js-fullheight">
                            <HomePage/>
                        </div>
                    </div>
                </section>
                <section className="ftco-section instagram">
                    <div className="container">
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;