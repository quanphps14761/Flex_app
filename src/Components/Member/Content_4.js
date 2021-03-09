import React, { Component } from 'react'
import Quan from "../../Assets/img/Quan.jpg"
import huy from "../../Assets/img/huy.jpg"
import tu from "../../Assets/img/tu.jpg"
import thanh from "../../Assets/img/thanh.jpg"

export default class Content_4 extends Component {
    render() {
        return (
            <div className="container p-5 m-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2>Flex-IT Team</h2>
                            <p>Còn chơi là còn gỡ</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={huy} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Phan Hồng Quân</h3>
                                <i>Head Of Marketing</i>
                                <p>Hơi mê gái, luôn tốt bụng vì anh em và cho anh em mượn tiền lãi xuất cao.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={Quan} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Phan Hồng Quân</h3>
                                <i>Head Of Marketing</i>
                                <p>Hơi mê gái, luôn tốt bụng vì anh em và cho anh em mượn tiền lãi xuất cao.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={tu} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Phan Hồng Quân</h3>
                                <i>Head Of Marketing</i>
                                <p>Hơi mê gái, luôn tốt bụng vì anh em và cho anh em mượn tiền lãi xuất cao.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={thanh} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Phan Hồng Quân</h3>
                                <i>Head Of Marketing</i>
                                <p>Hơi mê gái, luôn tốt bụng vì anh em và cho anh em mượn tiền lãi xuất cao.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
