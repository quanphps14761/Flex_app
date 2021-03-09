import React, { Component } from 'react'
import "../../App.css"
export default class FromContact extends Component {
    render() {
        return (
            <div className="p-5">
                <section class="section page-title text-center mb-0">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-6 m-auto">
                                <h1>Contact Us</h1>
                                <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-form section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-4">Drop us a mail</h2>
                            </div>
                            <div className="col-12">
                                <form action="#" className="row">
                                    <div className="col-md-6 mb-3">
                                        <input className="form-control main" type="text" placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input className="form-control main" type="email" placeholder="Your Email Address" required />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input className="form-control main" type="text" placeholder="Subject" required />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <textarea className="form-control main" name="message" rows={10} placeholder="Your Message" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-outline-primary fs-5">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
