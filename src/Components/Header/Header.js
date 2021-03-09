import React, { Component } from "react";
import "./Header.css"
export default class Header extends Component {
    render() {
        return (
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-dark row text-center pb-5 pt-3">
                    <div className="navbar-brand py-0 col-5" href="#">
                        <img src="https://demo.themefisher.com/small-apps-hugo/images/logo.png" alt="logo" />
                    </div>
                    <button className="navbar-toggler bg-secondary col-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-dark" />
                    </button>
                    <div className="collapse navbar-collapse col-6" id="navbarNav">
                        <ul className="navbar-nav  border-bottom">
                            <li className="nav-item px-3">
                                <a className="nav-link text-dark" href="#"> HOME </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link text-dark" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link text-dark" href="#">CONTENT</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link text-dark" href="#">CONTACT</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link text-dark" href="#">MEMBER</a>
                            </li>
                        </ul>
                    </div>
                </nav>






                <div className="row align-items-center p-5">
                    <div className="col-md-6 order-2 order-md-1 text-md-left">
                        <div className="col-10">
                            <h1 className="text-dark font-weight-bold mb-4">Showcase your app with Small Apps</h1>
                            <p className="text-dark mb-6">Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App.</p>
                            <button href="https://demo.themefisher.com/small-apps-hugo" className="btn btn-primary">Download Now</button>
                        </div>

                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <img src="https://demo.themefisher.com/small-apps-hugo/images/mobile.webp" onerror="this.onerror=null;this.src='http:\/\/demo.themefisher.com\/small-apps-hugo\/images\/mobile.png'" className="img-fluid" alt="banner-image" />
                    </div>
                </div>
            </header>
        );
    }
}
