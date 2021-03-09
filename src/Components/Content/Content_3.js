import React, { Component } from 'react'

export default class Content_3 extends Component {
    render() {
        return (
            <section className="service section text-center align-items-center bg-light">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-12 m-5">
                            <div className="section-title text-dark">
                                <h2>Tính năng</h2>
                                <p>Small Apps makes it easy to stay on top of your Life Style. No late tasks. No gimmicks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6 align-self-center">
                            <div className="service-thumb left aos-init aos-animate" data-aos="fade-right">
                                <img className="img-fluid" src="https://demo.themefisher.com/small-apps-hugo/images/feature/iphone-ipad.webp" onerror="this.onerror=null;this.src='http:\/\/demo.themefisher.com\/small-apps-hugo\/images\/feature\/iphone-ipad.jpg'" alt="service image" />
                            </div>
                        </div>
                        <div className="col-lg-6 mr-auto align-self-center p-5 fs-6" style={{ backgroundColor: "#FFF"}}>
                            <div className="service-box ">
                                <div className="row align-items-center" style={{fontSize:"14px"}}>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="service-item">
                                            <i className="tf-ribbon" />
                                            <h3>Easy Prototyping</h3>
                                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="service-item">
                                            <i className="tf-puzzle" />
                                            <h3>Sensor Bridge</h3>
                                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="service-item">
                                            <i className="tf-bargraph" />
                                            <h3>Strategist</h3>
                                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="service-item">
                                            <i className="tf-adjustments" />
                                            <h3>Art Direction</h3>
                                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
