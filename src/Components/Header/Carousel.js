import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
        <section className="section pt-0 position-relative pull-top mt-5">
            <div className="container p-5">
                <div className="rounded shadow p-5 bg-white">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mb-4 text-center">
                            <i className="tf-ion-paintbucket text-primary h1" />
                            <h3 className="mt-4 text-capitalize h5">themes made easy</h3>
                            <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias.</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="tf-ion-load-b text-primary h1" />
                            <h3 className="mt-4 text-capitalize h5">powerful design</h3>
                            <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias.</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="tf-ion-ios-lightbulb text-primary h1" />
                            <h3 className="mt-4 text-capitalize h5">creative content</h3>
                            <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
