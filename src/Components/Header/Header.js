import React, { Component } from "react";
import "../../App.css"
export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light px-5 mb-0">
                    <a className="navbar-brand col-7" href="#">
                        <img src="https://demo.themefisher.com/small-apps-hugo/images/logo.png" alt="logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  border-bottom">
                            <li className="nav-item px-3"><a className="nav-link text-dark" href="/home"> HOME </a></li>
                            <li className="nav-item px-3"><a className="nav-link text-dark" href="#">ABOUT</a></li>
                            <li className="nav-item px-3"><a className="nav-link text-dark" href="#">CONTENT</a></li>
                            <li className="nav-item px-3"><a className="nav-link text-dark" href="/menement">CONTACT</a></li>
                            <li className="nav-item px-3"><a className="nav-link text-dark" href="#">MEMBER</a></li>
                        </ul>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" />
                    </button>
                </nav>
            </header>
        );
    }
}
