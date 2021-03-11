import React, { Component } from 'react'
import "../../App.css"
import { connect } from "react-redux"
// import { XuLyContact } from"./XuLyContact"
class FromContact extends Component {
    state = {
        name: "",
        number: "",
        email: "",
        messages: "",
    }

    handleChangeValue = (event) => {
        let input = event.target;
        let { name, value } = input
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state);
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.addNewContact(this.state);
    }

    render() {
        return (
            <div className="mb-5">
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
                                <form className="row" onSubmit = {this.handleSubmit}>
                                    <div className="col-md-6 mb-3">
                                        <input className="form-control main" type="text" placeholder="Your Full Name" name="name" required
                                            onChange={(event) => {
                                                this.handleChangeValue(event);
                                            }} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input className="form-control main" type="text" name="number" placeholder="Your Phone Number" required
                                            onChange={(event) => {
                                                this.handleChangeValue(event);
                                            }} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input className="form-control main" type="email" name="email" placeholder="Your Email Address" required
                                            onChange={(event) => {
                                                this.handleChangeValue(event);
                                            }} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <textarea className="form-control main" name="message" rows={10} placeholder="Your Message" defaultValue={""}
                                            onChange={(event) => {
                                                this.handleChangeValue(event);
                                            }} />
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
const mapStateToProps = state => ({arrState: state.FormReducers})
const mapDispatchToProps = (dispatch) =>{
    return {
        addNewContact: (option)=>{
            const action = {
                type : "NEW_CONTACT",
                option
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FromContact);
