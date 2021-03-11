import React, { Component } from 'react'
import { connect } from "react-redux"
import "../../acb.css"

class Menement extends Component {
    renderListContact = () => {
        return this.props.listContact.map((item, index) => {
            return (
                <tr key ={index}>
                    <td></td>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td>{item.email}</td>
                    <td>{item.messages}</td>
                    <td><button className="btn btn-warning">Xóa</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div  >
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Flex-Lock Management</h3>
                            <strong>FL</strong>
                        </div>
                        <ul className="list-unstyled components">
                            <li className="active"><a href="#homeSubmenu">Liên hệ khác hàng</a></li>
                            <li><a href="#">Nhân Viên</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <div id="content">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" id="sidebarCollapse" className="btn btn-outline-dark">
                                        <i className="glyphicon glyphicon-align-left" />
                                        <span className="fs-3 px-5">Danh sách Liên hệ</span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                        <div className="container">
                            <div className="card text-center">
                                {/* Header */}
                                {/* <div className="card-header myCardHeader">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3 className="text-left text-dark font-weight-bold">Danh sách Liên hệ</h3>
                                        </div>
                                    </div>
                                </div> */}
                                {/* Body */}
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder=" Tìm kiếm" id="searchName" />
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-bordered table-hover myTable">
                                        <thead className="text-dark">
                                            <tr>
                                                <th className="nowrap">Stt</th>
                                                <th>Full Name</th>
                                                <th>Phone Number</th>
                                                <th>Email</th>
                                                <th>Messages</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableDanhSach">
                                            {this.renderListContact()}
                                        </tbody>
                                    </table>
                                </div>
                                {/* Footer */}
                                <div className="card-footer myCardFooter">
                                    <nav>
                                        <ul className="pagination justify-content-center" id="ulPhanTrang">
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        listContact: state.FormReducers.arrContact
    }
}
export default connect(mapStateToProps, null)(Menement);
