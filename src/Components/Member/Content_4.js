import React, { Component } from 'react'
import Quan from "../../Assets/img/Quan.jpg"
import huy from "../../Assets/img/huy.jpg"
import tu from "../../Assets/img/tu.jpg"
import thanh from "../../Assets/img/thanh.jpg"
import "../../avata.css"
export default class Content_4 extends Component {
    render() {
        return (
            <section style={{ backgroundColor: "#FFF" }}>
                <div className="container p-5 mx-auto m-5"  >
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
                            <div className="card team__item__1" style={{ width: '17rem' }}>
                                <img src={huy} className="card-img-top" alt="..." />
                                <div className="card-body px-3 text-light bg-dark">
                                    <h5>ĐẶNG HOÀNG HUY</h5>
                                    <i>Chief executive officer (CEO)</i>
                                </div>
                                <div class="team__item__overplay">
                                    <h3>Information</h3>
                                    <span>Cake Maker</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, exercitationem dignissimos molestiae, accusamus voluptas nesciunt, ipsam voluptate eveniet obcaecati sit provident possimus officia eligendi non blanditiis laboriosam quo eius vitae!</p>
                                    <div class="icon__team">
                                        <i class="fab fa-facebook-f icon1"></i>
                                        <i class="fab fa-twitter icon2"></i>
                                        <span><i class="fa fa-wifi icon3"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card team__item__1" style={{ width: '17rem' }}>
                                <img src={Quan} className="card-img-top" alt="..." />
                                <div className="card-body text-light bg-dark">
                                    <h5>PHAN HỒNG QUÂN</h5>
                                    <i>Head Of Project Manager</i>
                                </div>
                                <div class="team__item__overplay">
                                    <h3>Information</h3>
                                    <span>Cake Maker</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, exercitationem dignissimos molestiae, accusamus voluptas nesciunt, ipsam voluptate eveniet obcaecati sit provident possimus officia eligendi non blanditiis laboriosam quo eius vitae!</p>
                                    <div class="icon__team">
                                        <i class="fab fa-facebook-f icon1"></i>
                                        <i class="fab fa-twitter icon2"></i>
                                        <span><i class="fa fa-wifi icon3"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card team__item__1" style={{ width: '17rem' }}>
                                <img src={tu} className="card-img-top" alt="..." />
                                <div className="card-body text-light bg-dark">
                                    <h5>HOÀNG ANH TÚ</h5>
                                    <i>Head Of Marketing</i>
                                </div>
                                <div className="team__item__overplay">
                                    <h3>Information</h3>
                                    <span>Like</span>
                                    <p>Gái</p>
                                    <span>Description</span>
                                    <p>Hay xin đồ bạn dù là 1 cái ốp lưng cũng không ta</p>
                                    <div className="icon__team">
                                        <i className="fab fa-facebook-f icon1" />
                                        <i className="fab fa-twitter icon2" />
                                        <span><i className="fa fa-wifi icon3" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 ">
                            <div className="card team__item__1" style={{ width: '17rem' }}>
                                <img src={thanh} height="360px" className="card-img-top" alt="..." />
                                <div className="card-body text-light bg-dark">
                                    <h5>HUỲNH TẤN THÀNH</h5>
                                    <i>Head Of Sleep</i>
                                </div>
                                <div class="team__item__overplay">
                                    <h3>Information</h3>
                                    <span>Cake Maker</span>
                                    <p>Không làm nhưng vẫn có ăn, hay khóc nhưng điểm vẫn luôn 10</p>
                                    <div class="icon__team">
                                        <i class="fab fa-facebook-f icon1"></i>
                                        <i class="fab fa-twitter icon2"></i>
                                        <span><i class="fa fa-wifi icon3"></i></span>
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
