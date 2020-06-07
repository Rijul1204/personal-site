import React, {Component} from 'react'

class HomePage extends Component {
    render() {
        return (
            <div className="author-info text p-3 p-md-5">
                <div className="desc">
                    <span className="subheading">Hello! I'm</span>
                    <h1 className="mb-4"><span>Rashedul Hasan Rijul</span></h1>
                    <p className="mb-4">Welcome to my page</p>
                    <ul className="ftco-social mt-3">
                        <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                        <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                        <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomePage;