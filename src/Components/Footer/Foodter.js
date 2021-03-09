import React, { Component } from 'react'
import "../../App.css"
export default class Foodter extends Component {
    render() {
        return (
               <section className="call-to-action-app section bg-dark text-light p-5">
                   <div className="container text-center">
                       <div className="row">
                           <div className="col-lg-12">
                               <h2>It’s Time to change your mind</h2>
                               <p>Download over 2 million humans .Get Small Apps free forever! We say you won’t look back.</p>
                               <ul className="list-inline text-light">
                                   <li className="list-inline-item"><a href="#" className="btn btn-rounded-icon text-light"><i className="tf-ion-social-apple" />Iphone</a></li>
                                   <li className="list-inline-item"><a href="#" className="btn btn-rounded-icon text-light"><i className="tf-ion-social-android" />Android</a></li>
                                   <li className="list-inline-item"><a href="#" className="btn btn-rounded-icon text-light"><i className="tf-ion-social-windows" />Windows</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

        )
    }
}
