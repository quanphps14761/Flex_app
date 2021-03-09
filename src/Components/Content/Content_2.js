import React, { Component } from 'react'

export default class Content_2 extends Component {
    render() {
        return (
            <section className="feature section hide-overflow">
                <div className="container p-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="image-content aos-init aos-animate" data-aos="fade-left">
                                <img className="img-fluid" src="https://demo.themefisher.com/small-apps-hugo/images/feature/feature-new-02.webp" onerror="this.onerror=null;this.src='http:\/\/demo.themefisher.com\/small-apps-hugo\/images\/feature\/feature-new-02.jpg'" alt="feature image" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="feature-content">
                                <h2>Increase your productivity with Small Apps</h2>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="testimonial">
                                <p>"InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one place."</p>
                                <ul className="list-inline meta">
                                    <li className="list-inline-item"><img src="https://demo.themefisher.com/small-apps-hugo/images/testimonial/feature-testimonial-thumb.jpg" alt="Jonathon Andrew , Themefisher.com" /></li>
                                    <li className="list-inline-item">Jonathon Andrew , Themefisher.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
