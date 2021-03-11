import React, { Component } from "react";

export default class Carousel extends Component {
    render() {
        return (
            <section>
                <section className="bg-mau pt-5 carousel">
                    <div className="row align-items-center container mx-auto" >
                        <div className="col-md-6 order-2 order-md-1 text-md-left">
                            <div className="col-11 text-light">
                                <h1 className="font-weight-bold mb-4 display-4">Features and benefits that Flex-lock brings</h1>
                                <p className="font-weight-bold mb-6">Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App.</p>
                                <button href="https://demo.themefisher.com/small-apps-hugo" className="btn btn-warning fs-4 px-5 mt-2">Download Now</button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center order-1 order-md-2">
                            <img src="https://demo.themefisher.com/small-apps-hugo/images/mobile.webp" onerror="this.onerror=null;this.src='http:\/\/demo.themefisher.com\/small-apps-hugo\/images\/mobile.png'" className="img-fluid" alt="banner-image" />
                        </div>
                    </div>
                </section>
                <section className="section position-relative pull-top" style={{ position: "absolute", top: -50 }}>
                    <div className="container">
                        <div className="rounded shadow p-5 bg-white">
                            <div className="row justify-content-center">
                                <div className="col-md-3 mb-4 text-center">
                                    <i class='bx bxs-download bx-burst fs-1'></i>
                                    <h3 className="mt-4 text-capitalize h5">Download</h3>
                                    <p className="regular text-muted">Lượt download ứng dụng tính tới thời điểm hiện tại</p>
                                    <p className="display-6">1220</p>
                                </div>
                                <div className="col-md-3 mb-4 text-center">
                                    <i className='bx bx-crown fs-1 bx-burst'></i>
                                    <h3 className="mt-4 text-capitalize h5">vip member</h3>
                                    <p className="regular text-muted">Số lượt người đăng kí thành viên VIP</p>
                                    <p className="display-6">1220</p>
                                </div>
                                <div className="col-md-3 mb-4 text-center">
                                    <i class='bx bx-like bx-burst fs-1'></i>
                                    <h3 className="mt-4 text-capitalize h5">like</h3>
                                    <p className="regular text-muted">Số lượt người yêu thích ứng dụng</p>
                                    <p className="display-6">1220</p>
                                </div>
                                <div className="col-md-3 mb-4 text-center">
                                    <i class='bx bx-link fs-1 bx-burst'></i>
                                    <h3 className="mt-4 text-capitalize h5">Project</h3>
                                    <p className="regular text-muted">Số lượt người yêu thích ứng dụng</p>
                                    <p className="display-6">1220</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        );
    }
}
